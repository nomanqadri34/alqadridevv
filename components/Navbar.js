'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "+916392525639";
        const message = encodeURIComponent("Hello! I'm interested in your services.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Work Experience", path: "/work-experience" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
    ];

    return (
        <header>
            <nav
                className={`bg-white text-gray-800 w-full z-50 font-poppins transition-all duration-300 ${sticky ? "fixed top-0 shadow-lg" : "relative"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        {/* Ensure image path is correct - moving assest/ to public/ or using external URL */}
                        <img
                            src="/assets/lo1.webp"
                            alt="Logo"
                            className="h-12 w-auto"
                            onError={(e) => (e.target.src = "/assets/logo3.png")}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`text-base font-medium tracking-wide transition-all duration-200 hover:text-amber-500 hover:scale-105 ${pathname === item.path
                                        ? "text-amber-500 font-semibold"
                                        : "text-gray-700"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* WhatsApp CTA Button - Desktop */}
                    <button
                        className="hidden md:inline-block bg-amber-500 text-black px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-amber-400 hover:shadow-lg transition-transform duration-300 hover:scale-105"
                        onClick={handleWhatsAppClick}
                    >
                        Let's Talk
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* ✅ Professional Mobile Menu / Sidebar */}
                <div
                    className={`md:hidden fixed inset-x-0 top-[72px] z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${menuOpen
                        ? "scale-y-100 opacity-100 translate-y-0"
                        : "scale-y-0 opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    style={{ maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
                >
                    <div className="flex flex-col p-6 space-y-4">
                        <ul className="space-y-1">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === item.path
                                            ? "bg-amber-50 text-amber-600 font-semibold"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 border-t border-gray-100 mt-2 flex flex-col gap-4">
                            {/* Action Buttons Row */}
                            <div className="flex items-center gap-3">
                                <button
                                    className="flex-1 bg-amber-500 text-black py-2 rounded-lg text-xs font-bold hover:bg-amber-400 shadow-sm transition-all duration-300 uppercase tracking-wide"
                                    onClick={handleWhatsAppClick}
                                >
                                    Let's Talk
                                </button>

                                {/* Small Contact Icons */}
                                <a
                                    href={`https://wa.me/+916392525639`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 transition-colors"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp size={16} />
                                </a>
                                <a
                                    href="tel:+916392525639"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100 transition-colors"
                                    aria-label="Call"
                                >
                                    <FaPhone size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {sticky && <div style={{ height: "88px" }} />}
        </header>
    );
};

export default Navbar;
