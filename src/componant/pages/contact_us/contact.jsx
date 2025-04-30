import React, { useState, useEffect } from "react";
import { ChevronDown, Send, Phone, Mail, CheckCircle, Loader, Facebook, Twitter, Instagram } from "lucide-react";
import Navbar from "../../common/nav";
import Footer from "../../common/footer";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [contactMethod, setContactMethod] = useState("whatsapp");
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  // Services list based on your provided data
  const services = [
    "DEI Training",
    "Inclusive Hiring Consultation",
    "Sensitization Training",
    "Keynote Speaking",
    "Panel Discussions",
    "Corporate Emcee",
    "Event Anchoring",
    "One-on-One Coaching",
    "Group Workshops",
    "LGBTQIA+ Mentorship",
    "Podcast Appearances",
    "Content Creation",
    "Brand Collaborations"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("services-dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset form status after success
  useEffect(() => {
    if (formStatus === "success") {
      const timer = setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleSendMessage = () => {
    setFormStatus("sending");
    
    // Prepare message with selected service
    const serviceInfo = selectedService ? `I'm interested in: ${selectedService}. ` : "";
    const fullMessage = `${serviceInfo}${message}`;
    
    if (contactMethod === "whatsapp") {
      const phoneNumber = "+919121665156";
      const text = `Hello, my name is ${name}. ${fullMessage}`;
      const encodedText = encodeURIComponent(text);
      
      // Simulate sending delay
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
        setFormStatus("success");
      }, 800);
    } else {
      // Gmail option
      const subject = `Contact Request from ${name} - ${selectedService || "General Inquiry"}`;
  const body = `Hello,\n\nMy name is ${name}.\nEmail: ${email}\n${selectedService ? `\nService: ${selectedService}` : ""}\n\n${fullMessage}\n\nBest regards,\n${name}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=Thepaarasfactor@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(gmailLink, "_blank");
     
      setTimeout(() => {
        setFormStatus("success");
      }, 800);
    }
  }
  

  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-4 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden relative">
        {/* Top decorative bar */}
        <div className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>
        
        <div className="p-4 sm:p-10">
          {/* Header */}
          <div className="text-center max-w-lg mx-auto mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-600">Have a project in mind or interested in our services? We'd love to hear from you.</p>
          </div>
          
          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
              <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => {
                  setFormStatus("idle");
                  setName("");
                  setEmail("");
                  setMessage("");
                  setSelectedService("");
                }}
                className="mt-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                  />
                </div>
                
                {/* Service Dropdown */}
                <div id="services-dropdown" className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <div
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white flex justify-between items-center cursor-pointer shadow-sm"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={selectedService ? "text-gray-900" : "text-gray-500"}>
                      {selectedService || "Select a service"}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`} />
                  </div>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                      <ul className="py-1">
                        {services.map((service, index) => (
                          <li
                            key={index}
                            className={`px-4 py-2.5 cursor-pointer hover:bg-indigo-50 text-gray-700 text-sm ${
                              selectedService === service ? "bg-indigo-50 font-medium text-indigo-700" : ""
                            }`}
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                  />
                </div>
                
                {/* Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you like to be contacted?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setContactMethod("whatsapp")}
                      className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all ${
                        contactMethod === "whatsapp"
                          ? "bg-green-100 text-green-800 font-medium border-2 border-green-400"
                          : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      WhatsApp
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setContactMethod("gmail")}
                      className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all ${
                        contactMethod === "gmail"
                          ? "bg-blue-100 text-blue-800 font-medium border-2 border-blue-400"
                          : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Submit Button - Full Width */}
             {/* Submit Button - Full Width */}
<div className="col-span-1 md:col-span-2">
  <button
    onClick={handleSendMessage}
    disabled={formStatus === "sending" || !name || !email || !message}
    className={`w-full py-4 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 text-base transition duration-200 ${
      formStatus === "sending" || !name || !email || !message
        ? "bg-gray-400 cursor-not-allowed"
        : contactMethod === "whatsapp"
        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md"
        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md"
    }`}
  >
    {formStatus === "sending" ? (
      <>
        <Loader className="animate-spin h-5 w-5" />
        <span>Sending...</span>
      </>
    ) : (
      <>
        <Send className="h-5 w-5" />
        <span>Send Message</span>
      </>
    )}
  </button>
</div>

 </div> )}

{/* Footer with additional contact info */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 sm:mb-0">We typically respond within 24 hours</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactForm;