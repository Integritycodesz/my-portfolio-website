"use client";

import { useState, useEffect } from "react";

const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "📋" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "services", label: "Services", icon: "</>" },
    { id: "contact", label: "Contact", icon: "✉" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
            <div className="nav-container">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-link${activeSection === item.id ? " active" : ""}`}
                        onClick={() => handleClick(item.id)}
                        data-section={item.id}
                    >
                        <span className="nav-icon">{item.icon}</span> {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
