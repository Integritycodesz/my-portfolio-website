"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { icon: "📁", value: 10, suffix: "+", label: "Projects Completed" },
    { icon: "⏳", value: 2, suffix: "+", label: "Years Experience" },
    { icon: "⚙️", value: 15, suffix: "+", label: "Technologies" },
    { icon: "🔥", value: 50, suffix: "+", label: "GitHub Contributions" },
];

function useCountUp(target, duration, shouldStart) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime = null;
        let animationFrame;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        }

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration, shouldStart]);

    return count;
}

function StatCard({ stat, shouldAnimate, delay }) {
    const count = useCountUp(stat.value, 1500, shouldAnimate);

    return (
        <div className="stat-card" style={{ transitionDelay: `${delay}s` }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">
                {count}
                {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
        </div>
    );
}

export default function Stats() {
    const sectionRef = useRef(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldAnimate(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="stats-section" ref={sectionRef} aria-label="Statistics">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <StatCard
                            key={stat.label}
                            stat={stat}
                            shouldAnimate={shouldAnimate}
                            delay={i * 0.15}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
