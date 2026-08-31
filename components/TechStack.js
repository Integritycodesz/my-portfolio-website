"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "JavaScript", level: 92, icon: "JS" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "Git", level: 80, icon: "🔀" },
    { name: "Figma", level: 70, icon: "🖌️" },
    { name: "Tailwind CSS", level: 82, icon: "💨" },
];

export default function TechStack() {
    const cardsRef = useRef([]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        if (!animated) {
                            setAnimated(true);
                        }
                    }
                });
            },
            { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
        );

        cardsRef.current.forEach((card, i) => {
            if (card) {
                card.classList.add("reveal-scale");
                card.style.transitionDelay = `${i * 0.08}s`;
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, [animated]);

    // 3D Perspective Hover Tilt Effect
    useEffect(() => {
        const handleMouseMove = (e, card) => {
            if (!card.classList.contains("visible")) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            
            const xc = x / rect.width - 0.5;
            const yc = y / rect.height - 0.5;
            
            const maxTilt = 8; // Subtle tilt for smaller tech cards
            const tiltX = -yc * maxTilt;
            const tiltY = xc * maxTilt;
            
            card.style.transition = "transform 0.08s linear, border-color 0.3s ease, box-shadow 0.3s ease";
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
        };

        const handleMouseLeave = (card) => {
            card.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease";
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        };

        const cards = cardsRef.current;
        const listeners = [];

        cards.forEach((card) => {
            if (!card) return;
            const onMouseMove = (e) => handleMouseMove(e, card);
            const onMouseLeave = () => handleMouseLeave(card);

            card.addEventListener("mousemove", onMouseMove);
            card.addEventListener("mouseleave", onMouseLeave);

            listeners.push({ card, onMouseMove, onMouseLeave });
        });

        return () => {
            listeners.forEach(({ card, onMouseMove, onMouseLeave }) => {
                if (card) {
                    card.removeEventListener("mousemove", onMouseMove);
                    card.removeEventListener("mouseleave", onMouseLeave);
                }
            });
        };
    }, []);

    return (
        <section id="tech" className="section techstack-section" aria-label="Technical Skills">
            <div className="container">
                <p className="section-tag center">SKILLS</p>
                <h2 className="section-title">Tech Stack</h2>
                <div className="section-underline"></div>
                <p className="section-description">
                    Technologies I work with to build modern, performant, and beautiful web experiences.
                </p>
                <div className="tech-grid">
                    {skills.map((skill, i) => (
                        <div
                            key={skill.name}
                            className="tech-card"
                            ref={(el) => (cardsRef.current[i] = el)}
                        >
                            <div className="tech-card-header">
                                <span className="tech-icon">{skill.icon}</span>
                                <span className="tech-name">{skill.name}</span>
                                <span className="tech-percent">{skill.level}%</span>
                            </div>
                            <div className="tech-progress">
                                <div
                                    className="tech-progress-bar"
                                    style={{
                                        width: animated ? `${skill.level}%` : "0%",
                                        transitionDelay: `${i * 0.1 + 0.3}s`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
