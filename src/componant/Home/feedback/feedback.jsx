import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Client1 from '../../../assets/clint1.jpg';


const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Alex",
      position: "CTO",
      company: "Solutions",
      period: "Direct Contract - Jan 2023 - Present",
      content: "The diversity-focused web portal developed by The Paaras Factor has transformed how we engage with underrepresented communities. Their understanding of inclusive design principles is exceptional, and they implemented accessibility features we hadn't even considered.",
      rating: 5,
       image: Client1,
      service: "DEI Web Platform Development"
    },
    {
      name: "Sarah",
      position: "Director of HR",
      company: "Innovation Corp Xyz",
      period: "Direct Contract - Mar 2023 - Ongoing",
      content: "Our corporate training portal needed a complete overhaul to be more inclusive. The team delivered a beautifully designed, fully accessible platform that supports multiple languages and cultural contexts. Their attention to detail in representing diverse communities is remarkable.",
      rating: 5,
      image: Client1,
      service: "Inclusive Learning Management System"
    },
    {
      name: "Akash",
      position: "Community",
    company: "Manager",
      period: "Direct Contract - Aug 2022 - Jan 2023",
      content: "Working with The Paaras Factor on our community platform was a game-changer. They built a safe space for LGBTQIA+ professionals with features like pronoun preferences, inclusive language filters, and community moderation tools we didn't know were possible.",
      rating: 4,
      image: Client1,
      service: "LGBTQIA+ Community Platform"
    },
    {
      name: "Tushar",
      position: "Analyst",
      company: "Tech Solutions xyz",
      period: "Direct Contract - Nov 2022 - Present",
      content: "The mentorship matching application they developed has increased engagement by 300% among our members. The algorithm they designed considers intersectional factors that make matches significantly more meaningful than other platforms we've tried.",
      rating: 5,
      image: Client1,
      service: "Intersectional Mentorship Platform"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (e) => {
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='%23e5e7eb'%3E%3Crect width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%239ca3af'%3EClient Logo%3C/text%3E%3C/svg%3E";
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 bg-white container rounded-lg shadow-lg relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from organizations that have transformed their digital presence with our inclusive solutions
        </p>
      </div>

      <div className="relative">
    
          
          
            <div className="flex flex-col md:flex-row">
              {/* Client Info Section */}
              <div className="w-full md:w-1/3 p-8 md:p-10 bg-white flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 overflow-hidden">
                  <img 
                    src={testimonials[currentSlide].image}
                    onError={handleImageError}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-full">
                    <FaQuoteLeft className="text-sm" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonials[currentSlide].name}</h3>
                <p className="text-gray-600 mb-2">{testimonials[currentSlide].position}</p>
                <div className="text-sm font-medium text-indigo-600 mb-4">{testimonials[currentSlide].company}</div>
                
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i}
                      className={`text-lg ${i < testimonials[currentSlide].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">
                    {testimonials[currentSlide].service}
                  </span>
                  <p className="text-gray-500 text-sm mb-2">{testimonials[currentSlide].period}</p>
                </div>
                
                <div className="relative mb-6">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-2xl text-indigo-200" />
                  <p className="text-lg text-gray-700 pl-8">
                    {testimonials[currentSlide].content}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentSlide + 1} of {testimonials.length}
                  </div>
                </div>
              </div>
            </div>
      
        

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;