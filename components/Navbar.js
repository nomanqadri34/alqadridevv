'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const HighQualityLogo = () => (
    <div className="flex items-center gap-1 group">
        {/* SVG Icon */}
        <div className="w-8 h-8 md:w-11 md:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    <linearGradient id="logo-grad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="30%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                </defs>

                {/* Speech Bubble */}
                <g fill="url(#logo-grad)">
                    <path d="M 33 15 h 25 a 4 4 0 0 1 4 4 v 12 a 4 4 0 0 1 -4 4 h -14 l -7 7 v -7 h -4 a 4 4 0 0 1 -4 -4 v -12 a 4 4 0 0 1 4 -4 z" />
                </g>
                <circle cx="41" cy="25" r="1.5" fill="#fff" />
                <circle cx="46" cy="25" r="1.5" fill="#fff" />
                <circle cx="51" cy="25" r="1.5" fill="#fff" />

                <g fill="url(#logo-grad)">
                    {/* Head */}
                    <circle cx="26" cy="30" r="4.5" />

                    {/* Body & Legs */}
                    <path d="M 22 37 h 6.5 v 20 h 16.5 v 4.5 h -23 z" />

                    {/* Arm */}
                    <path d="M 27 39 l 10 6 h 12 v -3 h -10.5 l -9 -5.5 z" />

                    {/* Laptop */}
                    <path d="M 52 44 l 4 -10 h 2.5 l -4 10 z" />
                    <path d="M 49 44 h 14 v 2.5 h -14 z" />

                    {/* Desk Top */}
                    <path d="M 39 47.5 h 26 v 3 h -26 z" />
                    {/* Desk Base */}
                    <path d="M 50 50.5 h 15 v 23 h -15 z" />

                    {/* Chair Backrest & Seat */}
                    <path d="M 16 43 h 2 v 20 h 13 v 2 h -15 z" />
                    {/* Chair Stand */}
                    <path d="M 21.5 65 h 2 v 10 h -2 z" />
                    {/* Chair Base */}
                    <path d="M 16 75 h 13 v 2 h -13 z" />
                </g>
            </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center translate-y-0.5">
            <span className={`text-slate-800 text-[14px] md:text-[18px] font-bold leading-none tracking-widest ${orbitron.className}`}>
                AL QADRI
            </span>
            <span className={`text-slate-800 text-[14px] md:text-[18px] font-bold leading-none tracking-widest mt-0.5 ${orbitron.className}`}>
                DEV
            </span>
            <span className="text-slate-500 text-[5px] md:text-[6.5px] font-bold tracking-[0.2em] mt-[3px]">
                BUILD DEBUG DELIVER
            </span>
        </div>
    </div>
);

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
                    <Link href="/" className="flex-shrink-0 outline-none">
                        <HighQualityLogo />
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
