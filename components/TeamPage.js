'use client';
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

// Static asset imports are different in Next.js
// We use public directory, so we don't import images, but reference them by path
// Assuming images are in /assets/

const teamMembers = [
    {
        name: "Shoib Ahmed",
        course: "Flutter Developer",
        skills: ["Flutter", "Dart", "Firebase", "MySQL", "Android Studio"],
        linkedin: "https://www.linkedin.com/in/shoib-ahmad-788096219/",
        email: "shoib@example.com",
        image: "/assets/so1.png",
    },
    {
        name: "Shraddha Mishra",
        course: "WordPress Developer & SEO Expert",
        skills: ["WordPress", "SEO (On & Off Page)", "Digital Marketing", "HTML", "CSS", "Figma"],
        linkedin: "http://www.linkedin.com/in/shraddha-22bb31298",
        email: "shraddha@example.com",
        image: "/assets/sh1.png",
    },
];

const TeamMembers = () => {
    return (
        <section className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 font-sans">
            {/* Animated Heading */}
            <div className="max-w-2xl mx-auto text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 animate-[pulse_3s_ease-in-out_infinite] font-serif">Meet the Team</h2>
                <p className="text-gray-700 text-base sm:text-lg">
                    We are a passionate group of developers, designers, and digital marketers dedicated to delivering innovative solutions and driving success for our clients. Our diverse skills and collaborative spirit set us apart.
                </p>
            </div>

            {/* Quote/Testimonial Section */}
            <div className="max-w-xl mx-auto text-center mb-12">
                <blockquote className="italic text-primary text-xl font-medium border-l-4 border-primary pl-4">
                    "Alone we can do so little; together we can do so much."
                </blockquote>
                <div className="text-gray-500 text-sm mt-3">— Helen Keller</div>
            </div>

            {/* Team Grid - Centered */}
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out]">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative border-2 border-transparent hover:border-primary w-full max-w-sm"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 object-cover rounded-full border-4 border-primary shadow mb-6 transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/150';
                            }}
                        />
                        <h3 className="text-xl font-bold text-primary mb-2 font-serif">{member.name}</h3>
                        <p className="text-gray-600 mb-3 text-sm font-medium">{member.course}</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {member.skills.map((skill, i) => (
                                <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-auto">
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-600 hover:text-amber-700 text-2xl transition-colors"
                                title="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={`mailto:${member.email}`}
                                className="text-primary hover:text-primary/80 text-2xl transition-colors"
                                title="Email"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href={`mailto:${member.email}`}
                                className="ml-2 px-3 py-1 bg-primary text-white rounded-md text-xs font-semibold shadow hover:bg-primary/90 transition-colors flex items-center"
                                title={`Contact ${member.name}`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;

