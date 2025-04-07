import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-2">
      <ul className="flex flex-wrap gap-4 justify-center text-sm sm:text-base md:text-lg">
        <li>
          <a
            href="https://github.com/xssxx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/prariyavit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/prariyavit.prariyavit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/xssxx0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>
    </section>
  );
}
