'use client';
import React, { useState } from "react";
import {
    FaDownload,
    FaLightbulb,
    FaHandshake,
    FaUserTie,
    FaChartLine,
    FaCode,
    FaBook,
    FaPlane,
    FaDumbbell,
    FaQuoteLeft,
    FaGraduationCap,
    FaMapMarkerAlt,
    FaLaptopCode,
    FaBrain,
    FaRocket,
    FaHeart,
    FaUsers,
    FaAward,
    FaCoffee,
    FaGamepad,
    FaMusic,
    FaCamera,
    FaPalette,
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaCheckCircle,
    FaStar,
    FaFire,
    FaTrophy
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Link from "next/link";
// Images
// Assumed assets are in /assets/ public folder
const cvFile = "/assets/CV2.pdf";
const profileImage = "/assets/noman1.jpg";

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { icon: <FaLaptopCode />, value: "2+", label: "Years Experience", color: "bg-amber-500" },
        { icon: <FaGraduationCap />, value: "MCA", label: "Computer Application", color: "bg-purple-500" },
        { icon: <FaBrain />, value: "MERN", label: "Stack Expertise", color: "bg-green-500" },
        { icon: <FaRocket />, value: "14+", label: "Projects Completed", color: "bg-orange-500" },
        { icon: <FaUsers />, value: "7+", label: "Happy Clients", color: "bg-pink-500" },
        { icon: <FaAward />, value: "9+", label: "Certifications", color: "bg-indigo-500" },
    ];

    const values = [
        {
            icon: <FaUserTie className="text-3xl mb-3" />,
            title: "Integrity",
            desc: "I believe in honesty, transparency, and strong moral principles in all my work. Building trust through ethical practices.",
            color: "from-amber-500 to-yellow-400"
        },
        {
            icon: <FaLightbulb className="text-3xl mb-3" />,
            title: "Innovation",
            desc: "I strive to find creative solutions and embrace new technologies. Always pushing boundaries and thinking outside the box.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <FaHandshake className="text-3xl mb-3" />,
            title: "Collaboration",
            desc: "I value teamwork and believe great things are built together. Open communication and mutual respect drive success.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FaChartLine className="text-3xl mb-3" />,
            title: "Growth",
            desc: "Continuous learning and self-improvement are at the core of my journey. Never stop evolving and adapting.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaHeart className="text-3xl mb-3" />,
            title: "Passion",
            desc: "Deeply passionate about creating meaningful digital experiences that make a real difference in people's lives.",
            color: "from-red-500 to-rose-500"
        },
        {
            icon: <FaTrophy className="text-3xl mb-3" />,
            title: "Excellence",
            desc: "Committed to delivering high-quality work that exceeds expectations. Attention to detail in every project.",
            color: "from-indigo-500 to-amber-400"
        },
    ];

    const interests = [
        {
            icon: <FaCode className="text-2xl mb-2" />,
            label: "Coding",
            description: "Building innovative solutions",
            bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
        },
        {
            icon: <FaBook className="text-2xl mb-2" />,
            label: "Reading",
            description: "Tech blogs & programming books",
            bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
        },
        {
            icon: <FaPlane className="text-2xl mb-2" />,
            label: "Traveling",
            description: "Exploring new cultures",
            bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
        },
        {
            icon: <FaDumbbell className="text-2xl mb-2" />,
            label: "Fitness",
            description: "Health through exercise",
            bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop"
        },
        {
            icon: <FaMusic className="text-2xl mb-2" />,
            label: "Music",
            description: "Inspiration & relaxation",
            bgImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
        },
        {
            icon: <FaGamepad className="text-2xl mb-2" />,
            label: "Gaming",
            description: "Strategic problem-solving",
            bgImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop"
        },
        {
            icon: <FaCamera className="text-2xl mb-2" />,
            label: "Photography",
            description: "Capturing moments",
            bgImage: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&h=300&fit=crop"
        },
        {
            icon: <FaCoffee className="text-2xl mb-2" />,
            label: "Coffee",
            description: "Fueling creativity",
            bgImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
        },
    ];

    const techStack = [
        { icon: <SiReact />, name: "React.js", color: "#61DAFB" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    ];

    const achievements = [
        {
            icon: <FaStar className="text-yellow-500" />,
            title: "Top Performer",
            description: "Recognized for exceptional performance and dedication at Gozler Tech"
        },
        {
            icon: <FaFire className="text-orange-500" />,
            title: "Fast Learner",
            description: "Quickly mastered MERN stack and delivered production-ready applications"
        },
        {
            icon: <FaCheckCircle className="text-green-500" />,
            title: "Client Satisfaction",
            description: "100% client satisfaction rate across 7+ successful projects"
        },
        {
            icon: <FaTrophy className="text-purple-500" />,
            title: "Problem Solver",
            description: "Known for finding creative solutions to complex technical challenges"
        },
    ];

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, label: "Location", value: "Gorakhpur, Uttar Pradesh, India" },
        { icon: <FaEnvelope />, label: "Email", value: "nomanqadri@alqadridev.in", link: "mailto:nomanqadri@alqadridev.in" },
        { icon: <FaPhone />, label: "Phone", value: "+91 6392525639", link: "tel:+916392525639" },
    ];

    const socialLinks = [
        { icon: <FaGithub />, name: "GitHub", url: "https://github.com/nomanqadri34", color: "hover:text-gray-900" },
        { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/nomanqadri34", color: "hover:text-amber-500" },
        { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/nomanqadri34", color: "hover:text-amber-400" },
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-amber-50/30 pt-0 pb-20 px-4 sm:px-6 lg:px-8 font-sans text-text-main relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-40 -left-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                            Get To Know Me
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                            About <span className="text-amber-500">Me</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Passionate developer, creative thinker, and lifelong learner committed to building exceptional digital experiences
                        </p>
                    </div>
                </Reveal>

                {/* Main Profile Section */}
                <Reveal>
                    <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 mb-16 border border-gray-100 relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-100 to-cyan-100 rounded-full blur-3xl opacity-30 -z-10"></div>

                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
                            {/* Profile Image */}
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-purple-600 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
                                <div className="relative rounded-full border-4 border-white shadow-2xl overflow-hidden w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gray-100">
                                    <img
                                        src={profileImage}
                                        alt="Mohd Noman Qadri"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-xl border-2 border-primary">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-bold text-slate-800">Available for Hire</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 text-center lg:text-left">
                                <div className="mb-6">
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                        <FaQuoteLeft className="text-primary text-lg" />
                                        <h4 className="text-primary text-sm font-bold uppercase tracking-wider">Full Stack Developer</h4>
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">Mohd Noman Qadri</h2>

                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                                        {contactInfo.map((info, i) => (
                                            <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                                <span className="text-primary">{info.icon}</span>
                                                {info.link ? (
                                                    <a href={info.link} className="hover:text-primary transition-colors">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <span>{info.value}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                                        <FaGraduationCap className="text-primary text-lg" />
                                        <span className="text-slate-600">B.Sc. Computer Science | MCA (Pursuing)</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-3xl mx-auto lg:mx-0">
                                    I'm a passionate <span className="font-bold text-primary">Full Stack Developer</span> from Gorakhpur, India,
                                    currently pursuing an MCA at <span className="font-semibold">Jamia Hamdard University</span>.
                                    My journey is fueled by an insatiable curiosity for technology and a commitment to crafting digital solutions
                                    that create meaningful impact. I specialize in the <span className="font-bold text-primary">MERN stack</span> and
                                    thrive on transforming complex problems into elegant, user-friendly applications.
                                </p>

                                {/* Tech Stack Icons */}
                                <div className="flex justify-center lg:justify-start gap-4 mb-8">
                                    {techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                            title={tech.name}
                                        >
                                            <div className="text-3xl transition-transform duration-300 group-hover:scale-125" style={{ color: tech.color }}>
                                                {tech.icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <a
                                        href={cvFile}
                                        download="Mohd_Noman_Qadri_CV.pdf"
                                        className="btn-primary flex items-center gap-2"
                                        aria-label="Download CV"
                                    >
                                        <FaDownload /> Download CV
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="btn-outline flex items-center gap-2"
                                    >
                                        <FaEnvelope /> Contact Me
                                    </Link>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center lg:justify-start gap-4 mt-6">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 bg-gray-50 rounded-full text-slate-600 ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                                            aria-label={social.name}
                                        >
                                            <div className="text-xl">{social.icon}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                    {stats.map((stat, idx) => (
                        <Reveal key={idx} delay={idx * 50}>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                                <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-2xl">{stat.icon}</div>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-10">
                    <Reveal>
                        <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200 flex flex-wrap gap-1">
                            {['overview', 'values', 'interests', 'achievements'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold capitalize text-sm ${activeTab === tab
                                        ? 'bg-amber-500 text-black shadow-lg'
                                        : 'text-slate-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>

                {/* Content Sections */}
                {activeTab === 'overview' && (
                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">My Journey</h3>
                            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                                From a curious computer science student to a dedicated full stack developer, my path has been shaped by
                                continuous learning, creative problem-solving, and a passion for building applications that make a difference.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Reveal>
                                <div className="bg-gradient-to-br from-amber-50 to-cyan-50 rounded-2xl p-8 border border-amber-100 h-full hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-amber-500 text-white rounded-xl">
                                            <FaLaptopCode className="text-2xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">Technical Expertise</h4>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Specializing in modern web technologies with a focus on creating scalable, efficient, and user-centric applications
                                        that solve real-world problems.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript', 'Python', 'Tailwind CSS'].map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={120}>
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 h-full hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-purple-500 text-white rounded-xl">
                                            <FaPalette className="text-2xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">Development Philosophy</h4>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        I believe in writing clean, maintainable code and creating intuitive user experiences.
                                        Every project is an opportunity to learn something new and push the boundaries of what's possible.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Clean Code Principles', 'User-Centric Design', 'Agile Methodology', 'Continuous Learning'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700">
                                                <FaCheckCircle className="text-green-500" />
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                )}

                {activeTab === 'values' && (
                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h3>
                            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                                These principles guide my work and interactions, shaping how I approach every project and collaboration.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value, i) => (
                                <Reveal key={i} delay={i * 60}>
                                    <div className="group bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            {value.icon}
                                        </div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">{value.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'interests' && (
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Personal Interests</h3>
                            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                                Beyond coding, these activities fuel my creativity and keep me balanced.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {interests.map((interest, i) => (
                                <Reveal key={i} delay={i * 50}>
                                    <div
                                        className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-40"
                                        style={{ backgroundImage: `url(${interest.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                                        <div className="relative z-10 h-full flex flex-col items-center justify-end p-4 text-white text-center">
                                            <div className="mb-2 transform group-hover:scale-110 transition-all duration-300">
                                                {interest.icon}
                                            </div>
                                            <h4 className="font-bold text-base mb-1">{interest.label}</h4>
                                            <p className="text-white/80 text-xs">{interest.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'achievements' && (
                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Key Achievements</h3>
                            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                                Milestones and accomplishments that define my professional journey and commitment to excellence.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {achievements.map((achievement, i) => (
                                <Reveal key={i} delay={i * 100}>
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                        <div className="flex items-start gap-4">
                                            <div className="p-4 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <div className="text-4xl">{achievement.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-12">
                    <Reveal>
                        <div
                            className="rounded-2xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
                            <div className="relative z-10">
                                <FaRocket className="text-4xl text-amber-400 mx-auto mb-4" />
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                    Let's Create Something Amazing!
                                </h3>
                                <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
                                    I'm always excited to collaborate on innovative projects and bring creative ideas to life.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <Link href="/contact" className="px-6 py-2.5 bg-amber-500 text-black rounded-full text-sm font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                        Get In Touch
                                    </Link>
                                    <Link href="/" className="px-6 py-2.5 bg-transparent border-2 border-white text-white rounded-full text-sm font-bold hover:bg-white hover:text-slate-900 transition-all duration-300">
                                        View My Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

