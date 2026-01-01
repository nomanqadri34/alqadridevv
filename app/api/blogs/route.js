import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/lib/models/Blog';
import { verifyAdmin } from '@/lib/auth-utils';

export async function GET() {
    try {
        await dbConnect();
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        // Verify Admin
        try {
            await verifyAdmin(request);
        } catch (authError) {
            return NextResponse.json({ message: authError.message }, { status: authError.message === 'Authentication required' ? 401 : 403 });
        }

        const body = await request.json();
        const { title, content, authorName, authorImage, featuredImage, tags, status, category } = body;

        // Manual validation could go here if schema isn't enough, but schema has required fields

        const blog = new Blog({
            title,
            content,
            authorName,
            authorImage,
            featuredImage,
            category,
            tags: tags || [],
            status: status || 'draft'
        });

        const newBlog = await blog.save();
        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
