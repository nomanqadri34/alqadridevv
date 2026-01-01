'use client';
import React from "react";
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-wrapper">
                <div className="spinner-ring-outer"></div>
                <div className="spinner-ring-inner"></div>
                <div className="loading-logo-container">
                    {/* Ensure image exists in public folder */}
                    <img src="/assets/logo3.png" alt="Loading..." className="loading-logo" onError={(e) => e.target.style.display = 'none'} />
                </div>
            </div>
            <div className="loading-text-container">
                <span className="loading-letter">L</span>
                <span className="loading-letter">O</span>
                <span className="loading-letter">A</span>
                <span className="loading-letter">D</span>
                <span className="loading-letter">I</span>
                <span className="loading-letter">N</span>
                <span className="loading-letter">G</span>
            </div>
        </div>
    );
};

export default Loading;
