import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WhatIDo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    {
      id: 1,
      icon: '≡',
      title: 'Business Strategy',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
      gradientStart: '#f0f2f5',
      gradientEnd: '#f0f2f5',
      hoverGradientStart: '#6a5acd',
      hoverGradientEnd: '#e94989'
    },
    {
      id: 2,
      icon: '📖',
      title: 'App Development',
      description: "We'll handle everything from to app development process until it is time to make your project live.",
      gradientStart: '#f0f2f5',
      gradientEnd: '#f0f2f5',
      hoverGradientStart: '#6a5acd',
      hoverGradientEnd: '#e94989'
    },
    {
      id: 3,
      icon: '📺',
      title: 'Business Strategy',
      description: 'We\'ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.',
      gradientStart: '#f0f2f5',
      gradientEnd: '#f0f2f5',
      hoverGradientStart: '#6a5acd',
      hoverGradientEnd: '#e94989'
    },
    {
        id: 4,
        icon: '≡',
        title: 'Business Strategy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        gradientStart: '#f0f2f5',
        gradientEnd: '#f0f2f5',
        hoverGradientStart: '#6a5acd',
        hoverGradientEnd: '#e94989'
      },

      {
        id: 5,
        icon: '≡',
        title: 'Business Strategy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        gradientStart: '#f0f2f5',
        gradientEnd: '#f0f2f5',
        hoverGradientStart: '#6a5acd',
        hoverGradientEnd: '#e94989'
      },

      {
        id: 6,
        icon: '≡',
        title: 'Business Strategy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        gradientStart: '#f0f2f5',
        gradientEnd: '#f0f2f5',
        hoverGradientStart: '#6a5acd',
        hoverGradientEnd: '#e94989'
      },

  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-pink-600 uppercase font-bold tracking-wider mb-2">FEATURES</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-16">What I Do</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link to={"/services"}
              key={service.id}
              className="relative rounded-lg overflow-hidden transition-all duration-500 shadow-md h-80"
              style={{
                background: hoveredCard === service.id
                  ? `linear-gradient(135deg, ${service.hoverGradientStart}, ${service.hoverGradientEnd})`
                  : `linear-gradient(135deg, ${service.gradientStart}, ${service.gradientEnd})`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-8 h-full flex flex-col justify-center">
                <div 
                  className={`text-4xl mb-6 transition-all duration-500 ${
                    hoveredCard === service.id ? 'text-white' : service.id === 2 ? 'text-white' : 'text-pink-600'
                  }`}
                >
                  {service.icon}
                </div>
                <h3 
                  className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                    hoveredCard === service.id ? 'text-black' : service.id === 2 ? 'text-black' : 'text-gray-800'
                  }`}
                >
                  {service.title}
                </h3>
                <p 
                  className={`transition-all duration-500 ${
                    hoveredCard === service.id ? 'text-white' : service.id === 2 ? 'text-black' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
                
                {(hoveredCard === service.id || service.id === 2) && (
                  <div className="absolute bottom-8 right-8 text-white text-2xl transition-all duration-500 transform translate-x-0">
                    →
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;