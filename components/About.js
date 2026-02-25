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
            contentRef.current.classList.add("reveal");
            observer.observe(contentRef.current);
        }
        if (imageRef.current) {
            imageRef.current.classList.add("reveal");
            observer.observe(imageRef.current);
        }
        cardsRef.current.forEach((card, i) => {
            if (card) {
                card.classList.add("reveal");
                card.style.transitionDelay = `${i * 0.1}s`;
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-content" ref={contentRef}>
                    <p className="section-tag">ABOUT ME</p>
                    <h2 className="section-title-left">
                        Building Meaningful
                        <br />
                        Digital Experiences
                    </h2>
                    <div className="about-divider"></div>
                    <p className="about-text">
                        I&apos;m a creative front-end developer passionate about building
                        modern and responsive web experiences. My journey began with a love
                        for design and evolved into a deep curiosity for how the web works —
                        combining logic with creativity to bring ideas to life.
                    </p>
                    <p className="about-text">
                        When I&apos;m not coding, I enjoy learning new technologies,
                        improving my projects, and exploring better ways to make the web
                        faster and more engaging. I believe in continuous learning, attention
                        to detail, and the power of clean, meaningful design.
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
                            src="/about-avatar.png"
                            alt="Abhishek Yadav About Avatar"
                            className="about-avatar-img"
                            width={360}
                            height={420}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
