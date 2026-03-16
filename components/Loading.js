'use client';
import React from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import './Loading.css';

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const Loading = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative flex flex-col items-center justify-center">

                {/* Brand Logo matching Navbar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center mb-6"
                >
                    <span className={`text-white text-3xl md:text-4xl font-bold leading-none tracking-widest drop-shadow-md pb-1 ${orbitron.className}`}>
                        AL QADRI
                    </span>
                    <span className={`text-amber-500 text-3xl md:text-4xl font-bold leading-none tracking-widest mt-2 drop-shadow-md pb-1 ${orbitron.className}`}>
                        DEV
                    </span>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-gray-400 text-[9px] md:text-xs font-bold tracking-[0.3em] mt-6"
                    >
                        BUILD <span className="text-amber-500 mx-1">•</span>
                        DEBUG <span className="text-amber-500 mx-1">•</span>
                        DELIVER
                    </motion.div>
                </motion.div>

                {/* Minimalist Progress Line */}
                <motion.div
                    className="absolute -bottom-20 w-48 md:w-80 h-[2px] bg-slate-800 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full w-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 1.4,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Cinematic Ambient Glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export default Loading;
