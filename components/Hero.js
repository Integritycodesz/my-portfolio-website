"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons";
import CanvasParticles from "./CanvasParticles";

const roles = [
    "React Developer",
    "Front-End Engineer",
    "UI/UX Enthusiast",
    "Web Designer",
];

export default function Hero() {
    const [displayText, setDisplayText] = useState("React Developer");
    const heroImageRef = useRef(null);
    const hireBtnRef = useRef(null);
    const resumeBtnRef = useRef(null);

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = roles[0].length;
        let isDeleting = true;
        let isFirstRun = true;
        let timeoutId;

        function typeEffect() {
            const currentRole = roles[roleIndex];

            if (isFirstRun) {
                isFirstRun = false;
                timeoutId = setTimeout(typeEffect, 2000);
                return;
            }

            if (isDeleting) {
                charIndex--;
                setDisplayText(currentRole.substring(0, charIndex));
            } else {
                charIndex++;
                setDisplayText(currentRole.substring(0, charIndex));
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 400;
            }

            timeoutId = setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (heroImageRef.current && window.scrollY < 800) {
                heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Magnetic Button Hover Animation
    useEffect(() => {
        const handleMagnetic = (e, el) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const dist = Math.hypot(x, y);

            if (dist < 70) {
                // translate by 30% of offset distance for standard magnet effect
                el.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
                el.style.boxShadow = `0 10px 24px rgba(139, 92, 246, 0.25)`;
            } else {
                el.style.transform = "";
                el.style.boxShadow = "";
            }
        };

        const resetMagnetic = (el) => {
            el.style.transform = "";
            el.style.boxShadow = "";
        };

        const hireBtn = hireBtnRef.current;
        const resumeBtn = resumeBtnRef.current;

        const onMouseMoveHire = (e) => handleMagnetic(e, hireBtn);
        const onMouseLeaveHire = () => resetMagnetic(hireBtn);

        const onMouseMoveResume = (e) => handleMagnetic(e, resumeBtn);
        const onMouseLeaveResume = () => resetMagnetic(resumeBtn);

        if (hireBtn) {
            hireBtn.addEventListener("mousemove", onMouseMoveHire);
            hireBtn.addEventListener("mouseleave", onMouseLeaveHire);
        }

        if (resumeBtn) {
            resumeBtn.addEventListener("mousemove", onMouseMoveResume);
            resumeBtn.addEventListener("mouseleave", onMouseLeaveResume);
        }

        return () => {
            if (hireBtn) {
                hireBtn.removeEventListener("mousemove", onMouseMoveHire);
                hireBtn.removeEventListener("mouseleave", onMouseLeaveHire);
            }
            if (resumeBtn) {
                resumeBtn.removeEventListener("mousemove", onMouseMoveResume);
                resumeBtn.removeEventListener("mouseleave", onMouseLeaveResume);
            }
        };
    }, []);

    const handleHireMe = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="section hero-section" aria-label="Introduction">
            {/* Floating background orbs */}
            <div className="hero-bg-orb hero-bg-orb--1" aria-hidden="true" />
            <div className="hero-bg-orb hero-bg-orb--2" aria-hidden="true" />
            <div className="hero-bg-orb hero-bg-orb--3" aria-hidden="true" />

            {/* Interactive Canvas Particle Net */}
            <CanvasParticles />

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="availability-badge">
                        <span className="dot-pulse"></span>
                        Available for freelance work
                    </div>
                    <h1 className="hero-title">
                        Hi, I&apos;m <span className="highlight">Abhishek Yadav</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        <span>{displayText}</span>
                        <span className="cursor">|</span>
                    </h2>
                    <p className="hero-description">
                        I am a <strong>Front-End Developer &amp; React Engineer</strong> based in India, specializing in building high-performance, responsive, and user-centered web applications. With 2+ years of experience in Modern Web Development, I design and build highly optimized interfaces using React, Next.js, and clean CSS.
                    </p>
                    <div className="hero-meta">
                        <span>
                            📍 Based in <strong>INDIA</strong>
                        </span>
                        <span>📅 Available Now</span>
                    </div>
                    <div className="hero-buttons">
                        <button 
                            className="btn btn-primary" 
                            onClick={handleHireMe} 
                            id="hire-me-btn"
                            ref={hireBtnRef}
                            style={{ transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.15s ease" }}
                        >
                            → Hire Me
                        </button>
                        <a
                            href="/resume.pdf"
                            className="btn btn-outline"
                            download
                            id="download-resume-btn"
                            ref={resumeBtnRef}
                            style={{ transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.15s ease" }}
                        >
                            ↓ Download Resume
                        </a>
                    </div>
                    <div className="social-links">
                        <span className="social-label">Follow me:</span>
                        <a
                            href="https://github.com/Integritycodesz"
                            className="social-icon"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon size={28} />
                        </a>
                        <a
                            href="https://www.instagram.com/abhi.yadavv8"
                            className="social-icon"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon size={28} />
                        </a>
                    </div>
                </div>
                <div className="hero-image" ref={heroImageRef}>
                    <div className="hero-avatar-ring">
                        <Image
                            src="/hero-avatar-new.png"
                            alt="Abhishek Yadav — React Developer and Front-End Engineer"
                            className="avatar-img"
                            width={380}
                            height={380}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
