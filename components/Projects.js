"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

const projects = [
    {
        title: "Pandit Jii",
        desc: "A full-stack marketplace connecting verified priests with devotees. Features puja booking, Vedic astrology, split payments, and a two-sided app ecosystem.",
        tags: ["Flutter", "Next.js", "Supabase", "PostgreSQL"],
        image: "/pandit-jii-thumbnail.jpg",
        caseStudy: "/projects/pandit-jii",
        github: "#",
        live: "#",
    },
    {
        title: "Pro Tournament",
        desc: "A professional tournament platform to organize and join gaming tournaments with real-time brackets and leaderboards.",
        tags: ["React", "JavaScript", "CSS"],
        image: "/pro-tournament-thumbnail.jpg",
        github: "https://github.com/Integritycodesz/ProTournament-.git",
        live: "https://yoooo-theta.vercel.app",
    },
    {
        title: "Integrity Agency",
        desc: "A premium digital agency website showcasing AI-driven solutions, modern design services, and strategic consulting.",
        tags: ["React", "Next.js", "CSS"],
        image: "/integrity-agency-thumbnail.jpg",
        github: "https://github.com/Integritycodesz",
        live: "https://integrity-psi.vercel.app",
    },
    {
        title: "Real Estate Platform",
        desc: "A professional real estate website for premium residential plots and properties with lead generation and interactive listings.",
        tags: ["Next.js", "React", "CSS"],
        image: "/real-estate-thumbnail.jpg",
        github: "https://github.com/Integritycodesz",
        live: "https://real-estate-premium-nine.vercel.app",
    },
    {
        title: "Café & Restaurant",
        desc: "An elegant café and farm restaurant website with online reservations, menu showcase, and a warm rustic aesthetic.",
        tags: ["React", "JavaScript", "CSS"],
        image: "/cafe-website-thumbnail.jpg",
        github: "https://github.com/Integritycodesz",
        live: "https://cafee-2.vercel.app",
    },
    {
        title: "Portfolio Website",
        desc: "This very portfolio — a modern dark-themed Next.js site with glassmorphism, animations, and SEO optimization.",
        tags: ["Next.js", "React", "CSS"],
        gradient: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.2))",
        imageContent: (
            <>
                <p className="pimg-sub">👋 Hello!</p>
                <h3>
                    Hi, I&apos;m Abhishek Yadav
                    <br />
                    <small>Web Enthusiast</small>
                </h3>
            </>
        ),
        github: "https://github.com/Integritycodesz",
        live: "https://abhishek-xi.vercel.app",
    },
];

export default function Projects() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
        );

        cardsRef.current.forEach((card, i) => {
            if (card) {
                card.style.transitionDelay = `${i * 0.12}s`;
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, []);

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
            
            const maxTilt = 10; // Degrees
            const tiltX = -yc * maxTilt;
            const tiltY = xc * maxTilt;
            
            card.style.transition = "transform 0.08s linear, border-color 0.3s ease, box-shadow 0.3s ease";
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
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
        <section id="projects" className="section projects-section" aria-label="Featured Projects">
            <div className="container">
                <p className="section-tag center">PROJECTS</p>
                <h2 className="section-title">Featured Work</h2>
                <div className="section-underline"></div>
                <p className="section-description">
                    A showcase of my recent projects demonstrating expertise in front-end
                    development, modern frameworks, and creative problem-solving.
                </p>
                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <article
                            key={project.title}
                            className="project-card"
                            ref={(el) => (cardsRef.current[i] = el)}
                            aria-label={`Project: ${project.title}`}
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                        >
                            <meta itemProp="keywords" content={project.tags.join(", ")} />
                            <div
                                className="project-image"
                                style={{ background: project.gradient || "none" }}
                            >
                                <div className="project-image-text">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} — project screenshot`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            itemProp="image"
                                        />
                                    ) : (
                                        project.imageContent
                                    )}
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title" itemProp="name">{project.title}</h3>
                                <p className="project-desc" itemProp="description">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.caseStudy && (
                                        <a
                                            href={project.caseStudy}
                                            className="btn-github"
                                            aria-label={`View detailed case study for ${project.title}`}
                                        >
                                            <ExternalLinkIcon size={16} />
                                            Case Study
                                        </a>
                                    )}
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            className="btn-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} on GitHub`}
                                        >
                                            <GitHubIcon size={16} />
                                            GitHub
                                        </a>
                                    )}
                                    {project.live && project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            className="btn-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} live demo`}
                                            itemProp="url"
                                        >
                                            <ExternalLinkIcon size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
