import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaMicrophone, FaUserTie, FaHandsHelping, FaVideo, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../common/nav';
import Footer from '../../common/footer';
const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Corporate Training & DEI Consulting",
      icon: <FaChalkboardTeacher className="text-3xl" />,
      items: [
        "Diversity, Equity & Inclusion (DEI) Training",
        "Inclusive Hiring & Workplace Policy Consultation",
        "Sensitization Training for Blue & White Collar Staff"
      ],
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Public Speaking & Leadership",
      icon: <FaMicrophone className="text-3xl" />,
      items: [
        "Keynote Speaker for corporate summits and TEDx events",
        "Panel Discussions & Fireside Chats on DEI topics"
      ],
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Emcee & Anchoring Services",
      icon: <FaUserTie className="text-3xl" />,
      items: [
        "Professional Emcee for Corporate & Social Events",
        "Anchoring for Live Events & Virtual Sessions"
      ],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Coaching & Mentorship",
      icon: <FaHandsHelping className="text-3xl" />,
      items: [
        "One-on-One Coaching Sessions",
        "Group Coaching & Workshops",
        "LGBTQIA+ Mentorship Programs"
      ],
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Media & Content Creation",
      icon: <FaVideo className="text-3xl" />,
      items: [
        "Podcast & Video Appearances",
        "Content Creation & Storytelling",
        "Collaborations with Brands & Organizations"
      ],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Brand Partnerships & Ambassadorship",
      icon: <FaHandshake className="text-3xl" />,
      items: [
        "Brand Collaborations for DEI Initiatives",
        "DEI Brand Ambassador"
      ],
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <>
        <Navbar />
 
    <div className="min-h-screen mt-12 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Offerings</h2>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services That Create Impact
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive solutions for diversity, inclusion, and personal empowerment
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              <div className={`p-6 ${service.color} flex items-center`}>
                <div className="mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to transform your organization?
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-indigo-100">
                  Let's collaborate to create a more inclusive and empowered environment.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Services;