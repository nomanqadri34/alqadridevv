import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/lib/models/Blog';
import { verifyAdmin } from '@/lib/auth-utils';

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const { id } = await params;

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        await dbConnect();
        // Verify Admin
        try {
            await verifyAdmin(request);
        } catch (authError) {
            return NextResponse.json({ message: authError.message }, { status: authError.message === 'Authentication required' ? 401 : 403 });
        }

        const { id } = await params;
        const body = await request.json();
        const { title, content, authorName, authorImage, featuredImage, tags, status, category } = body;

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.authorName = authorName || blog.authorName;
        blog.authorImage = authorImage || blog.authorImage;
        blog.featuredImage = featuredImage || blog.featuredImage;
        blog.category = category || blog.category;
        blog.tags = tags || blog.tags;
        blog.status = status || blog.status;
        blog.updatedAt = Date.now();

        const updatedBlog = await blog.save();
        return NextResponse.json(updatedBlog);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await dbConnect();
        // Verify Admin
        try {
            await verifyAdmin(request);
        } catch (authError) {
            return NextResponse.json({ message: authError.message }, { status: authError.message === 'Authentication required' ? 401 : 403 });
        }

        const { id } = await params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
