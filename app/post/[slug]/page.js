import BlogPost from '@/components/BlogPostPage';

export async function generateMetadata({ params }) {
    // We should ideally fetch post data here to generate dynamic metadata
    // But for now we'll set a generic title since the client component fetches data
    // In a production app, you'd fetch data here as well or cache it
    const { slug } = await params;

    return {
        title: `Article ${slug} - Mohd Noman Qadri`,
        description: 'Read this article on Mohd Noman Qadri\'s blog.',
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    return <BlogPost slug={slug} />;
}
