"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        // Only enable custom cursor on desktop/devices with a fine pointer (mouse)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        if (!mediaQuery.matches) return;

        setEnabled(true);

        const mouse = { x: 0, y: 0 };
        const ring = { x: 0, y: 0 };
        let isHovered = false;
        let animationFrameId;

        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Move the small dot immediately
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
            }
        };

        const updateRing = () => {
            // Linear interpolation (LERP) for smooth damping trailing effect
            const ease = 0.15;
            ring.x += (mouse.x - ring.x) * ease;
            ring.y += (mouse.y - ring.y) * ease;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) scale(${isHovered ? 1.6 : 1})`;
            }

            animationFrameId = requestAnimationFrame(updateRing);
        };

        const addHoverListeners = () => {
            const targets = document.querySelectorAll("a, button, input, textarea, .project-card, .tech-card, .drive-card, .service-card, .social-icon");
            
            const handleMouseEnter = () => {
                isHovered = true;
                if (ringRef.current) ringRef.current.classList.add("cursor-hover");
                if (dotRef.current) dotRef.current.classList.add("cursor-hover");
            };

            const handleMouseLeave = () => {
                isHovered = false;
                if (ringRef.current) ringRef.current.classList.remove("cursor-hover");
                if (dotRef.current) dotRef.current.classList.remove("cursor-hover");
            };

            targets.forEach((target) => {
                target.addEventListener("mouseenter", handleMouseEnter);
                target.addEventListener("mouseleave", handleMouseLeave);
            });

            return () => {
                targets.forEach((target) => {
                    target.removeEventListener("mouseenter", handleMouseEnter);
                    target.removeEventListener("mouseleave", handleMouseLeave);
                });
            };
        };

        window.addEventListener("mousemove", onMouseMove);
        animationFrameId = requestAnimationFrame(updateRing);
        
        // Setup MutationObserver to watch for dynamically added elements (like interactive cards rendering after load)
        const cleanupHoverListeners = addHoverListeners();
        const observer = new MutationObserver(() => {
            addHoverListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
            cleanupHoverListeners();
            observer.disconnect();
        };
    }, []);

    if (!enabled) return null;

    return (
        <>
            <div className="custom-cursor-dot" ref={dotRef} aria-hidden="true" />
            <div className="custom-cursor-ring" ref={ringRef} aria-hidden="true" />
        </>
    );
}
