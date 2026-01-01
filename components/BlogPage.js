'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
    FaCode, FaLaptopCode, FaMobileAlt, FaRobot, FaPaperPlane,
    FaTwitter, FaFacebookF, FaLinkedinIn, FaLink, FaSearch, FaUserEdit
} from 'react-icons/fa';
import { toast } from 'react-toastify';
// Toast CSS imported in layout
import axios from 'axios';
import Reveal from './Reveal';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [guestBloggerForm, setGuestBloggerForm] = useState({
        name: '',
        email: '',
        topic: '',
        message: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const postsPerPage = 6;

    const categories = ['All', 'Web Development', 'App Development', 'AI'];

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            // Use relative path for internal API
            const response = await axios.get('/api/blogs', {
                timeout: 8000
            });
            const publishedPosts = response.data
                .filter(post => post.status === 'published')
                .map(post => ({
                    ...post,
                    category: post.category || 'Web Development'
                }));
            setPosts(publishedPosts);
            setError(null);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setError('Failed to load blog posts. Please try again later.');
            toast.error('Failed to load blog posts.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Web Development':
                return <FaLaptopCode className="inline-block mr-2" />;
            case 'App Development':
                return <FaMobileAlt className="inline-block mr-2" />;
            case 'AI':
                return <FaRobot className="inline-block mr-2" />;
            default:
                return <FaCode className="inline-block mr-2" />;
        }
    };

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            stripHtmlTags(post.content).toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const calculateReadTime = (content) => {
        if (!content) return '1 min read';
        return `${Math.max(1, Math.ceil(stripHtmlTags(content).split(' ').length / 200))} min read`;
    };

    function stripHtmlTags(html) {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
    }

    const handleGuestBloggerSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbza_1xxJ1GrF53YTheAWru-HvOgI-31MWsRYhLd927SpyEP2lHH8io_yItjjEMzL1DW/exec';
        const formData = new FormData();
        formData.append('name', guestBloggerForm.name);
        formData.append('email', guestBloggerForm.email);
        formData.append('topic', guestBloggerForm.topic);
        formData.append('message', guestBloggerForm.message);

        try {
            const callbackName = 'jsonpCallback_' + Date.now();
            const jsonpPromise = new Promise((resolve, reject) => {
                window[callbackName] = (data) => {
                    if (data && data.result === 'success') {
                        resolve(data);
                    } else {
                        reject(new Error(data.message || 'Form submission failed'));
                    }
                    delete window[callbackName];
                    if (script.parentNode) {
                        script.parentNode.removeChild(script);
                    }
                    clearTimeout(timeout);
                };

                const timeout = setTimeout(() => {
                    if (window[callbackName]) {
                        delete window[callbackName];
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                        reject(new Error('Request timed out'));
                    }
                }, 15000);

                const script = document.createElement('script');
                const params = new URLSearchParams();
                formData.forEach((value, key) => {
                    params.append(key, value);
                });
                params.append('callback', callbackName);
                params.append('prefix', 'jsonpCallback_');

                script.src = `${scriptURL}?${params.toString()}`;
                document.body.appendChild(script);
            });

            await jsonpPromise;
            toast.success('Guest blog request submitted successfully!');
            setGuestBloggerForm({
                name: '',
                email: '',
                topic: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error.message || 'Something went wrong! Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuestBloggerForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleShare = async (platform, post) => {
        if (!post) {
            toast.error('No post selected for sharing');
            return;
        }

        // In Next.js client component, window is available
        const baseUrl = window.location.origin;
        const postIdentifier = post.slug || post._id;
        if (!postIdentifier) {
            toast.error('Could not generate a valid link for this post');
            return;
        }

        const postUrl = `${baseUrl}/post/${postIdentifier}`;
        const text = `Check out this article: ${post.title}`;

        try {
            switch (platform) {
                case 'twitter':
                    window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(postUrl)}`,
                        '_blank'
                    );
                    break;
                case 'facebook':
                    window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
                        '_blank'
                    );
                    break;
                case 'linkedin':
                    window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
                        '_blank'
                    );
                    break;
                case 'copy':
                    await navigator.clipboard.writeText(postUrl);
                    toast.success('Link copied to clipboard!');
                    break;
                default:
                    toast.error('Invalid sharing platform');
                    break;
            }
        } catch (error) {
            console.error('Share error:', error);
            toast.error('Failed to share post');
        }
    };

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-amber-50/30 font-sans text-text-main pt-0 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-40 -left-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                            Tech Blog
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            Tech <span className="text-amber-500">Insights</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Deep dives into Web Development, Artificial Intelligence, and the future of technology.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all shadow-lg"
                            />
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </Reveal>

                {/* Category Filter */}
                <Reveal>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-amber-500 text-black shadow-lg'
                                    : 'bg-white text-slate-600 border border-gray-200 hover:border-amber-400 hover:text-amber-600'
                                    }`}
                            >
                                {getCategoryIcon(category)} {category}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Content Area */}
                {loading ? (
                    <div className="min-h-[400px] flex flex-col items-center justify-center">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-slate-600 font-medium">Loading amazing content...</p>
                    </div>
                ) : error ? (
                    <div className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-sm border border-red-100">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Blog Grid */}
                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {currentPosts.map((post, index) => (
                                    <Reveal key={post._id} delay={index * 100}>
                                        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                            <Link href={`/post/${post._id}`} className="block relative overflow-hidden h-56">
                                                <img
                                                    src={post.featuredImage || post.image || 'https://via.placeholder.com/600x400'}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                                                        {post.category || 'Tech'}
                                                    </span>
                                                </div>
                                            </Link>

                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                                    <span>•</span>
                                                    <span>{calculateReadTime(post.content)}</span>
                                                </div>

                                                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                    <Link href={`/post/${post._id}`}>
                                                        {stripHtmlTags(post.title)}
                                                    </Link>
                                                </h2>

                                                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                                                    {stripHtmlTags(post.content).substring(0, 150)}...
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                                    <Link
                                                        href={`/post/${post._id}`}
                                                        className="text-sm font-semibold text-primary hover:underline"
                                                    >
                                                        Read Article →
                                                    </Link>

                                                    <div className="flex gap-2">
                                                        <button onClick={() => handleShare('twitter', post)} className="text-slate-400 hover:text-amber-400 transition-colors p-1">
                                                            <FaTwitter />
                                                        </button>
                                                        <button onClick={() => handleShare('linkedin', post)} className="text-slate-400 hover:text-amber-600 transition-colors p-1">
                                                            <FaLinkedinIn />
                                                        </button>
                                                        <button onClick={() => handleShare('copy', post)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                                                            <FaLink />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Reveal>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">No posts found</h3>
                                <p className="text-slate-600">Try adjusting your search or category filter.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredPosts.length > postsPerPage && (
                            <Reveal>
                                <div className="flex justify-center gap-2 mb-16">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                                    >
                                        Previous
                                    </button>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${currentPage === index + 1
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </Reveal>
                        )}
                    </>
                )}

                {/* Guest Blogger Section */}
                <Reveal>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-sm font-medium mb-6 text-amber-700">
                                    <FaUserEdit className="text-amber-500" />
                                    <span>Guest Posting</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Share Your Knowledge</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Have expertise in Web Development, AI, or Tech? Become a guest author and share your insights with our growing community of developers.
                                </p>
                                <div className="flex flex-col gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold">1</div>
                                        <span>Submit your topic proposal</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold">2</div>
                                        <span>We review and approve within 48 hours</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold">3</div>
                                        <span>Your article gets published and shared</span>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleGuestBloggerSubmit} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={guestBloggerForm.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={guestBloggerForm.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="topic"
                                    placeholder="Proposed Topic"
                                    value={guestBloggerForm.topic}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Brief description of your idea..."
                                    value={guestBloggerForm.message}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                                >
                                    {submitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Submit Proposal
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Blog;

