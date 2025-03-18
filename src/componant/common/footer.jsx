import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import ComLogo from '../../assets/nav_logo.jpeg'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="flex items-center mb-8 w-full flex-col sm:flex-row">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4">
              <img 
                src={ComLogo} 
                alt="Company Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-2xl text-gray-500 font-semibold">Paras factore</div>
          </div>
 
          {/* Columns Container */}
          <div className="flex flex-wrap -mx-4">
            {/* Quick Link Column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-pink-500 text-lg font-semibold uppercase mb-5">Quick Link</h3>
              <ul>
                {['About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
                  <li key={item} className="mb-3">
                    <a 
                      href="www.linkedin.com/in/akash-gaydhane-34b0601b1" 
                      className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-pink-500 text-lg font-semibold uppercase mb-5">Resources</h3>
              <ul>
                {['Authentication', 'System Status', 'Terms of Service', 'Pricing', 'Over Right'].map((item) => (
                  <li key={item} className="mb-3">
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers Column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-pink-500 text-lg font-semibold uppercase mb-5">Developers</h3>
              <ul>
                {['Documentation', 'Authentication', 'API Reference', 'Support', 'Open Source'].map((item) => (
                  <li key={item} className="mb-3">
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="text-gray-500 text-lg" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className={`fixed bottom-5 right-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-gray-600" />
      </button>
    </>
  );
};

export default Footer;