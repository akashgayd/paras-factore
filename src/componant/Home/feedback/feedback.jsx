import React, { useState, useEffect } from 'react';
import NewImg from '../../../assets/paras_logo.jpg';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Jone Duone Joe",
      position: "Operating Officer",
      company: "BOUND - TROLOLA",
      period: "Upwork - Mar 4, 2016 - Aug 30, 2021",
      content: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris",
      rating: 5,
      image: NewImg
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "VISIONARY - NEXTECH",
      period: "Upwork - Jan 15, 2018 - Dec 20, 2022",
      content: "Exceptional web development services that transformed our online presence. The team was responsive, creative, and delivered beyond our expectations. I highly recommend their services to anyone looking for quality development.",
      rating: 5,
      image: 'src/assets/paras_logo.jpg'
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "TECH - INNOVATE",
      period: "Upwork - Sep 10, 2017 - Nov 5, 2021",
      content: "Working with this development team was a game-changer for our startup. They understood our vision perfectly and implemented features that exceeded our requirements. Their attention to detail and technical expertise are outstanding.",
      rating: 4,
      image: "src/assets/landingpageOne.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "RETAIL - SHOPWISE",
      period: "Upwork - Jun 22, 2019 - Apr 15, 2023",
      content: "Our online store has seen a 200% increase in conversions since implementing the new web application. The user interface is intuitive, and the backend functionality is robust. Couldn't be happier with the results.",
      rating: 5,
      image: "/api/placeholder/200/200"
    },
    {
      name: "David Thompson",
      position: "Project Manager",
      company: "BUILD - CONSTRUCT",
      period: "Upwork - Feb 3, 2020 - Jan 28, 2022",
      content: "The web application developed for our construction business has streamlined our operations significantly. The team was professional throughout the project and delivered on time despite our complex requirements.",
      rating: 5,
      image: "/api/placeholder/200/200"
    },
    {
      name: "Lisa Patel",
      position: "Founder",
      company: "HEALTH - WELLNESS",
      period: "Upwork - Nov 12, 2018 - Oct 5, 2021",
      content: "From concept to execution, the development process was smooth and transparent. The team built a platform that perfectly embodies our brand and provides an exceptional user experience for our customers.",
      rating: 4,
      image: "/api/placeholder/200/200"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Handle image errors
  const handleImageError = (e) => {
    e.target.src = "/api/placeholder/200/200";
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-7 bg-gray-100 relative">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left part - Image and info */}
        <div className="w-full md:w-1/3 bg-white p-4 md:p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 md:mb-6">
            <img 
              src={testimonials[currentSlide].image}
              onError={handleImageError}
              alt={testimonials[currentSlide].name} 
              className="w-full h-full object-cover rounded-md shadow-md"
            />
            <div className="absolute -bottom-3 -left-3 p-1 sm:p-2 bg-white rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-gray-400 uppercase text-xs sm:text-sm tracking-wider mb-1">{testimonials[currentSlide].company}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{testimonials[currentSlide].name}</h3>
            <p className="text-sm sm:text-base text-gray-600">{testimonials[currentSlide].position}</p>
          </div>
        </div>
        
        {/* Right part - Testimonial content */}
        <div className="w-full md:w-2/3 bg-gray-50 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <div className="mb-3 md:mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Web App Development</h2>
            <p className="text-sm sm:text-base text-gray-600">{testimonials[currentSlide].period}</p>
          </div>
          
          <div className="mb-4 md:mb-6">
            <div className="flex mb-2 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill={i < testimonials[currentSlide].rating ? "#FFD700" : "none"} 
                  stroke="#FFD700" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-base sm:text-lg line-clamp-6 md:line-clamp-none">
              {testimonials[currentSlide].content}
            </p>
          </div>
          
          <div className="flex justify-between items-center mt-4 md:mt-auto">
            <div className="flex space-x-1 sm:space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm">
              {currentSlide + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons - moved outside the card for better mobile experience */}
      <button 
        onClick={goToPrevSlide} 
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10"
      >
       
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        
      </button>
      <button 
        onClick={goToNextSlide} 
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default TestimonialSlider;