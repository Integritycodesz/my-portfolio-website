"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Cursor from "@/components/Cursor";

export default function PanditJiiCaseStudy() {
  useEffect(() => {
    // Reset scroll on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study-page">
      <Cursor />
      
      {/* Back Button */}
      <div style={{ position: "fixed", top: "40px", left: "40px", zIndex: 1000 }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "var(--bg-glass-strong)", backdropFilter: "blur(12px)", borderRadius: "50px", color: "var(--text)", textDecoration: "none", border: "1px solid var(--border)", fontWeight: "500", transition: "var(--transition)" }} className="back-btn">
          <span>←</span> Back to Portfolio
        </Link>
      </div>

      <style jsx>{`
        .back-btn:hover {
          background: var(--gradient);
          color: #fff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: var(--glow);
        }
        .hero-banner {
          position: relative;
          width: 100%;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, var(--bg) 90%);
        }
        .content-wrapper {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 50px;
          background: var(--primary-light);
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 24px;
          border: 1px solid var(--border-hover);
        }
        .title {
          font-family: var(--font-heading);
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 700px;
        }
        .section-block {
          padding: 80px 0;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .text-block h2 {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          margin-bottom: 24px;
        }
        .text-block p {
          color: var(--text-muted);
          margin-bottom: 16px;
          font-size: 1.1rem;
          line-height: 1.8;
        }
        .feature-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 32px;
          border-radius: var(--radius);
          transition: var(--transition);
        }
        .feature-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-5px);
          box-shadow: var(--card-shadow-hover);
        }
        .feature-card h3 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          margin-bottom: 16px;
          color: var(--text);
        }
        .feature-card p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
          .title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="hero-banner">
        <div className="hero-bg">
          <Image src="/pandit-jii-thumbnail.jpg" alt="Pandit Jii App Preview" fill style={{ objectFit: "cover", opacity: 0.3 }} priority />
        </div>
        <div className="content-wrapper">
          <span className="badge">Featured Case Study</span>
          <h1 className="title">Pandit Jii Ecosystem</h1>
          <p className="subtitle">
            A $40B unorganized market transformed. A full-stack, two-sided marketplace and temple-tech platform connecting verified priests with devotees across the globe.
          </p>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="section-block grid-2">
          <div className="text-block">
            <h2>The Problem & Solution</h2>
            <p>
              Religious rituals and astrological services in India are plagued by opaque pricing, lack of verified priests, geographical discovery bottlenecks, and friction in payments.
            </p>
            <p>
              <strong>Pandit Jii</strong> solves this through a robust ecosystem comprising a Devotee Mobile App, a Partner App for Priests, and an Admin Web Dashboard. It guarantees physical service completion, handles complex split-payments, and provides deep astrological tools.
            </p>
          </div>
          <div style={{ position: "relative", height: "400px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
             <Image src="/pandit-jii-thumbnail.jpg" alt="Pandit Jii UI" fill style={{ objectFit: "cover" }} />
          </div>
        </section>

        <section className="section-block">
          <div className="text-block" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <h2>Architecture by Platform</h2>
            <p>A unified experience powered by cutting-edge technology across three distinct platforms.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>📱 Devotee App</h3>
              <p>Built with <strong>Flutter</strong> and <strong>Riverpod v3</strong>. Features puja booking with custom samagri packages, a client-side KP astrology engine, Muhurat calculators, and smart geospatial nearest-pandit discovery.</p>
            </div>
            <div className="feature-card">
              <h3>📱 Partner App</h3>
              <p>Offline-first Clean Architecture. Includes a priest onboarding wizard with KYC, an interactive availability scheduler, and a real-time earnings double-entry ledger with instant bank/UPI cashouts.</p>
            </div>
            <div className="feature-card">
              <h3>💻 Admin Dashboard</h3>
              <p>Next.js 16 App Router portal leveraging <strong>React Server Components</strong>. Features Role-Based Access Control, live financial analytics, KYC auditing, and automated payout disbursements.</p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>Engineering Masterstrokes</h2>
            <p>Deep technical challenges solved to ensure zero-fraud operations, flawless UX, and extreme scalability.</p>
          </div>
          
          <div className="features-grid">
             <div className="feature-card">
              <h3>Zero-Fraud Verification</h3>
              <p>Two-phase physical handshake protocol using cryptographic OTPs to verify priest arrival and ritual completion, explicitly enforced by Postgres Row-Level Security.</p>
            </div>
            <div className="feature-card">
              <h3>Double-Entry Ledger</h3>
              <p>Atomic balance invariants using <code>SELECT ... FOR UPDATE</code> locks to prevent concurrent double-withdrawal attempts and ensure financial accuracy.</p>
            </div>
            <div className="feature-card">
              <h3>Split-Payment Engine</h3>
              <p>Supports 20% advance booking mode with server-side HMAC-SHA256 signature verification via Razorpay and Supabase Edge Functions.</p>
            </div>
            <div className="feature-card">
              <h3>Self-Serve Ad Engine</h3>
              <p>B2B sponsored ad monetization allowing priests to bid on high-intent puja searches with real-time budget depletion and click validation.</p>
            </div>
          </div>
        </section>

        <section className="section-block" style={{ borderTop: "1px solid var(--border)", textAlign: "center", paddingBottom: "120px" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "32px" }}>Infrastructure Stack</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Flutter", "Dart 3", "Next.js 16", "React 19", "PostgreSQL 17", "PostGIS", "Supabase", "Deno Edge Functions", "Razorpay", "Cashfree API"].map(tech => (
              <span key={tech} style={{ padding: "10px 24px", background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--text)", fontWeight: "500", fontSize: "0.95rem" }}>{tech}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
