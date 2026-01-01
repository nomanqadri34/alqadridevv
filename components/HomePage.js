'use client';
import React, { useState, useEffect, useRef } from "react";
import {
    FaGithub, FaReact, FaNodeJs, FaDatabase, FaHtml5,
    FaJsSquare, FaUsers, FaProjectDiagram, FaRegClock, FaPython, FaBrain
} from "react-icons/fa";
import {
    SiMongodb, SiFirebase, SiVercel, SiTailwindcss, SiGoogle
} from "react-icons/si";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Link from "next/link";

// Static Data
const projects = [
    {
        id: 101,
        title: "Github Bug Detection",
        category: "ai",
        tech: ["Python", "ML", "Scikit-learn", "Flask"],
        github: "https://github.com/nomanqadri34/",
        video: "",
        description: "AI/ML based system to detect bugs in GitHub repositories automatically.",
        liveUrl: "https://github-bug-detection.vercel.app/"
    },
    {
        id: 102,
        title: "Job Hunter",
        category: "ai",
        tech: ["Python", "ML", "NLP", "React"],
        github: "https://github.com/nomanqadri34/",
        video: "",
        description: "Machine Learning powered job search and recommendation engine.",
        liveUrl: "https://jobhunter-seven.vercel.app/"
    },
    {
        id: 12,
        title: "Alanxa.ai",
        category: "clients",
        tech: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "AI/ML"],
        github: "https://github.com/nomanqadri34",
        video: "",
        description: "AI training and data solutions platform for multilingual intelligence, cultural understanding, and high-quality data workflows—connecting businesses, experts, and freelancers.",
        liveUrl: "https://www.alanxa.ai"
    },
    {
        id: 10,
        title: "Tej Civils EdTech",
        category: "clients",
        tech: ["React.js", "Node.js", "MongoDB", "Razorpay"],
        github: "https://github.com/nomanqadri34",
        video: "",
        description: "EdTech platform for RAS, PSI, and civil service exam preparation with courses, tests, and student management.",
        liveUrl: "https://www.tejcivilsedtech.in"
    },
    {
        id: 9,
        title: "SSD International",
        category: "clients",
        tech: ["React.js", "Tailwind CSS", "Cloudinary", "Nodemailer"],
        github: "https://github.com/nomanqadri34",
        video: "/ssd1.mp4",
        description: "SSD International a B2B brand in clothing, accessories & corporate gifting.",
        liveUrl: "https://www.thessdinternational.com/"
    },
    {
        id: 2,
        title: "Mumtaz Studio",
        category: "clients",
        tech: ["React.js", "Firebase", "Cloudinary", "Nodemailer"],
        github: "https://github.com/nomanqadri34",
        video: "/mumtaz1.mp4",
        description: "Photography studio portfolio and booking management system.",
        liveUrl: "https://www.mumtazstudio.in"
    },
    {
        id: 11,
        title: "VCX Mart",
        category: "clients",
        tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/nomanqadri34",
        video: "",
        description: "B2B subscription-based e-commerce platform enabling vendors to sell products with multi-vendor management.",
        liveUrl: "https://vcxmart.com"
    },
    {
        id: 1,
        title: "Three60onwards",
        category: "clients",
        tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/nomanqadri34/",
        video: "/three1.mp4",
        description: "E-commerce platform with product management, cart functionality, and secure payments.",
        liveUrl: "https://www.three60onwards.in"
    },
    {
        id: 4,
        title: "Blog-Website",
        category: "web",
        tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
        github: "https://github.com/nomanqadri34/alqadriblog",
        video: "/blog1.mp4",
        description: "A full-featured blog platform with authentication, admin panel, and cloud image uploads."
    },
    {
        id: 5,
        title: "Learning-Management",
        category: "web",
        tech: ["React.js", "Node.js", "MongoDB"],
        github: "https://github.com/nomanqadri34/Lms",
        video: "/l1.mp4",
        description: "A learning management system for online courses and student tracking."
    },
    {
        id: 6,
        title: "Car Rental",
        category: "web",
        tech: ["MongoDB", "Express", "React", "Node"],
        github: "https://github.com/nomanqadri34/al-qadri-car-frontend",
        video: "/car11.mp4",
        description: "A car rental platform with booking, admin, and payment features."
    },
    {
        id: 7,
        title: "Gym Landing page",
        category: "word",
        tech: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/nomanqadri34/Gym-landing-page",
        video: "/gym1.mp4",
        description: "A modern landing page for a gym business."
    },
    {
        id: 8,
        title: "Personal Portfolio",
        category: "word",
        tech: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/nomanqadri34/al-qadri-portfolio",
        video: "/p1.mp4",
        description: "A personal portfolio website to showcase projects and skills."
    }
];

