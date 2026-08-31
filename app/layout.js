import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport = {
  themeColor: "#0b0f19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Abhishek Yadav | React Developer & Front-End Engineer Portfolio",
  description:
    "Hi, I'm Abhishek Yadav — a creative React Developer & Front-End Engineer based in India. I build beautiful, high-performance, and user-centered digital applications with React, Next.js, and modern front-end technologies.",
  keywords: [
    "Abhishek Yadav",
    "React Developer",
    "Front-End Engineer",
    "Web Developer India",
    "Next.js Developer",
    "ReactJS Developer",
    "Front-End Web Developer Portfolio",
    "JavaScript Developer Portfolio",
    "UI UX Developer Portfolio",
    "Creative Web Engineer India",
    "Freelance React Developer India",
    "Next.js Developer India",
    "Web Design India",
    "Responsive Web Development",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Abhishek Yadav", url: "https://abhishek-xi.vercel.app" }],
  creator: "Abhishek Yadav",
  publisher: "Abhishek Yadav",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  applicationName: "Abhishek Yadav Portfolio",
  metadataBase: new URL("https://abhishek-xi.vercel.app"),
  alternates: {
    canonical: "https://abhishek-xi.vercel.app",
    languages: {
      "en-US": "/en-US",
    },
  },
  category: "Technology",
  classification: "Developer Portfolio",
  openGraph: {
    title: "Abhishek Yadav | React Developer & Front-End Engineer Portfolio",
    description:
      "Creative React Developer & Front-End Engineer based in India — building beautiful, functional, and user-centered digital applications.",
    url: "https://abhishek-xi.vercel.app",
    siteName: "Abhishek Yadav Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Yadav — React Developer & Front-End Engineer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Abhishek",
    lastName: "Yadav",
    username: "Integritycodesz",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Yadav | React Developer & Front-End Engineer",
    description:
      "Creative React Developer & Front-End Engineer based in India — building beautiful, functional, and user-centered digital applications.",
    images: ["/og-image.png"],
    creator: "@abhi_yadavv8",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ZJM_UFp91IO9UuoA0AWpXLYF-GvLh7GbGVvkcg4u6k0",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abhishek-xi.vercel.app/#person",
      "name": "Abhishek Yadav",
      "jobTitle": "React Developer & Front-End Engineer",
      "url": "https://abhishek-xi.vercel.app",
      "image": "https://abhishek-xi.vercel.app/hero-avatar-new.png",
      "email": "abhishekyadav@example.com",
      "telephone": "+91 89310 97990",
      "sameAs": [
        "https://github.com/Integritycodesz",
        "https://www.instagram.com/abhi.yadavv8"
      ],
      "knowsAbout": [
        "React",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "Figma",
        "Web Development",
        "UI/UX Design",
        "Front-End Engineering",
        "Responsive Web Design"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "gender": "http://schema.org/Male",
      "nationality": "India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Freelance Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "High-performance, modern websites that are fully responsive and search engine optimized."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Development",
              "description": "Intuitive mobile applications for iOS and Android focusing on seamless UX and reliable performance."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "description": "Visibility improvement and lead generation using targeted SEO, PPC, and social media campaigns."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email Marketing",
              "description": "Customer relationship building and conversion optimization via automated email campaigns."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://abhishek-xi.vercel.app/#website",
      "url": "https://abhishek-xi.vercel.app",
      "name": "Abhishek Yadav Portfolio",
      "publisher": {
        "@id": "https://abhishek-xi.vercel.app/#person"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://abhishek-xi.vercel.app/#webpage",
      "url": "https://abhishek-xi.vercel.app",
      "name": "Abhishek Yadav | React Developer & Front-End Engineer Portfolio",
      "about": {
        "@id": "https://abhishek-xi.vercel.app/#person"
      },
      "isPartOf": {
        "@id": "https://abhishek-xi.vercel.app/#website"
      },
      "description": "Hi, I'm Abhishek Yadav — a creative React Developer & Front-End Engineer based in India. I build beautiful, high-performance, and user-centered digital applications with React, Next.js, and modern front-end technologies."
    },
    {
      "@type": "ItemList",
      "@id": "https://abhishek-xi.vercel.app/#projects",
      "name": "Featured Projects",
      "description": "A showcase of featured web applications built by Abhishek Yadav.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Pro Tournament",
            "description": "A professional tournament platform to organize and join gaming tournaments with real-time brackets and leaderboards.",
            "url": "https://yoooo-theta.vercel.app",
            "image": "https://abhishek-xi.vercel.app/pro-tournament-thumbnail.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "Integrity Agency",
            "description": "A premium digital agency website showcasing AI-driven solutions, modern design services, and strategic consulting.",
            "url": "https://integrity-psi.vercel.app",
            "image": "https://abhishek-xi.vercel.app/integrity-agency-thumbnail.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "Real Estate Platform",
            "description": "A professional real estate website for premium residential plots and properties with lead generation and interactive listings.",
            "url": "https://real-estate-premium-nine.vercel.app",
            "image": "https://abhishek-xi.vercel.app/real-estate-thumbnail.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "Café & Restaurant",
            "description": "An elegant café and farm restaurant website with online reservations, menu showcase, and a warm rustic aesthetic.",
            "url": "https://cafee-2.vercel.app",
            "image": "https://abhishek-xi.vercel.app/cafe-website-thumbnail.jpg"
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  document.documentElement.setAttribute('data-theme', theme);

                  var color = localStorage.getItem('color') || 'purple';
                  document.documentElement.setAttribute('data-color', color);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
