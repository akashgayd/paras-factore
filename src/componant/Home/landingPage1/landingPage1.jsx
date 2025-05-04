import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeImg from '../../../assets/aboutimg2.jpeg';
import Navbar from "../../common/nav";
import MyConstomer from "../constS/consomersat";
import WhatIDo from "../../Home/what_i_do/what_i_do";
// import CustomerInteractionContainer from "../Outbonding_constomer/Outbonding";
import TestimonialSlider from "../feedback/feedback";
import Footer from '../../common/footer';
import { Link } from "react-router-dom";

const EnhancedLanding = () => {
  // Professional color palette
  const colors = {
    primary: "#4F46E5",  // Indigo
    secondary: "#10B981", // Emerald
    accent: "#EC4899",   // Pink
    dark: "#1F2937",     // Gray-800
    light: "#F9FAFB"     // Gray-50
  };

  const roles = ["Paras", "An LGBTQI Expert", "A Consultant", "A Mentor"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { 
        duration: 0.3 
      } 
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.03,
      boxShadow: `0 4px 20px rgba(79, 70, 229, 0.3)`,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left" 
            variants={fadeUp}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest font-medium mb-3"
              style={{ color: colors.primary }}
              variants={fadeUp}
            >
              WELCOME TO MY WORLD
            </motion.p>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={fadeUp}
              style={{ color: colors.dark }}
            >
              Hi, I'm{" "}
              <span className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative z-10"
                    style={{ 
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl"
              variants={fadeUp}
            >
              I help individuals embrace their authentic selves through personalized guidance, 
              community building, and inclusive strategies. Together, we'll transform challenges 
              into opportunities for growth and empowerment.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
              variants={fadeUp}
            >
              <Link to="/contact">
              <motion.button
                className="px-8 py-3 text-white rounded-lg font-medium"
                style={{ backgroundColor: colors.primary }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                
                Book a Consultation
              </motion.button>
              </Link>
              
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            variants={scaleIn}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={homeImg}
                alt="Professional Portrait"
                className="w-full h-auto max-w-md object-cover rounded-1xl"
                style={{ 
                 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Other Sections */}
    
      <WhatIDo/>
      <MyConstomer/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  );
};

export default EnhancedLanding;