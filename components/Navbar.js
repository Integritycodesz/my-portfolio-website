"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./icons";

const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "📋" },
    { id: "tech", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "services", label: "Services", icon: "</>" },
    { id: "contact", label: "Contact", icon: "✉" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        setTheme(currentTheme);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    };

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
        <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar" role="navigation" aria-label="Main navigation">
            <div className="nav-container">
                <span className="nav-logo">AY</span>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-link${activeSection === item.id ? " active" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick(item.id);
                        }}
                        data-section={item.id}
                        aria-current={activeSection === item.id ? "page" : undefined}
                    >
                        <span className="nav-icon">{item.icon}</span> {item.label}
                    </a>
                ))}
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                </button>
            </div>
        </nav>
    );
}
