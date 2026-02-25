"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const cardsRef = useRef([]);
    const formRef = useRef(null);

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
                card.classList.add("reveal");
                card.style.transitionDelay = `${i * 0.1}s`;
                observer.observe(card);
            }
        });

        if (formRef.current) {
            formRef.current.classList.add("reveal");
            observer.observe(formRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            e.target.reset();
        }, 2500);
    };

    const contactInfo = [
        { icon: "📧", title: "Email", value: "abhishekyadav@example.com" },
        { icon: "📍", title: "Location", value: "India" },
        { icon: "📱", title: "Phone", value: "+91 XXXXX XXXXX" },
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <p className="section-tag center">CONTACT</p>
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-underline"></div>
                <p className="section-description">
                    Have a project in mind? Let&apos;s work together to bring your ideas
                    to life.
                </p>
                <div className="contact-container">
                    <div className="contact-info-cards">
                        {contactInfo.map((info, i) => (
                            <div
                                key={info.title}
                                className="contact-info-card"
                                ref={(el) => (cardsRef.current[i] = el)}
                            >
                                <div className="contact-icon">{info.icon}</div>
                                <h4>{info.title}</h4>
                                <p>{info.value}</p>
                            </div>
                        ))}
                    </div>
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        ref={formRef}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            style={
                                submitted
                                    ? { background: "#4caf50" }
                                    : {}
                            }
                        >
                            {submitted ? "✓ Message Sent!" : "Send Message →"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
