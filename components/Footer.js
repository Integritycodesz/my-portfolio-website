import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; 2026 Abhishek Yadav. All rights reserved.</p>
                <div className="footer-social">
                    <a
                        href="#"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon size={20} />
                    </a>
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon size={20} />
                    </a>
                    <a
                        href="#"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
