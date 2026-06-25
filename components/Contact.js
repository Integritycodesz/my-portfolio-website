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
                card.style.transitionDelay = `${i * 0.12}s`;
                observer.observe(card);
            }
        });

        if (formRef.current) {
            formRef.current.classList.add("reveal");
            formRef.current.style.transitionDelay = "0.2s";
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
        { icon: "📱", title: "Phone", value: "+91 89310 97990" },
    ];

    return (
        <section id="contact" className="section contact-section" aria-label="Contact information">
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
                        id="contact-form"
                    >
                        <div className="form-group">
                            <label htmlFor="contact-name">Your Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                placeholder="Your Name"
                                required
                                aria-required="true"
                                autoComplete="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-email">Your Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                placeholder="Your Email"
                                required
                                aria-required="true"
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                placeholder="Subject"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">Your Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                                aria-required="true"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            id="contact-submit"
                            style={
                                submitted
                                    ? { background: "linear-gradient(135deg, #22c55e, #10b981)" }
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