const services = [
    {
        icon: <FaReact className="text-primary text-4xl mb-4" />,
        title: "Frontend Development",
        desc: "Modern, responsive UIs with React.js and Tailwind CSS."
    },
    {
        icon: <FaNodeJs className="text-primary text-4xl mb-4" />,
        title: "Backend APIs",
        desc: "Robust RESTful APIs with Node.js and Express."
    },
    {
        icon: <FaBrain className="text-primary text-4xl mb-4" />,
        title: "AI/ML Solutions",
        desc: "Intelligent systems using Python, TensorFlow, and Scikit-learn."
    },
    {
        icon: <FaDatabase className="text-primary text-4xl mb-4" />,
        title: "Database Design",
        desc: "Efficient data models with MongoDB and Firebase."
    },
    {
        icon: <SiVercel className="text-primary text-3xl mb-3" />,
        title: "Cloud Deployment",
        desc: "Seamless deployments on Vercel, Netlify, and AWS."
    },
    {
        icon: <SiGoogle className="text-primary text-3xl mb-3" />,
        title: "Auth & Security",
        desc: "Secure authentication with Google OAuth and JWT."
    },
];

const techStack = [
    { icon: <FaReact className="text-cyan-500 text-3xl" />, name: "React" },
    { icon: <FaNodeJs className="text-green-600 text-3xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-700 text-3xl" />, name: "MongoDB" },
    { icon: <FaPython className="text-blue-500 text-3xl" />, name: "Python" },
    { icon: <FaBrain className="text-purple-500 text-3xl" />, name: "AI/ML" },
    { icon: <SiTailwindcss className="text-teal-400 text-3xl" />, name: "Tailwind" },
    { icon: <FaJsSquare className="text-yellow-500 text-3xl" />, name: "JavaScript" },
    { icon: <SiFirebase className="text-orange-500 text-3xl" />, name: "Firebase" },
];

const stats = [
    { icon: <FaProjectDiagram className="text-amber-500 text-2xl" />, label: "Projects", value: 14 },
    { icon: <FaUsers className="text-amber-500 text-2xl" />, label: "Clients", value: 7 },
    { icon: <FaRegClock className="text-amber-500 text-2xl" />, label: "Years Exp", value: 2 },
];

const phrases = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "MERN Stack Expert",
    "Problem Solver"
];

