'use client';
import React from "react";
import {
    FaMobileAlt, FaLaptopCode, FaHtml5, FaPenNib,
    FaSearch, FaBug, FaFileAlt, FaDatabase, FaNodeJs, FaReact, FaShieldAlt, FaUsers, FaHeadset, FaArrowRight
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Link from "next/link";

const services = [
    { icon: <FaMobileAlt />, title: "App Design", desc: "Modern, user-friendly mobile app interfaces for iOS and Android.", color: "from-purple-500 to-pink-500" },
    { icon: <FaLaptopCode />, title: "Website Design", desc: "Responsive, visually appealing websites tailored to your brand.", color: "from-amber-500 to-orange-500" },
    { icon: <FaHtml5 />, title: "HTML & CSS", desc: "Clean, semantic HTML5 and advanced CSS3 for robust layouts.", color: "from-orange-500 to-red-500" },
    {
        icon: <FaReact />,
        title: "MERN Stack",
        desc: "Full-stack web apps using MongoDB, Express, React, and Node.js.",
        color: "from-cyan-500 to-blue-500"
    },
    { icon: <FaPenNib />, title: "Logo Designing", desc: "Unique, memorable logos to elevate your brand identity.", color: "from-pink-500 to-rose-500" },
    { icon: <FaSearch />, title: "SEO Optimization", desc: "SEO optimization for higher rankings and better visibility.", color: "from-green-500 to-emerald-500" },
    { icon: <FaBug />, title: "Bug Fixing", desc: "Quick and efficient bug fixes for smooth user experience.", color: "from-red-500 to-orange-500" },
    { icon: <FaFileAlt />, title: "Content Writing", desc: "Engaging, SEO-friendly content for your website or blog.", color: "from-blue-500 to-indigo-500" },
    { icon: <FaDatabase />, title: "Data Annotation", desc: "Accurate data labeling for machine learning and AI projects.", color: "from-violet-500 to-purple-500" },
];

const whyChooseMe = [
    {
        icon: <FaShieldAlt />,
        title: "Quality & Reliability",
        desc: "Delivering robust, scalable solutions with guaranteed timelines.",
        stat: "100%",
        statLabel: "On-time Delivery"
    },
    {
        icon: <FaUsers />,
        title: "Client-Centric Approach",
        desc: "Prioritizing your satisfaction through active listening and adaptation.",
        stat: "50+",
        statLabel: "Happy Clients"
    },
    {
        icon: <FaHeadset />,
        title: "Continuous Support",
        desc: "Providing ongoing maintenance and support for long-term success.",
        stat: "24/7",
        statLabel: "Support Available"
    }
];

const Services = () => {
    return (
        <section className="pt-0 pb-20 px-4 sm:px-6 bg-gradient-to-b from-white to-amber-50/30 min-h-screen font-sans text-text-main relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -left-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <Reveal>
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                            What I Offer
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            My <span className="text-amber-500">Services</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            From web and app development to SEO and content writing, I offer a full suite of digital solutions to grow your business and bring your ideas to life.
                        </p>
                    </div>
                </Reveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {services.map((service, i) => (
                        <Reveal key={i} delay={i * 50} direction="up">
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                            >
                                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                                <div className="flex items-center text-amber-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn more <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                {/* Why Choose Me Section */}
                <Reveal>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Why Choose <span className="text-amber-400">Me?</span>
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                I combine technical expertise with creative problem-solving to deliver exceptional results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {whyChooseMe.map((item, i) => (
                                <Reveal key={i} delay={i * 100} direction="up">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-black text-xl shadow-lg">
                                            {item.icon}
                                        </div>
                                        <div className="text-4xl font-bold text-amber-400 mb-1">{item.stat}</div>
                                        <div className="text-gray-400 text-sm mb-4">{item.statLabel}</div>
                                        <h4 className="font-bold text-lg text-white mb-3">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                </Reveal>
                            ))}
                        </div>

                        {/* CTA */}
                        <Reveal delay={300}>
                            <div className="text-center mt-12">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
                                    >
                                        Start a Project
                                        <FaArrowRight />
                                    </motion.button>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;
