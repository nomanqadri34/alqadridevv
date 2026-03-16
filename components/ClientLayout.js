'use client';
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import CursorGlow from "./CursorGlow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

const phoneNumber = "+916392525639";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading for a smoother experience
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative">
            <AnimatePresence>
                {isLoading && <Loading key="loading" />}
            </AnimatePresence>
            <CursorGlow />
            <Navbar />
            <div className="flex-grow">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />


        </div>
    );
}
