import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeImg from '../../../assets/landingpageOne.jpg'
import Navbar from "../../common/nav";
import MyConstomer from "../constS/consomersat";

const EnhancedLanding = () => {
  // Dynamic text rotation
  const roles = ["Paras", "An LGBTQI+ Expert", "A Consultant", "A Mentor"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.8
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    }
  };

  const photoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay: 0.4 
      } 
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10
      } 
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(255, 56, 92, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    hover: { y: -2, color: "#ff385c" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
          <motion.div className="w-full md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <motion.p 
              className="text-sm uppercase tracking-widest text-pink-600 font-semibold mb-3"
              variants={itemVariants}
            >
              WELCOME TO MY WORLD
            </motion.p>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="inline-block h-6 w-full absolute bottom-0 left-0 bg-pink-200 opacity-30 transform -rotate-1"></span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 relative z-10"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              I help individuals embrace their authentic selves through personalized guidance, 
              community building, and inclusive strategies. Together, we'll transform challenges 
              into opportunities for growth and empowerment.
            </motion.p>
            
            <motion.div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start" variants={itemVariants}>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Book a Consultation
              </motion.button>
              
              <motion.button
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-pink-500 hover:text-pink-500 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Portfolio
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              {["rgb(59, 89, 152)", "rgb(29, 161, 242)", "rgb(228, 64, 95)", "rgb(0, 119, 181)"].map((color, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            variants={itemVariants}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.div
              className="relative"
              variants={photoVariants}
              whileHover="hover"
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-pink-200 rounded-full z-0"
                animate={{ 
                  scale: isHovering ? [1, 1.2, 1] : 1,
                  transition: { repeat: isHovering ? Infinity : 0, duration: 2 }
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-200 rounded-full z-0"
                animate={{ 
                  scale: isHovering ? [1, 1.1, 1] : 1,
                  transition: { repeat: isHovering ? Infinity : 0, duration: 2.5, delay: 0.2 }
                }}
              />
              
              {/* Main image with border radius and shadow */}
              <motion.div 
                className="relative z-10 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 p-1 rounded-2xl shadow-xl"
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src={homeImg}
                    alt="LGBTQ+ Consultant"
                    className="w-full h-auto max-w-md rounded-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Stats Section */}
      <MyConstomer/>
     
    </div>
  );
};

export default EnhancedLanding;