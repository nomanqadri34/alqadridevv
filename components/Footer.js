'use client';
import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <footer className="bg-[#0A0A0A] text-gray-300 pt-16 pb-8 px-4 font-sans relative overflow-hidden">
            {/* Animated gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 animate-pulse" />

            <motion.div
                className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* About Section */}
                <motion.div className="space-y-5" variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Al Qadri <span className="text-amber-500">Dev</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Passionate about building modern web experiences with a focus on performance, accessibility, and user-centric design.
                    </p>
                    <div className="flex gap-4 pt-2">
                        {[
                            { icon: FaTwitter, href: "https://twitter.com/nomanqadri34", label: "Twitter" },
                            { icon: FaInstagram, href: "https://instagram.com/noman_qadri_", label: "Instagram" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohd-noman-qadri-6937721b6/", label: "LinkedIn" },
                            { icon: FaGithub, href: "https://github.com/nomanqadri34", label: "GitHub" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div className="space-y-5" variants={itemVariants}>
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Services", path: "/services" },
                            { name: "Work Experience", path: "/work-experience" },
                            { name: "Blog", path: "/blog" },
                        ].map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center group"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div className="space-y-5" variants={itemVariants}>
                    <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                <FaEnvelope className="text-amber-500" size={16} />
                            </div>
                            <a
                                href="mailto:nomanqadri@alqadridev.in"
                                className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                            >
                                nomanqadri@alqadridev.in
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                <FaMapMarkerAlt className="text-amber-500" size={16} />
                            </div>
                            <span className="text-gray-400 text-sm">Gorakhpur, India</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Newsletter Section */}
                <motion.div className="space-y-5" variants={itemVariants}>
                    <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-400">Subscribe for the latest news and updates.</p>
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        />
                        <button
                            type="submit"
                            className="w-full bg-amber-500 text-black py-3 rounded-lg text-sm font-bold hover:bg-amber-400 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/30"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </motion.div>

            {/* Bottom bar */}
            <div className="container max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Al Qadri Dev. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                    <Link href="/privacy-policy" className="text-gray-500 hover:text-amber-500 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="text-gray-500 hover:text-amber-500 transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
