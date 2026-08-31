"use client";

import { useEffect, useRef } from "react";

const services = [
    {
        title: "Web Development",
        desc: "We build high-performance, modern websites that are fully responsive and optimized for search engines. From custom CMS to robust e-commerce platforms, we deliver scalable digital foundations.",
        featured: false,
        icon: (
            <svg viewBox="0 0 64 64" width="80" height="80">
                <rect x="8" y="12" width="48" height="32" rx="3" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
                <rect x="14" y="18" width="16" height="8" rx="1" fill="#c5cae9" />
                <rect x="14" y="28" width="10" height="3" rx="1" fill="#7986cb" />
                <rect x="26" y="28" width="10" height="3" rx="1" fill="#7986cb" />
                <rect x="34" y="18" width="16" height="4" rx="1" fill="#9fa8da" />
                <rect x="34" y="24" width="12" height="4" rx="1" fill="#9fa8da" />
                <rect x="20" y="44" width="24" height="4" rx="2" fill="#3f51b5" />
                <circle cx="48" cy="20" r="6" fill="#3f51b5" opacity="0.2" />
                <path d="M46 20l2 2 4-4" stroke="#3f51b5" strokeWidth="1.5" fill="none" />
            </svg>
        ),
    },
    {
        title: "App Development",
        desc: "Bring your ideas to life with intuitive mobile applications for iOS and Android. We focus on seamless user experience, powerful functionality, and reliable performance across all devices.",
        featured: true,
        icon: (
            <svg viewBox="0 0 64 64" width="80" height="80">
                <rect x="20" y="6" width="24" height="44" rx="4" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
                <rect x="24" y="12" width="16" height="28" rx="1" fill="#c5cae9" />
                <circle cx="32" cy="46" r="2" fill="#3f51b5" />
                <rect x="26" y="16" width="12" height="3" rx="1" fill="#7986cb" />
                <rect x="26" y="21" width="8" height="3" rx="1" fill="#9fa8da" />
                <rect x="26" y="26" width="12" height="3" rx="1" fill="#7986cb" />
                <rect x="26" y="31" width="6" height="3" rx="1" fill="#9fa8da" />
                <circle cx="44" cy="18" r="8" fill="#3f51b5" opacity="0.15" />
                <path d="M42 18l2 2 4-4" stroke="#3f51b5" strokeWidth="1.5" fill="none" />
            </svg>
        ),
    },
    {
        title: "Digital Marketing",
        desc: "Increase your visibility and drive qualified leads through targeted strategies. We handle SEO, paid advertising (PPC), social media campaigns, and content creation to maximize your ROI.",
        featured: false,
        icon: (
            <svg viewBox="0 0 64 64" width="80" height="80">
                <circle cx="32" cy="28" r="16" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
                <path d="M32 12v-4M32 48v-4M16 28h-4M52 28h-4" stroke="#3f51b5" strokeWidth="2" />
                <circle cx="32" cy="28" r="6" fill="#c5cae9" />
                <path d="M28 28l3 3 6-6" stroke="#3f51b5" strokeWidth="2" fill="none" />
                <rect x="12" y="48" width="40" height="6" rx="3" fill="#3f51b5" opacity="0.2" />
                <rect x="16" y="50" width="12" height="2" rx="1" fill="#3f51b5" />
            </svg>
        ),
    },
    {
        title: "Email Marketing",
        desc: "Build lasting customer relationships and increase conversions with professional email campaigns. We manage list segmentation, compelling design, automation setup, and performance analytics.",
        featured: false,
        icon: (
            <svg viewBox="0 0 64 64" width="80" height="80">
                <rect x="8" y="14" width="40" height="28" rx="3" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
                <path d="M8 22l20 12 20-12" stroke="#3f51b5" strokeWidth="2" fill="none" />
                <rect x="14" y="24" width="12" height="2" rx="1" fill="#c5cae9" />
                <rect x="14" y="28" width="16" height="2" rx="1" fill="#c5cae9" />
                <rect x="14" y="32" width="10" height="2" rx="1" fill="#c5cae9" />
                <circle cx="50" cy="44" r="8" fill="#3f51b5" opacity="0.15" />
                <path d="M47 44l2 2 4-4" stroke="#3f51b5" strokeWidth="1.5" fill="none" />
                <rect x="44" y="50" width="12" height="4" rx="2" fill="#3f51b5" opacity="0.2" />
            </svg>
        ),
    },
];

export default function Services() {
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);

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

        return () => observer.disconnect();
    }, []);

    // Cursor Tracking Glowing Aura Effect
    useEffect(() => {
        const handleMouseMove = (e, card) => {
            if (!card.classList.contains("visible")) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };

        const cards = cardsRef.current;
        const listeners = [];

        cards.forEach((card) => {
            if (!card) return;
            const onMouseMove = (e) => handleMouseMove(e, card);
            card.addEventListener("mousemove", onMouseMove);
            listeners.push({ card, onMouseMove });
        });

        return () => {
            listeners.forEach(({ card, onMouseMove }) => {
                if (card) {
                    card.removeEventListener("mousemove", onMouseMove);
                }
            });
        };
    }, []);

    return (
        <section id="services" className="section services-section" aria-label="Services offered" ref={sectionRef}>
            <div className="container">
                <p className="section-tag center">SERVICES</p>
                <h2 className="section-title">My Features &amp; Services</h2>
                <div className="section-underline"></div>
                <div className="services-grid">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            className={`service-card${service.featured ? " featured" : ""}`}
                            ref={(el) => (cardsRef.current[i] = el)}
                            role="article"
                            aria-label={`Service: ${service.title}`}
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            <meta itemProp="provider" content="Abhishek Yadav" />
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title" itemProp="name">{service.title}</h3>
                            <p className="service-desc" itemProp="description">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
