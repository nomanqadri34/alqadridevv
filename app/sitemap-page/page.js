import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaBlog, FaEnvelope, FaUsers, FaFileContract } from 'react-icons/fa';

export const metadata = {
    title: 'Sitemap - Mohd Noman Qadri',
    description: 'Overview of the website structure and links.',
};

const Sitemap = () => {
    const siteStructure = [
        {
            title: 'Main Pages',
            icon: <FaHome />,
            links: [
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/services', label: 'Services' },
                { to: '/work-experience', label: 'Work Experience' },
            ]
        },
        {
            title: 'Blog',
            icon: <FaBlog />,
            links: [
                { to: '/blog', label: 'Blog Home' }
            ]
        },
        {
            title: 'Legal',
            icon: <FaFileContract />,
            links: [
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms-of-service', label: 'Terms of Service' }
            ]
        },
        {
            title: 'Team',
            icon: <FaUsers />,
            links: [
                { to: '/team-member', label: 'Our Team' },
            ]
        },
        {
            title: 'Contact',
            icon: <FaEnvelope />,
            links: [
                { to: '/contact', label: 'Contact Us' }
            ]
        }
    ];

    return (
        <section className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 font-sans text-text-main">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Sitemap</h1>
                    <p className="text-slate-600 text-lg">Find everything on our website</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteStructure.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                <span className="text-2xl text-primary bg-blue-50 p-3 rounded-lg">{section.icon}</span>
                                <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.to}
                                            className="text-slate-600 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-600">
                        Can't find what you're looking for? <Link href="/contact" className="text-primary font-bold hover:underline">Contact us</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sitemap;
