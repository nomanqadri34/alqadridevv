'use client';
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields");
            return;
        }
        setSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success("Message sent successfully! I will get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "Gorakhpur, Uttar Pradesh, India",
            link: null
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "nomanqadri@alqadridev.in",
            link: "mailto:nomanqadri@alqadridev.in"
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+91 6392525639",
            link: "tel:+916392525639"
        }
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/nomanqadri34", label: "GitHub", color: "hover:bg-gray-800" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/nomanqadri34", label: "LinkedIn", color: "hover:bg-blue-600" },
        { icon: <FaTwitter />, href: "https://twitter.com/nomanqadri34", label: "Twitter", color: "hover:bg-blue-400" },
        { icon: <FaInstagram />, href: "https://instagram.com/noman_qadri_", label: "Instagram", color: "hover:bg-pink-500" },
        { icon: <FaWhatsapp />, href: "https://wa.me/916392525639", label: "WhatsApp", color: "hover:bg-green-500" }
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-amber-50/30 font-sans text-text-main pt-0 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Hero */}
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            Let's Work <span className="text-amber-500">Together</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Have a project in mind? I'd love to hear about it. Let's collaborate and bring your ideas to life.
                        </p>
                    </div>
                </Reveal>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {contactInfo.map((info, i) => (
                        <Reveal key={i} delay={i * 100} direction="up">
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 text-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110">
                                    {info.icon}
                                </div>
                                <h4 className="font-bold text-lg text-slate-800 mb-2">{info.title}</h4>
                                {info.link ? (
                                    <a href={info.link} className="text-slate-600 hover:text-amber-500 transition-colors">
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-slate-600">{info.value}</p>
                                )}
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                {/* Form & Social Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <Reveal delay={100} className="lg:col-span-3">
                        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Send a Message</h3>
                            <p className="text-slate-500 mb-8">I'll get back to you within 24 hours</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Your Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Message *</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={submitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-auto flex items-center justify-center gap-2 px-8 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-bold rounded-xl shadow-lg hover:shadow-amber-300/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaPaperPlane className="text-lg" />
                                    {submitting ? "Sending..." : "Send Message"}
                                </motion.button>
                            </form>
                        </div>
                    </Reveal>

                    {/* Social & Quick Contact */}
                    <Reveal delay={200} className="lg:col-span-2">
                        <div className="space-y-6 h-full flex flex-col">
                            {/* Social Links */}
                            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 flex-1">
                                <h3 className="text-xl font-bold text-slate-800 mb-6">Connect With Me</h3>
                                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-4">
                                    {socialLinks.map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-700 text-xl transition-all duration-300 ${social.color} hover:text-white`}
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Contact CTA */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                <h3 className="text-lg font-bold mb-3 text-slate-900">Prefer a Quick Chat?</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    Feel free to reach out directly via WhatsApp for faster responses.
                                </p>
                                <motion.a
                                    href="https://wa.me/916392525639"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center justify-center gap-2 w-auto px-8 py-2.5 bg-green-500 hover:bg-green-400 text-white text-sm font-bold rounded-xl transition-all duration-300"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    Chat on WhatsApp
                                </motion.a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
