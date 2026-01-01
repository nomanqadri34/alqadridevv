'use client';
import React, { useState } from "react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaGithub, FaSchool, FaGraduationCap, FaUniversity, FaBriefcase,
    FaCertificate, FaPython, FaDatabase, FaCode, FaLaptopCode,
    FaRocket, FaAward, FaChartLine, FaLightbulb, FaClock, FaTools,
    FaDocker, FaServer
} from "react-icons/fa";
import {
    SiExpress, SiMongodb, SiTailwindcss, SiFirebase,
    SiTypescript, SiVercel,
    SiMysql, SiPostgresql
} from "react-icons/si";
import Reveal from "./Reveal";
import Link from "next/link";

// Import certificate images (using string paths for public assets)
const cert1 = "/assets/cert8.jpeg";
const cert6 = "/assets/cert1.webp";
const cert9 = "/assets/cert9.jpg";
const cert12 = "/assets/cert12.png";
const cert11 = "/assets/cert11.png";
const cert3 = "/assets/cert3.webp";
const cert2 = "/assets/cert2.webp";
const cert4 = "/assets/cert4.webp";
const cert5 = "/assets/cert5.webp";

const SkillsExperience = () => {
    const [activeTab, setActiveTab] = useState("experience");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const skillCategories = {
        frontend: [
            { icon: <FaHtml5 />, name: "HTML5", percent: 95, color: "#E44D26" },
            { icon: <FaCss3Alt />, name: "CSS3", percent: 90, color: "#1572B6" },
            { icon: <FaJs />, name: "JavaScript", percent: 92, color: "#F7DF1E" },
            { icon: <FaReact />, name: "React.js", percent: 93, color: "#61DAFB" },
            { icon: <FaCode />, name: "Redux", percent: 85, color: "#764ABC" },
            { icon: <SiTypescript />, name: "TypeScript", percent: 80, color: "#3178C6" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS", percent: 95, color: "#06B6D4" },
            { icon: <FaCode />, name: "Bootstrap", percent: 88, color: "#7952B3" },
            { icon: <FaCode />, name: "SASS", percent: 82, color: "#CC6699" },
            { icon: <FaCode />, name: "jQuery", percent: 85, color: "#0769AD" },
        ],
        backend: [
            { icon: <FaNodeJs />, name: "Node.js", percent: 95, color: "#339933" },
            { icon: <FaServer />, name: "Express.js", percent: 90, color: "#000000" },
            { icon: <FaPython />, name: "Python", percent: 87, color: "#3776AB" },
            { icon: <FaCode />, name: "GraphQL", percent: 78, color: "#E10098" },
            { icon: <FaCode />, name: "Socket.io", percent: 82, color: "#010101" },
        ],
        database: [
            { icon: <SiMongodb />, name: "MongoDB", percent: 92, color: "#47A248" },
            { icon: <SiFirebase />, name: "Firebase", percent: 88, color: "#FFCA28" },
            { icon: <SiMysql />, name: "MySQL", percent: 83, color: "#4479A1" },
            { icon: <SiPostgresql />, name: "PostgreSQL", percent: 80, color: "#4169E1" },
            { icon: <FaDatabase />, name: "SQL", percent: 85, color: "#CC2927" },
        ],
        tools: [
            { icon: <FaGithub />, name: "GitHub", percent: 95, color: "#181717" },
            { icon: <FaCode />, name: "Git", percent: 93, color: "#F05032" },
            { icon: <FaTools />, name: "Postman", percent: 90, color: "#FF6C37" },
            { icon: <FaDocker />, name: "Docker", percent: 75, color: "#2496ED" },
            { icon: <FaCode />, name: "Jest", percent: 80, color: "#C21325" },
            { icon: <FaCode />, name: "Webpack", percent: 78, color: "#8DD6F9" },
            { icon: <SiVercel />, name: "Vercel", percent: 92, color: "#000000" },
            { icon: <FaCode />, name: "Netlify", percent: 90, color: "#00C7B7" },
            { icon: <FaCode />, name: "Heroku", percent: 85, color: "#430098" },
        ],
    };

    const allSkills = [
        ...skillCategories.frontend,
        ...skillCategories.backend,
        ...skillCategories.database,
        ...skillCategories.tools,
    ];

    const getFilteredSkills = () => {
        if (selectedCategory === "all") return allSkills;
        return skillCategories[selectedCategory] || [];
    };

    const experiences = [
        {
            icon: <FaBriefcase className="text-primary text-2xl" />,
            title: "Full Stack Developer",
            company: "Gozler Tech",
            duration: "21 Sept 2024 - Present",
            type: "Full-time",
            location: "Remote",
            responsibilities: [
                "Developing scalable full-stack applications using MERN stack",
                "Implementing responsive UI/UX designs with React and Tailwind CSS",
                "Building RESTful APIs and integrating third-party services",
                "Collaborating with cross-functional teams in Agile environment"
            ],
            achievements: [
                "Improved application performance by 40%",
                "Successfully delivered 5+ client projects"
            ]
        },
        {
            icon: <FaBriefcase className="text-primary text-2xl" />,
            title: "Web Developer Intern",
            company: "CodeSpaze",
            duration: "Oct 2024 - Dec 2024",
            type: "Internship",
            location: "Remote",
            responsibilities: [
                "Developed responsive web applications using React.js",
                "Worked on frontend optimization and performance tuning",
                "Participated in code reviews and team meetings"
            ],
            achievements: [
                "Completed 3 major projects during internship",
                "Received excellent feedback from mentors"
            ]
        },
        {
            icon: <FaBriefcase className="text-primary text-2xl" />,
            title: "Data Annotator",
            company: "Han Digital Solution Pvt Ltd",
            duration: "July 2024 - Sept 2024",
            type: "Contract",
            location: "Remote",
            responsibilities: [
                "Annotated and labeled data for ML/AI training datasets",
                "Ensured data quality and accuracy standards",
                "Collaborated with AI/ML teams for project requirements"
            ],
            achievements: [
                "Processed 10,000+ data points with 98% accuracy",
                "Contributed to 2 major AI projects"
            ]
        },
    ];

    const education = [
        {
            icon: <FaSchool className="text-primary text-2xl" />,
            degree: "High School",
            institute: "Stepping Stone Inter College, Gorakhpur",
            year: "2019",
            grade: "Distinction"
        },
        {
            icon: <FaGraduationCap className="text-yellow-500 text-2xl" />,
            degree: "12th Grade (PCM)",
            institute: "N.S Children Academy, Gorakhpur",
            year: "2021",
            grade: "First Division"
        },
        {
            icon: <FaUniversity className="text-indigo-500 text-2xl" />,
            degree: "B.Sc Computer Science",
            institute: "Integral University, Lucknow",
            year: "2024",
            grade: "CGPA: 8.0/10"
        },
        {
            icon: <FaUniversity className="text-indigo-500 text-2xl" />,
            degree: "MCA (Master of Computer Applications)",
            institute: "Jamia Hamdard University, New Delhi",
            year: "2024 - 2026",
            grade: "Pursuing"
        },
    ];

    const certifications = [
        {
            icon: <FaCertificate className="text-green-500 text-2xl" />,
            name: "Full Stack Web Development Using MERN Stack",
            provider: "PW Skills",
            img: cert9,
            desc: "Comprehensive MERN stack training with hands-on projects",
            year: "2024"
        },
        {
            icon: <FaCertificate className="text-green-500 text-2xl" />,
            name: "Backend Application Using Node.js",
            provider: "PW Skills",
            img: cert1,
            desc: "Advanced Node.js and Express.js backend development",
            year: "2024"
        },
        {
            icon: <FaCertificate className="text-purple-500 text-2xl" />,
            name: "Python Foundations",
            provider: "Certification Authority",
            img: cert3,
            desc: "Beginner to Advanced Python Programming",
            year: "2023"
        },
        {
            icon: <FaCertificate className="text-purple-500 text-2xl" />,
            name: "Java Programming",
            provider: "Certification Authority",
            img: cert6,
            desc: "Core Java and Object-Oriented Programming",
            year: "2023"
        },
        {
            icon: <FaCertificate className="text-amber-500 text-2xl" />,
            name: "Manual Testing Foundations",
            provider: "iNeuron",
            img: cert12,
            desc: "Software testing fundamentals and best practices",
            year: "2023"
        },
        {
            icon: <FaCertificate className="text-amber-500 text-2xl" />,
            name: "Web Automation Using Selenium",
            provider: "iNeuron",
            img: cert11,
            desc: "Automated testing with Selenium WebDriver",
            year: "2023"
        },
        {
            icon: <FaCertificate className="text-amber-500 text-2xl" />,
            name: "Spreadsheet Beginner to Advanced",
            provider: "Training Institute",
            img: cert2,
            desc: "Advanced Excel skills and data analysis",
            year: "2022"
        },
        {
            icon: <FaCertificate className="text-orange-500 text-2xl" />,
            name: "Salesforce Development",
            provider: "Integral University",
            img: cert4,
            desc: "Salesforce platform development and customization",
            year: "2023"
        },
        {
            icon: <FaCertificate className="text-pink-500 text-2xl" />,
            name: "Networking Using Cisco Packet Tracer",
            provider: "Integral University",
            img: cert5,
            desc: "Network configuration, simulation, and troubleshooting",
            year: "2023"
        },
    ];

    const stats = [
        { icon: <FaCode />, value: "40+", label: "Technologies", color: "bg-amber-500" },
        { icon: <FaRocket />, value: "14+", label: "Projects", color: "bg-green-500" },
        { icon: <FaAward />, value: "9+", label: "Certifications", color: "bg-purple-500" },
        { icon: <FaClock />, value: "2+", label: "Years Experience", color: "bg-orange-500" },
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-amber-50/30 pt-0 pb-20 px-4 sm:px-6 font-sans text-text-main relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -left-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
                <Reveal>
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                        Professional Journey
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                        Skills & <span className="text-amber-500">Experience</span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Passionate Full Stack Developer with expertise in building scalable web applications,
                        AI/ML solutions, and delivering exceptional user experiences.
                    </p>
                </Reveal>
            </div>

            {/* Stats Cards */}
            <div className="max-w-6xl mx-auto mb-16 md:mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, idx) => (
                        <Reveal key={idx} delay={idx * 100}>
                            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group h-full">
                                <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${stat.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-xl md:text-2xl">{stat.icon}</div>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="max-w-7xl mx-auto mb-16 md:mb-24">
                <Reveal>
                    <h2 className="section-title text-2xl md:text-3xl mb-8 text-center font-bold">Technical Proficiency</h2>
                </Reveal>

                {/* Skill Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["all", "frontend", "backend", "database", "tools"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${selectedCategory === category
                                ? "bg-amber-500 text-black shadow-lg"
                                : "bg-white text-slate-600 hover:bg-gray-50 shadow-sm border border-gray-200"
                                }`}
                        >
                            {category === "all" ? "All Skills" : category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {getFilteredSkills().map((skill, index) => (
                        <Reveal key={index} delay={index * 30}>
                            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <div
                                    className="mb-4 text-4xl md:text-5xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <div className="font-bold text-slate-800 mb-3 text-center text-sm">{skill.name}</div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: `${skill.percent}%`,
                                            backgroundColor: skill.color,
                                            animation: "slideIn 1s ease-out"
                                        }}
                                    ></div>
                                </div>
                                <span className="text-xs font-bold text-slate-600">{skill.percent}%</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Experience & Education Tabs */}
            <div className="max-w-6xl mx-auto mb-12">
                <div className="flex flex-row flex-wrap justify-center gap-3 mb-8 px-4">
                    <button
                        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 ${activeTab === "experience"
                            ? "bg-amber-500 text-black shadow-lg"
                            : "bg-white text-slate-600 hover:bg-gray-50 shadow-sm border border-gray-200"
                            }`}
                        onClick={() => setActiveTab("experience")}
                    >
                        <FaBriefcase />
                        Experience
                    </button>
                    <button
                        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 ${activeTab === "education"
                            ? "bg-amber-500 text-black shadow-lg"
                            : "bg-white text-slate-600 hover:bg-gray-50 shadow-sm border border-gray-200"
                            }`}
                        onClick={() => setActiveTab("education")}
                    >
                        <FaGraduationCap />
                        Education
                    </button>
                </div>

                {/* Experience Section */}
                {activeTab === "experience" && (
                    <div className="space-y-6 md:space-y-8">
                        {experiences.map((exp, index) => (
                            <Reveal key={index} delay={index * 100}>
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row items-start gap-6">
                                        <div className="hidden md:flex p-5 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
                                            {exp.icon}
                                        </div>
                                        <div className="flex-grow w-full">
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                                                        <div className="md:hidden p-3 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl text-primary text-xl">
                                                            {exp.icon}
                                                        </div>
                                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">{exp.title}</h3>
                                                    </div>
                                                    <p className="text-primary font-semibold text-base md:text-lg mb-1">{exp.company}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        <span className="px-3 py-1 bg-amber-50 text-amber-500 rounded-full text-xs font-semibold">
                                                            {exp.type}
                                                        </span>
                                                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-semibold">
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-2 bg-gray-50 rounded-full text-slate-600 font-medium text-xs md:text-sm whitespace-nowrap self-start">
                                                    <FaClock className="inline mr-2" />
                                                    {exp.duration}
                                                </div>
                                            </div>

                                            <div className="space-y-4 mt-6">
                                                <div>
                                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2 text-sm md:text-base">
                                                        <FaLaptopCode className="text-primary" />
                                                        Key Responsibilities
                                                    </h4>
                                                    <ul className="space-y-2 ml-2 md:ml-6">
                                                        {exp.responsibilities.map((resp, i) => (
                                                            <li key={i} className="text-slate-600 text-sm list-disc list-inside md:list-outside">{resp}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2 text-sm md:text-base">
                                                        <FaChartLine className="text-green-500" />
                                                        Achievements
                                                    </h4>
                                                    <ul className="space-y-2 ml-2 md:ml-6">
                                                        {exp.achievements.map((ach, i) => (
                                                            <li key={i} className="text-slate-600 text-sm list-disc list-inside md:list-outside">{ach}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                )}

                {/* Education Section */}
                {activeTab === "education" && (
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <Reveal key={index} delay={index * 100}>
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                        <div className="hidden md:block p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300">
                                            {edu.icon}
                                        </div>
                                        <div className="flex-grow w-full">
                                            <div className="flex items-center gap-3 mb-2 md:mb-0">
                                                <div className="md:hidden p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-indigo-600 text-xl">
                                                    {edu.icon}
                                                </div>
                                                <h4 className="text-xl md:text-2xl font-bold text-slate-900">{edu.degree}</h4>
                                            </div>
                                            <p className="text-indigo-600 font-semibold text-base md:text-lg mb-2">{edu.institute}</p>
                                            <p className="text-slate-600 text-sm">{edu.grade}</p>
                                        </div>
                                        <div className="px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full text-indigo-600 font-bold text-xs md:text-sm whitespace-nowrap border border-indigo-100 self-start md:self-center">
                                            {edu.year}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>

            {/* Professional Certifications Section */}
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <h2 className="section-title text-2xl md:text-3xl mb-4 text-center font-bold">Professional Certifications</h2>
                    <p className="text-center text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4 text-sm md:text-base">
                        Continuous learning and professional development through industry-recognized certifications
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certifications.map((cert, i) => (
                        <Reveal key={i} delay={i * 50}>
                            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
                                <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center overflow-hidden">
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full shadow-md">
                                        <span className="text-xs font-bold text-primary">{cert.year}</span>
                                    </div>
                                    <img
                                        src={cert.img}
                                        alt={`${cert.name} Certificate`}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-white to-gray-50">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="text-xl md:text-2xl">{cert.icon}</div>
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 px-3 py-1 rounded-full">
                                            Verified
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {cert.name}
                                    </h4>
                                    <p className="text-primary font-semibold text-xs md:text-sm mb-3 flex items-center gap-2">
                                        <FaAward className="text-yellow-500" />
                                        {cert.provider}
                                    </p>
                                    <p className="text-slate-600 text-xs md:text-sm mt-auto leading-relaxed">
                                        {cert.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default SkillsExperience;

