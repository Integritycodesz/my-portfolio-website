"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons";

const roles = [
    "React Developer",
    "Front-End Engineer",
    "UI/UX Enthusiast",
    "Web Designer",
];

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const heroImageRef = useRef(null);

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        function typeEffect() {
            const currentRole = roles[roleIndex];

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

    const handleHireMe = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="section hero-section">
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
                        I create <u>beautiful</u>, <u>functional</u>, and{" "}
                        <u>user-centered</u> digital experiences. With 2+ years of
                        experience in Web Development, I bring ideas to life through clean
                        code and <u>thoughtful design</u>.
                    </p>
                    <div className="hero-meta">
                        <span>
                            📍 Based in <strong>INDIA</strong>
                        </span>
                        <span>📅 Available Now</span>
                    </div>
                    <button className="btn btn-primary" onClick={handleHireMe}>
                        → Hire Me
                    </button>
                    <div className="social-links">
                        <span className="social-label">Follow me:</span>
                        <a
                            href="#"
                            className="social-icon"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon size={28} />
                        </a>
                        <a
                            href="#"
                            className="social-icon"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon size={28} />
                        </a>
                        <a
                            href="#"
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
                    <Image
                        src="/hero-avatar.png"
                        alt="Abhishek Yadav Avatar"
                        className="avatar-img"
                        width={380}
                        height={380}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
