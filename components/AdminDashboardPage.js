'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import RichTextEditor from './RichTextEditor'; // Updated import path
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

// Base URL for API - using relative path for Next.js API routes
const API_BASE_URL = '';

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: '',
        status: 'draft',
        featuredImage: '',
        authorName: '',
        authorImage: '',
        category: 'Web Development',
    });
    const [loading, setLoading] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const router = useRouter();
    const editorRef = useRef(null);

    const showSnackbar = (message, severity = 'success') => {
        if (severity === 'success') {
            toast.success(message);
        } else if (severity === 'error') {
            toast.error(message);
        }
    };

    const handleImageUpload = async (file, type) => {
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            showSnackbar('Please upload an image file', 'error');
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            showSnackbar('Image size should be less than 5MB', 'error');
            return;
        }

        setImageUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'ml_default'); // Keep original preset or env var

            // Use the Cloudinary URL directly as in original code
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dzhypofiv/image/upload',
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log(`Upload progress: ${progress}%`);
                    },
                }
            );

            if (type === 'featured') {
                setFormData(prev => ({ ...prev, featuredImage: response.data.secure_url }));
                showSnackbar('Featured image uploaded successfully');
            } else if (type === 'author') {
                setFormData(prev => ({ ...prev, authorImage: response.data.secure_url }));
                showSnackbar('Author image uploaded successfully');
            }
        } catch (error) {
            showSnackbar(error.response?.data?.message || 'Error uploading image', 'error');
        } finally {
            setImageUploading(false);
        }
    };

    const fetchBlogs = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login'); // Redirect if no token
                return;
            }
            const response = await axios.get(`${API_BASE_URL}/api/blogs`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlogs(response.data);
        } catch (error) {
            console.error('Fetch blogs error:', error);
            showSnackbar(error.response?.data?.message || 'Error fetching blogs', 'error');
            // Optional: check for auth error and redirect
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                router.push('/login');
            }
        } finally {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    const handleOpen = (blog = null) => {
        if (blog) {
            setEditingBlog(blog);
            setFormData({
                title: blog.title || '',
                content: blog.content || '',
                tags: (blog.tags || []).join(', '),
                status: blog.status || 'draft',
                featuredImage: blog.featuredImage || '',
                authorName: blog.authorName || '',
                authorImage: blog.authorImage || '',
                category: blog.category || 'Web Development',
            });
        } else {
            setEditingBlog(null);
            setFormData({
                title: '',
                content: '',
                tags: '',
                status: 'draft',
                featuredImage: '',
                authorName: '',
                authorImage: '',
                category: 'Web Development',
            });
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingBlog(null);
        // Reset form data only if not editing anymore
        if (!editingBlog) {
            setFormData({
                title: '',
                content: '',
                tags: '',
                status: 'draft',
                featuredImage: '',
                authorName: '',
                authorImage: '',
                category: 'Web Development',
            });
        }
    };

    const validateForm = () => {
        if (!formData.title.trim()) {
            showSnackbar('Title is required', 'error');
            return false;
        }
        if (!formData.content.trim()) {
            showSnackbar('Content is required', 'error');
            return false;
        }
        if (!formData.authorName.trim()) {
            showSnackbar('Author name is required', 'error');
            return false;
        }
        if (!formData.authorImage) {
            showSnackbar('Author image is required', 'error');
            return false;
        }
        if (!formData.featuredImage) {
            showSnackbar('Featured image is required', 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                showSnackbar('Authentication required. Please login again.', 'error');
                router.push('/login');
                setLoading(false);
                return;
            }
            const blogData = {
                ...formData,
                tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            };

            if (editingBlog) {
                await axios.put(
                    `${API_BASE_URL}/api/blogs/${editingBlog._id}`,
                    blogData,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                showSnackbar('Blog updated successfully');
            } else {
                await axios.post(
                    `${API_BASE_URL}/api/blogs`,
                    blogData,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                showSnackbar('Blog created successfully');
            }

            handleClose();
            fetchBlogs();
        } catch (error) {
            console.error('Submit error:', error);
            showSnackbar(error.response?.data?.message || 'Error saving blog', 'error');
            // Optional: check for auth error and redirect
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                router.push('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    showSnackbar('Authentication required. Please login again.', 'error');
                    router.push('/login');
                    setLoading(false);
                    return;
                }

                await axios.delete(`${API_BASE_URL}/api/blogs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                setBlogs(currentBlogs => currentBlogs.filter(blog => blog._id !== id));
                showSnackbar('Blog deleted successfully');

            } catch (error) {
                console.error('Delete error:', error);
                showSnackbar(error.response?.data?.message || 'Error deleting blog', 'error');
                // Optional: check for auth error and redirect
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    router.push('/login');
                }
            } finally {
                setLoading(false);
            }
        }
    };

    // SVG Icons
    const EditIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
    );

    const DeleteIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10H4" />
        </svg>
    );

    const AddIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    );

    const CloudUploadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
    );

    const SpinnerIcon = () => (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2.062-2.647zm10.928-4.223A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-2.062 2.647z"></path>
        </svg>
    );


    return (
        <section className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
                    {/* Header and Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Blog Management</h1>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => handleOpen()}
                                disabled={loading}
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <AddIcon />
                                New Blog
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    router.push('/login');
                                }}
                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Blogs Table */}
                    {loading && blogs.length === 0 ? (
                        <div className="flex justify-center py-8">
                            <svg className="animate-spin h-8 w-8 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2.062-2.647zm10.928-4.223A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-2.062 2.647z"></path>
                            </svg>
                        </div>
                    ) : (blogs.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">No blogs found. Create a new one!</div>
                    ) : (
                        <div className="overflow-x-auto shadow border border-gray-200 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="w-1/3 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th scope="col" className="w-1/5 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                                        <th scope="col" className="hidden md:table-cell w-1/6 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th scope="col" className="w-1/8 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="w-20 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((blog) => (
                                        <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-3">
                                                <div className="text-sm text-gray-900 truncate max-w-xs" title={blog.title}>{blog.title}</div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-8 w-8">
                                                        <img className="h-8 w-8 rounded-full object-cover" src={blog.authorImage || 'https://via.placeholder.com/40'} alt={blog.authorName}
                                                            width="32" height="32" loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="text-sm font-medium text-gray-900">{blog.authorName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="hidden md:table-cell px-4 py-3">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-700">
                                                    {blog.category}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span
                                                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} capitalize`}
                                                >
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <div className="flex justify-center gap-3">
                                                    <button
                                                        onClick={() => handleOpen(blog)}
                                                        className="text-amber-600 hover:text-amber-800 p-1 rounded hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                        disabled={loading}
                                                        aria-label="Edit Blog"
                                                    >
                                                        <EditIcon />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(blog._id)}
                                                        className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                        disabled={loading}
                                                        aria-label="Delete Blog"
                                                    >
                                                        <DeleteIcon />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Create/Edit Blog */}
            {open && (
                <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        {/* Background overlay */}
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleClose}></div>

                        {/* Modal panel */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full md:max-w-xl lg:max-w-2xl">
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 border-b border-gray-200">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    {editingBlog ? 'Edit Blog' : 'Create New Blog'}
                                </h3>
                            </div>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[70vh] overflow-y-auto">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            required
                                            disabled={loading}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Author Name</label>
                                        <input
                                            type="text"
                                            name="authorName"
                                            id="authorName"
                                            value={formData.authorName}
                                            onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                                            required
                                            disabled={loading}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            {/* Author Image Preview */}
                                            {formData.authorImage && (
                                                <img src={formData.authorImage} alt={formData.authorName} className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                                                    width="56" height="56" loading="lazy"
                                                />
                                            )}
                                            <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                                                <CloudUploadIcon />
                                                <span className="ml-2">Author Image</span>
                                                <input
                                                    type="file"
                                                    hidden
                                                    accept="image/*"
                                                    onChange={(e) => handleImageUpload(e.target.files[0], 'author')}
                                                    disabled={imageUploading}
                                                />
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {/* Featured Image Preview */}
                                            {formData.featuredImage && (
                                                <img src={formData.featuredImage} alt="Featured" className="w-32 h-20 object-cover rounded-md border-2 border-gray-300"
                                                    width="128" height="80" loading="lazy"
                                                />
                                            )}
                                            <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                                                <CloudUploadIcon />
                                                <span className="ml-2">Featured Image</span>
                                                <input
                                                    type="file"
                                                    hidden
                                                    accept="image/*"
                                                    onChange={(e) => handleImageUpload(e.target.files[0], 'featured')}
                                                    disabled={imageUploading}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                        <select
                                            name="category"
                                            id="category"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            disabled={loading}
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <option value="Web Development">Web Development</option>
                                            <option value="App Development">App Development</option>
                                            <option value="AI">AI</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                        <select
                                            name="status"
                                            id="status"
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            disabled={loading}
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
                                        <input
                                            type="text"
                                            name="tags"
                                            id="tags"
                                            value={formData.tags}
                                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                            disabled={loading}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                        {/* Rich Text Editor */}
                                        <div className="rich-text-editor">
                                            <RichTextEditor
                                                ref={editorRef}
                                                value={formData.content}
                                                onChange={(value) => setFormData({ ...formData, content: value })}
                                                placeholder="Write your blog content here..."
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-3">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-500 text-base font-medium text-white hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <SpinnerIcon />
                                    ) : (
                                        editingBlog ? 'Update' : 'Create'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    disabled={loading}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AdminDashboard;