const HomePage = () => {
    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);
    const [text, setText] = useState("");
    const projectsRef = useRef(null);
    const indexRef = useRef(0);
    const charIndexRef = useRef(0);
    const isDeletingRef = useRef(false);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            let currentIndex = indexRef.current;
            let currentCharIndex = charIndexRef.current;
            let isDeleting = isDeletingRef.current;

            if (!isDeleting) {
                setText((prev) => prev + phrases[currentIndex][currentCharIndex]);
                charIndexRef.current++;

                if (charIndexRef.current === phrases[currentIndex].length) {
                    isDeletingRef.current = true;
                    setTimeout(() => { }, 2000);
                }
            } else {
                setText((prev) => prev.slice(0, -1));
                charIndexRef.current--;

                if (charIndexRef.current === 0) {
                    isDeletingRef.current = false;
                    indexRef.current = (indexRef.current + 1) % phrases.length;
                }
            }
        }, 100);

        return () => clearInterval(typingEffect);
    }, []);

    const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

    const testimonials = [
        {
            id: 1,
            name: "Mohd Shahid",
            title: "Mumtaz Studio Co-Founder",
            feedback: "Al Qadri Dev delivered an outstanding website that exceeded our expectations. Professional, efficient, and a pleasure to work with!"
        },
        {
            id: 2,
            name: "Mohd Shakil",
            title: "Three60onwards Co-Founder",
            feedback: "Incredible attention to detail and very responsive. The project was completed on time and the quality was superb."
        },
        {
            id: 3,
            name: "Devanshi Goel",
            title: "SSD International Manager",
            feedback: "Al Qadri Dev delivered a polished website for SSD International with excellent communication and on-time execution. Highly recommended."
        },
        {
            id: 4,
            name: "Aman Shaikh",
            title: "Founder & CEO at Alanxa.ai",
            feedback: "Truly happy with the work done on Alanxa.ai. The website has been built with great attention to performance, structure, and scalability. It was a smooth and positive experience working together, with clear communication and quality delivery throughout the project."
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+916392525639";
        const message = encodeURIComponent("Hello! I'm interested in your Profile.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="font-sans w-full overflow-x-hidden bg-gradient-to-b from-white to-amber-50/30 text-text-main">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center pt-8 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                    <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left z-10 order-2 lg:order-1">
                        <Reveal>
                            <div className="inline-block px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
                                <span className="text-primary font-semibold text-sm tracking-wide uppercase">Available for Hire</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
                                Hi, I'm <span className="text-primary">Mohd Noman Qadri</span>
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-slate-600 h-16">
                                I am a <span className="text-primary">{text}</span><span className="cursor">|</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                Building scalable web applications and intelligent AI solutions.
                                Passionate about turning complex problems into elegant, user-friendly digital experiences.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={scrollToProjects}
                                    className="btn-primary"
                                >
                                    View My Work
                                </button>
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="btn-outline"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Image */}
                    <div className="relative z-10 flex justify-center order-1 lg:order-2">
                        <Reveal delay={200}>
                            <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-full rotate-6 opacity-20 blur-lg"></div>
                                <div className="absolute inset-0 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white transform transition-transform hover:scale-[1.02] duration-500">
                                    <img
                                        src="/assets/noman1.jpg"
                                        alt="Mohd Noman Qadri"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating Badges */}
                                <div className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 bg-white p-1 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float z-20">
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="p-0.5 md:p-2 bg-amber-100 rounded md:rounded-lg text-amber-600">
                                            <FaReact className="text-xs md:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] md:text-xs text-gray-500 leading-tight">Expert in</p>
                                            <p className="text-[8px] md:text-base font-bold text-slate-800 leading-tight">React.js</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-2 -right-2 md:-top-6 md:-right-6 bg-white p-1 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float animation-delay-2000 z-20">
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="p-0.5 md:p-2 bg-green-100 rounded md:rounded-lg text-green-600">
                                            <FaPython className="text-xs md:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] md:text-xs text-gray-500 leading-tight">Expert in</p>
                                            <p className="text-[8px] md:text-base font-bold text-slate-800 leading-tight">Python</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 bg-white p-1 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float animation-delay-1000 z-20">
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="p-0.5 md:p-2 bg-emerald-100 rounded md:rounded-lg text-emerald-600">
                                            <FaNodeJs className="text-xs md:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] md:text-xs text-gray-500 leading-tight">Expert in</p>
                                            <p className="text-[8px] md:text-base font-bold text-slate-800 leading-tight">Node.js</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-white p-1 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float animation-delay-3000 z-20">
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="p-0.5 md:p-2 bg-purple-100 rounded md:rounded-lg text-purple-600">
                                            <FaBrain className="text-xs md:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] md:text-xs text-gray-500 leading-tight">Skilled in</p>
                                            <p className="text-[8px] md:text-base font-bold text-slate-800 leading-tight">AI / ML</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-12 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, idx) => (
                            <Reveal key={idx} delay={idx * 100}>
                                <div className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-background hover:shadow-md transition-shadow">
                                    <div className="p-4 bg-blue-50 text-primary rounded-xl">
                                        {stat.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-3xl font-bold text-slate-900">{stat.value}+</div>
                                        <div className="text-slate-500 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="py-20 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Reveal>
                        <h2 className="section-title">Work Experience</h2>
                    </Reveal>

                    <div className="space-y-8">
                        <Reveal delay={100}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:w-2 transition-all duration-300"></div>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">Full Stack Developer</h3>
                                        <h4 className="text-lg text-primary font-medium mt-1">Gozler Tech</h4>
                                    </div>
                                    <div className="mt-2 md:mt-0 px-4 py-1 bg-blue-50 text-primary rounded-full text-sm font-semibold">
                                        21 Sept 2024 - Present
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    Developing scalable full-stack applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions. Implementing responsive designs and ensuring cross-browser compatibility.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/work-experience" className="text-primary font-semibold hover:underline">View Full Experience &rarr;</Link>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="section-title">My Expertise</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <Reveal key={idx} delay={idx * 100}>
                                <div className="p-8 bg-background rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="section-title">Technologies I Use</h2>
                    </Reveal>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {techStack.map((tech, idx) => (
                            <Reveal key={idx} delay={idx * 50}>
                                <div className="flex flex-col items-center group">
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                                        {tech.icon}
                                    </div>
                                    <span className="mt-4 font-medium text-slate-600 group-hover:text-primary transition-colors">{tech.name}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div ref={projectsRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="section-title">Featured Projects</h2>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['all', 'ai', 'clients', 'web', 'word'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? "bg-amber-500 text-black shadow-lg"
                                    : "bg-gray-100 text-slate-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat === 'all' ? 'All Work' :
                                    cat === 'ai' ? 'AI / ML' :
                                        cat === 'clients' ? 'Client Projects' :
                                            cat === 'web' ? 'Web Apps' : 'Landing Pages'}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, i) => (
                                <Reveal key={project.id} delay={i * 100}>
                                    <div
                                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="p-6 flex-grow">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="px-3 py-1 bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                                    {project.category === 'ai' ? 'AI / ML' : project.category}
                                                </span>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-slate-800 transition-colors"
                                                    onClick={e => e.stopPropagation()}
                                                >
                                                    <FaGithub size={20} />
                                                </a>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tech.slice(0, 3).map((t, i) => (
                                                    <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                        {t}
                                                    </span>
                                                ))}
                                                {project.tech.length > 3 && (
                                                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                        +{project.tech.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                            <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                                View Details &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-slate-500 text-lg">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeInUp" onClick={() => setSelectedProject(null)}>
                    <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            onClick={() => setSelectedProject(null)}
                        >
                            ✕
                        </button>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">{selectedProject.title}</h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-blue-50 text-primary text-sm font-medium rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {selectedProject.video ? (
                                <div className="rounded-xl overflow-hidden bg-black mb-8 shadow-lg">
                                    <video width="100%" controls autoPlay className="max-h-[400px] w-full object-contain">
                                        <source src={selectedProject.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <div className="h-48 bg-slate-100 rounded-xl flex items-center justify-center mb-8">
                                    <p className="text-slate-400">No video preview available</p>
                                </div>
                            )}

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline flex items-center gap-2"
                                >
                                    <FaGithub /> Source Code
                                </a>
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary flex items-center gap-2"
                                    >
                                        <SiVercel /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonials */}
            <div className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="section-title">Client Testimonials</h2>
                    </Reveal>

                    <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                        <div className="text-6xl text-blue-200 font-serif absolute top-4 left-8">"</div>
                        <p className="text-xl md:text-2xl text-slate-700 font-serif italic mb-8 relative z-10">
                            {testimonials[currentTestimonialIndex].feedback}
                        </p>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">{testimonials[currentTestimonialIndex].name}</h4>
                            <p className="text-primary">{testimonials[currentTestimonialIndex].title}</p>
                        </div>

                        <div className="flex justify-center gap-4 mt-8">
                            <button onClick={prevTestimonial} className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
                                &larr;
                            </button>
                            <button onClick={nextTestimonial} className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
