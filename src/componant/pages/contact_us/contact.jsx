import React, { useState } from "react";
import Navbar from "../../common/nav";
import { Link } from "react-router-dom";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [contactMethod, setContactMethod] = useState("whatsapp"); // Default to WhatsApp

  const handleSendMessage = () => {
    setSending(true);
    
    if (contactMethod === "whatsapp") {
      const phoneNumber = "+919121665156";
      const text = `Hello, my name is ${name}. ${message}`;
      const encodedText = encodeURIComponent(text);
      
      // Simulate sending delay
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
        setSending(false);
      }, 800);
    } else {
      // Gmail option
      const subject = `Contact Request from ${name}`;
      const body = `Hello,\n\nMy name is ${name}.\nEmail: ${email}\n\n${message}\n\nBest regards,\n${name}`;
      const mailtoLink = `mailto:Thepaarasfactor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Simulate sending delay
      setTimeout(() => {
        window.location.href = mailtoLink;
        setSending(false);
      }, 800);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-auto mt-10 bg-white py-10">
      <div className="w-full max-w-md p-8 rounded-xl shadow-xl bg-white border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-gray-500 mt-2">We're just a message away</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Contact Method
            </label>
            <div className="flex space-x-4 mt-2">
              <div
                onClick={() => setContactMethod("whatsapp")}
                className={`flex-1 p-3 border rounded-lg flex flex-col items-center cursor-pointer transition-all ${
                  contactMethod === "whatsapp" 
                    ? "border-green-500 bg-green-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={contactMethod === "whatsapp" ? "#22c55e" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className={`text-sm mt-2 ${contactMethod === "whatsapp" ? "text-green-600" : "text-gray-500"}`}>WhatsApp</span>
              </div>
              
              <div
                onClick={() => setContactMethod("gmail")}
                className={`flex-1 p-3 border rounded-lg flex flex-col items-center cursor-pointer transition-all ${
                  contactMethod === "gmail" 
                    ? "border-red-500 bg-red-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={contactMethod === "gmail" ? "#ef4444" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className={`text-sm mt-2 ${contactMethod === "gmail" ? "text-red-600" : "text-gray-500"}`}>Gmail</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleSendMessage}
            disabled={sending || !name || !message || !email}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition duration-300 ${
              sending || !name || !message || !email
                ? "bg-gray-400 cursor-not-allowed"
                : contactMethod === "whatsapp"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {sending ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                {contactMethod === "whatsapp" ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Send via WhatsApp
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Send via Gmail
                  </>
                )}
              </>
            )}
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500">We usually respond within 24 hours</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-pink-500 hover:text-pink-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;