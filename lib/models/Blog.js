import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true,
        trim: true
    },
    authorImage: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Web Development', 'App Development', 'AI'],
        default: 'Web Development'
    },
    tags: [{
        type: String,
        trim: true
    }],
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Auto-generate slug before saving the document
blogSchema.pre('save', async function (next) {
    if (!this.slug) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
});

// Add text index for search functionality
blogSchema.index({ title: 'text', content: 'text', tags: 'text', category: 'text' });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
