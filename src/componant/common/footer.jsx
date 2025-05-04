import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowUp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ComLogo from '../../assets/nav_logo.jpeg';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: 'https://www.facebook.com/profile.php?id=61574183728935',
    },
    {
      icon: FaYoutube,
      url: 'https://www.youtube.com/@ThePaarasFactor',
    },
    {
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/paras-g-vats-a4216233b/',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/thepaarasfactor/',
    },
  ];

  const internalLinks = [
    { label: 'About', to: '/about' },
    { label: 'Portfolio', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <footer className="w-full bg-gray-900 text-gray-300 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            {/* Brand Info */}
            <div className="flex flex-col items-start mb-8 md:mb-0 w-full md:w-auto">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white">
                  <img
                    src={ComLogo}
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-2xl text-white font-bold">Paras Factor</div>
              </div>
              <p className="text-gray-400 max-w-xs mb-4">
                Transforming ideas into digital reality with innovative solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Icon className="text-gray-300 group-hover:text-white text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
              {/* Quick Links */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wider">Quick Links</h3>
                <ul className="space-y-3">
                  {internalLinks.map(({ label, to }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wider">Resources</h3>
                <ul className="space-y-3">
                  {['Help Center', 'System Status', 'Terms', 'Pricing', 'Over Right'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wider">Company</h3>
                <ul className="space-y-3">
                  {['Careers', 'Privacy', 'Cookies', 'Press', 'FAQ'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Paras Factore. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </button>
    </>
  );
};

export default Footer;
