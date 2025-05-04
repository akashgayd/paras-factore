import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaMicrophone, FaHandshake, FaUserTie, FaHandsHelping, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatIDo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    {
      id: 1,
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: 'DEI Corporate Training',
      description: 'Comprehensive diversity and inclusion programs to transform your workplace culture and policies.',
      gradientStart: '#f2f5fa'
      
    },
    {
      id: 2,
      icon: <FaMicrophone className="text-4xl" />,
      title: 'Keynote Speaking',
      description: "Inspiring talks on LGBTQIA+ inclusion, leadership, and creating equitable workplaces.",
      gradientStart: '##f2f5fa',
     
    },
    {
      id: 3,
      icon: <FaUserTie className="text-4xl" />,
      title: 'Professional Emcee',
      description: 'Dynamic hosting for corporate events, conferences, and diversity summits.',
      gradientStart: '#f2f5fa'
     
    },
    {
      id: 4,
      icon: <FaHandsHelping className="text-4xl" />,
      title: 'Leadership Coaching',
      description: 'One-on-one mentorship to develop inclusive leadership skills and personal growth.',
      gradientStart: '#f2f5fa'
     
    },
    {
      id: 5,
      icon: <FaVideo className="text-4xl" />,
      title: 'Media Appearances',
      description: 'Expert commentary and hosting for podcasts, panels, and diversity-focused media.',
      gradientStart: '#f2f5fa',
      
    },
    {
      id: 6,
      icon: <FaHandshake className="text-4xl" />,
      title: 'Brand Partnerships',
      description: 'Collaborations with organizations committed to diversity and inclusion initiatives.',
      gradientStart: '#f2f5fa'
    
    },
  ];

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-600 uppercase font-bold tracking-wider mb-4 text-sm"
          >
            MY EXPERTISE
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Professional Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            Comprehensive solutions for diversity, equity, and inclusion in corporate and community spaces
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * service.id }}
              whileHover="hover"
              variants={cardVariants}
            >
              <Link to="/services">
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg h-full"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className="absolute inset-0 z-0 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradientStart}, ${service.gradientEnd})`,
                      opacity: hoveredCard === service.id ? 1 : 0.9
                    }}
                  />
                  
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${hoveredCard === service.id ? 'bg-white text-indigo-600' : 'bg-indigo-100 text-indigo-600'}`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    
                    <p className={`mb-8 transition-all duration-300 ${hoveredCard === service.id ? 'text-black' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    
                    <div className="mt-auto">
                      <span className={`inline-flex items-center font-medium ${hoveredCard === service.id ? 'text-blajk' : 'text-gray-600'}`}>
                        Learn more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;