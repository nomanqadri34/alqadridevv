'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: mousePosition.x - 150,
                y: mousePosition.y - 150,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-amber-400/20 via-yellow-300/15 to-amber-500/10 blur-3xl" />
        </motion.div>
    );
};

export default CursorGlow;
