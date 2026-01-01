'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendar, FaClock, FaTag, FaTwitter, FaFacebookF, FaLinkedinIn, FaLink, FaShare, FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import Reveal from './Reveal';

const BlogPost = ({ slug }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                // Try precise fetch first
                const postResponse = await axios.get(`/api/blogs/${slug}`);

                if (postResponse.data) {
                    const currentPost = postResponse.data;
                    setPost({
                        ...currentPost,
                        category: currentPost.category || 'Web Development'
                    });

                    // Fetch all for related posts
                    const allPostsResponse = await axios.get('/api/blogs');
                    const allPosts = allPostsResponse.data;

                    const related = allPosts
                        .filter(p =>
                            p.category === currentPost.category &&
                            p._id !== currentPost._id &&
                            p.status === 'published'
                        )
                        .slice(0, 3);

                    setRelatedPosts(related);
                    setError(null);
                } else {
                    setError('Post not found');
                }
            } catch (postError) {
                console.error('Error fetching specific post:', postError);
                try {
                    // Fallback: fetch all and find
                    const allPostsResponse = await axios.get('/api/blogs');
                    const allPosts = allPostsResponse.data;
                    const currentPost = allPosts.find(p => p._id === slug || p.slug === slug);

                    if (currentPost) {
                        setPost({
                            ...currentPost,
                            category: currentPost.category || 'Web Development'
                        });

                        const related = allPosts
                            .filter(p =>
                                p.category === currentPost.category &&
                                p._id !== currentPost._id &&
                                p.status === 'published'
                            )
                            .slice(0, 3);

                        setRelatedPosts(related);
                        setError(null);
                    } else {
                        setError('Post not found');
                    }
                } catch (error) {
                    console.error('Error fetching post:', error);
                    setError('Failed to load post. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPost();
        } else {
            setError('Invalid post identifier');
            setLoading(false);
        }
    }, [slug]);

    const formatDate = (dateString) => {
        if (!dateString) return 'Unknown date';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const calculateReadTime = (content) => {
        if (!content) return 1;
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    };

    const handleShare = async (platform) => {
        if (!post) return;

        const baseUrl = window.location.origin;
        const postIdentifier = post.slug || post._id;
        if (!postIdentifier) {
            toast.error('Could not generate a valid link for this post');
            return;
        }

        const postUrl = `${baseUrl}/post/${postIdentifier}`;
        const text = `Check out this article: ${post.title}`;

        switch (platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(postUrl)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank');
                break;
            case 'copy':
                try {
                    await navigator.clipboard.writeText(postUrl);
                    toast.success('Link copied to clipboard!');
                } catch (err) {
                    console.error('Clipboard API error:', err);
                    toast.error('Failed to copy link');
                }
                break;
            default:
                break;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-slate-600 font-medium">Loading article...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-red-100 max-w-md w-full">
                    <p className="text-red-500 mb-6 text-lg">{error}</p>
                    <Link href="/blog" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium">
                        <FaArrowLeft /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    if (!post) return null;

    return (
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 font-sans text-text-main">
            <article className="max-w-4xl mx-auto">
                <Reveal>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-medium group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Articles
                    </Link>
                </Reveal>

                <Reveal>
                    <header className="mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-primary rounded-full text-sm font-bold mb-6">
                            <FaTag className="text-xs" />
                            {post.category || 'Tech'}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <img
                                    src={post.authorImage || 'https://via.placeholder.com/40'}
                                    alt={post.authorName || 'Author'}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <span className="font-semibold text-slate-700">{post.authorName || 'Al Qadri Dev'}</span>
                            </div>
                            <span className="flex items-center gap-2">
                                <FaCalendar className="text-primary" /> {formatDate(post.createdAt)}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClock className="text-primary" /> {calculateReadTime(post.content)} min read
                            </span>
                        </div>
                    </header>
                </Reveal>

                <Reveal>
                    <div className="rounded-3xl overflow-hidden shadow-xl mb-12 border border-gray-100">
                        <img
                            src={post.featuredImage || post.image || 'https://via.placeholder.com/1200x600'}
                            alt={post.title}
                            className="w-full h-auto object-cover max-h-[500px]"
                            loading="lazy"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/1200x600?text=Image+Not+Available';
                            }}
                        />
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <Reveal>
                            <div className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-md
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-amber-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                prose-code:bg-slate-100 prose-code:text-primary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                                <div dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available</p>' }} />
                            </div>
                        </Reveal>

                        {/* Share Section */}
                        <Reveal>
                            <div className="mt-12 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
                                    <FaShare className="text-primary" /> Share this article
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <button onClick={() => handleShare('twitter')} className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-[#1da1f2] hover:text-white transition-all duration-300 flex items-center justify-center text-xl hover:-translate-y-1" aria-label="Share on Twitter">
                                        <FaTwitter />
                                    </button>
                                    <button onClick={() => handleShare('facebook')} className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-[#4267b2] hover:text-white transition-all duration-300 flex items-center justify-center text-xl hover:-translate-y-1" aria-label="Share on Facebook">
                                        <FaFacebookF />
                                    </button>
                                    <button onClick={() => handleShare('linkedin')} className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 flex items-center justify-center text-xl hover:-translate-y-1" aria-label="Share on LinkedIn">
                                        <FaLinkedinIn />
                                    </button>
                                    <button onClick={() => handleShare('copy')} className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center justify-center text-xl hover:-translate-y-1" aria-label="Copy Link">
                                        <FaLink />
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sidebar / Related Posts */}
                    <div className="lg:col-span-4 space-y-8">
                        <Reveal>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-gray-100">
                                    Related Articles
                                </h3>
                                {relatedPosts.length > 0 ? (
                                    <div className="space-y-6">
                                        {relatedPosts.map((related) => (
                                            <Link href={`/post/${related.slug || related._id}`} key={related._id} className="group block">
                                                <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                                                    <img
                                                        src={related.featuredImage || related.image || 'https://via.placeholder.com/300x200'}
                                                        alt={related.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                                                        }}
                                                    />
                                                    <div className="absolute top-2 left-2">
                                                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold rounded-full shadow-sm">
                                                            {related.category || 'Tech'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                                    {related.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <FaCalendar /> {formatDate(related.createdAt)}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-slate-500 text-sm">No related articles found.</p>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;

