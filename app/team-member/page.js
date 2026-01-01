import TeamMembers from '@/components/TeamPage';

export const metadata = {
    title: 'Meet Our Expert Team - Developers & SEO Experts',
    description: 'Meet our expert team of developers, SEO specialists, and designers. From Frontend to Flutter development, we bring innovative solutions to your projects.',
    keywords: 'Our Team, Web Developers, Flutter Developers, SEO Experts, WordPress Developers, Frontend Developers',
    openGraph: {
        title: 'Meet Our Expert Team',
        description: 'Discover our talented team of developers and SEO specialists.',
        type: 'website',
    },
};

export default function Page() {
    return <TeamMembers />;
}
