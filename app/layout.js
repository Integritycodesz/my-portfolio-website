import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Abhishek Yadav | React Developer Portfolio",
  description:
    "Hi, I'm Abhishek Yadav — a creative React Developer based in India. I build beautiful, functional, and user-centered digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
