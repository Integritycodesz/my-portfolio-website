"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

const projects = [
    {
        title: "Pro Tournament",
        desc: "A professional tournament platform to organize and join gaming tournaments.",
        tags: ["React", "JavaScript", "CSS"],
        gradient: "none",
        image: "/pro-tournament-thumbnail.png",
        darkText: true,
        imageContent: null,
        github: "https://github.com/Integritycodesz/ProTournament-.git",
        live: "https://yoooo-theta.vercel.app",
    },
    {
        title: "Portfolio Website",
        desc: "Personal portfolio to showcase my design and coding projects.",
        tags: ["Next.js", "React", "CSS"],
        gradient: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        darkText: true,
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
        github: "#",
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
                card.style.transitionDelay = `${i * 0.1}s`;
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <p className="section-tag center">PROJECTS</p>
                <h2 className="section-title">Featured Work</h2>
                <div className="section-underline"></div>
                <p className="section-description">
                    A showcase of my recent projects demonstrating expertise in full-stack
                    development, modern frameworks, and creative problem-solving.
                </p>
                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className="project-card"
                            ref={(el) => (cardsRef.current[i] = el)}
                        >
                            <div
                                className="project-image"
                                style={{ background: project.gradient }}
                            >
                                <div
                                    className={`project-image-text${project.darkText ? " dark-text" : ""}`}
                                >
                                    {project.image ? (
                                        <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                                    ) : (
                                        project.imageContent
                                    )}
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            className="btn-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GitHubIcon size={16} />
                                            GitHub
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="btn-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLinkIcon size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
