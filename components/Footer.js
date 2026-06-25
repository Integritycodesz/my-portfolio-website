import { GitHubIcon, InstagramIcon } from "./icons";

export default function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-container">
                <p>
                    &copy; 2026 <span className="footer-brand">Abhishek Yadav</span>. All rights reserved.
                </p>
                <div className="footer-social">
                    <a
                        href="https://github.com/Integritycodesz"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon size={18} />
                    </a>
                    <a
                        href="https://www.instagram.com/abhi.yadavv8"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
