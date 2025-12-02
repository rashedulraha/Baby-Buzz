import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaHeart,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-content shadow-lg">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">BabyBuzz</h3>
              </div>
              <p className="text-base-content/70 mb-6 leading-relaxed">
                Your magical destination for toys that spark joy and
                imagination.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/rashedulraha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-content rounded-full flex items-center justify-center hover:bg-primary/80 transition shadow-md">
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/rashedulraha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-content rounded-full flex items-center justify-center hover:bg-primary/80 transition shadow-md">
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/rashedulraha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-content rounded-full flex items-center justify-center hover:bg-primary/80 transition shadow-md">
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* BabyBuzz Links */}
            <div>
              <h4 className="font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                BabyBuzz
              </h4>
              <ul className="space-y-3 text-base-content/70">
                {["Toys", "Sellers", "Categories", "Brands", "Support"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        className="hover:text-primary transition flex items-center gap-2">
                        <span className="text-primary">›</span> {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Resources
              </h4>
              <ul className="space-y-3 text-base-content/70">
                {["Community", "Events", "Blog", "Reviews", "Guides"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        className="hover:text-primary transition flex items-center gap-2">
                        <span className="text-primary">›</span> {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Connect
              </h4>
              <ul className="space-y-4 text-base-content/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition flex items-center gap-3">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition flex items-center gap-3">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition flex items-center gap-3">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition flex items-center gap-3">
                    <FaYoutube /> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition flex items-center gap-3">
                    <FaPinterest /> Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-base-300 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-base-content/60">
            <p>
              © 2024{" "}
              <a
                href="https://www.linkedin.com/in/rashedulraha/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline">
                Rashedul Islam
              </a>
              . All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-primary transition">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-primary transition">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
