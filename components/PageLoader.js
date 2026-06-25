"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
    const [hidden, setHidden] = useState(false);
    const [removed, setRemoved] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setHidden(true), 1200);
        const timer2 = setTimeout(() => setRemoved(true), 1800);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    if (removed) return null;

    return (
        <div className={`page-loader${hidden ? " hidden" : ""}`} aria-hidden="true">
            <div className="loader-logo">AY</div>
        </div>
    );
}
