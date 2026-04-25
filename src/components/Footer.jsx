import React from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex gap-4 justify-center p-4">
            <a
                href="https://github.com/JoanMarie4"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />

            </a>

            <a
                href="https://www.linkedin.com/in/joanmarie-leone-9830a021b/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
            </a>

            <a href="mailto:jmleone9@gmail.com">
                <FaEnvelope />
            </a>
        </footer>
    );
};
export default Footer;