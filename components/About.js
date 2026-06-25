"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
    const contentRef = useRef(null);
    const imageRef = useRef(null);
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

        if (contentRef.current) {
            contentRef.current.classList.add("reveal-left");
            observer.observe(contentRef.current);
        }
        if (imageRef.current) {
            imageRef.current.classList.add("reveal-right");
            observer.observe(imageRef.current);
        }
        cardsRef.current.forEach((card, i) => {
            if (card) {
                card.classList.add("reveal-scale");
                card.style.transitionDelay = `${i * 0.15}s`;
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section about-section" aria-label="About Abhishek Yadav" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Abhishek Yadav" />
            <meta itemProp="jobTitle" content="React Developer & Front-End Engineer" />
            <meta itemProp="url" content="https://abhishek-xi.vercel.app" />
            <meta itemProp="telephone" content="+91 89310 97990" />
            <meta itemProp="email" content="abhishekyadav@example.com" />
            <div className="container about-container">
                <div className="about-content" ref={contentRef}>
                    <p className="section-tag">ABOUT ME</p>
                    <h2 className="section-title-left">
                        Building Meaningful
                        <br />
                        Digital Experiences
                    </h2>
                    <div className="about-divider"></div>
                    <p className="about-text" itemProp="description">
                        I&apos;m a <strong>professional Front-End Developer and React.js Engineer</strong> based in India, specializing in modern web design and interactive user interfaces. My journey began with a passion for digital layouts and evolved into engineering high-performance Next.js web applications — blending logical architecture with pixel-perfect visual design.
                    </p>
                    <p className="about-text">
                        When I&apos;m not coding, I enjoy learning modern technologies, optimizing my current projects for speed, and exploring innovative approaches to make user experiences faster, more accessible, and highly engaging. I emphasize semantic markup, clean architectures, and search-optimized development patterns.
                    </p>
                    <h3 className="about-subtitle">What Drives Me</h3>
                    <div className="drives-cards">
                        {[
                            {
                                icon: "</>",
                                title: "Languages",
                                desc: "HTML, CSS, JavaScript, C, React",
                            },
                            {
                                icon: "🎓",
                                title: "Education",
                                desc: "Currently pursuing BTech in Computer Science",
                            },
                            {
                                icon: "📁",
                                title: "Projects",
                                desc: "Built more than 10+ projects with modern technologies",
                            },
                        ].map((item, i) => (
                            <div
                                key={item.title}
                                className="drive-card"
                                ref={(el) => (cardsRef.current[i] = el)}
                            >
                                <div className="drive-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-image" ref={imageRef}>
                    <div className="about-avatar-wrapper">
                        <Image
                            src="/about-avatar-new.png"
                            alt="Abhishek Yadav — React Developer & Front-End Engineer"
                            className="about-avatar-img"
                            width={360}
                            height={420}
                            itemProp="image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
