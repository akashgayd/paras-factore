// import React, { useState } from 'react';
// import MyImg from '../../../assets/paras_logo.jpg'

// const CustomerCard = ({ title, period, subtitle, location, description, imgSrc, accentColor }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div 
//       className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
//         isHovered ? 'transform -translate-y-2 shadow-xl' : ''
//       }`}
//       style={{
//         background: isHovered ? accentColor : 'white',
//         boxShadow: isHovered 
//           ? `0 20px 25px -5px rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.3)` 
//           : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex flex-col md:flex-row h-full">
//         {/* Image Half with overlay on hover */}
//         <div className="w-full md:w-1/2 h-56 md:h-auto relative overflow-hidden">
//           <div 
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
//             style={{
//               backgroundImage: `url(${imgSrc || "/api/placeholder/400/320"})`,
//               transform: isHovered ? 'scale(1.1)' : 'scale(1)'
//             }}
//           />
//           <div 
//             className="absolute inset-0 transition-opacity duration-300"
//             style={{
//               background: `linear-gradient(45deg, ${accentColor}99, transparent)`,
//               opacity: isHovered ? 0.7 : 0
//             }}
//           />
//         </div>
        
//         {/* Content Half */}
//         <div className="w-full md:w-1/2 p-6 flex flex-col justify-between h-full">
//           <div>
//             <div className="flex justify-between items-start">
//               <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
//                 isHovered ? 'text-white' : 'text-gray-800'
//               }`}>{title}</h3>
//               <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-colors duration-300 ${
//                 isHovered ? 'bg-white text-gray-800' : `bg-gray-100 text-gray-600`
//               }`}>{period}</span>
//             </div>
            
//             <div className="flex justify-between items-center mt-2 mb-4">
//               <p className={`text-lg font-medium transition-colors duration-300 ${
//                 isHovered ? 'text-white' : 'text-gray-600'
//               }`}>{subtitle}</p>
//               <span className={`text-sm px-2 py-1 rounded-md transition-colors duration-300 ${
//                 isHovered ? 'bg-white bg-opacity-30 text-white' : `bg-gray-100 text-gray-600`
//               }`}>{location}</span>
//             </div>
            
//             <div className={`mt-4 transition-colors duration-300 ${
//               isHovered ? 'text-white' : 'text-gray-600'
//             }`}>
//               <p>{description}</p>
//             </div>
//           </div>
          
//           <div className={`mt-4 flex justify-end transition-opacity duration-300 ${
//             isHovered ? 'opacity-100' : 'opacity-0'
//           }`}>
//             <button className="bg-white text-gray-800 font-semibold rounded-lg px-4 py-2 hover:bg-opacity-90 transition-all">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CustomerInteractionShowcase = () => {
//   const cardData = [
//     {
//       title: "Customer Success Stories",
//       period: "2020 - 2022",
//       subtitle: "Transformative Experiences",
//       location: "Global",
//       description: "Showcasing how our solutions have transformed customer businesses, driving growth and innovation across industries.",
//       imgSrc: {MyImg},
//       accentColor: "#4f46e5" // Indigo
//     },
//     {
//       title: "Personalized Support",
//       period: "2019 - 2022",
//       subtitle: "Tailored Solutions",
//       location: "24/7 Service",
//       description: "Delivering personalized customer care with dedicated support teams that understand your unique business challenges.",
//       imgSrc: {MyImg},
//       accentColor: "#0891b2" // Cyan
//     },
//     {
//       title: "Customer Engagement",
//       period: "2018 - 2022",
//       subtitle: "Building Relationships",
//       location: "Multi-channel",
//       description: "Creating meaningful connections through thoughtful interactions across digital and physical touchpoints.",
//       imgSrc: {MyImg},
//       accentColor: "#7c3aed" // Violet
//     },
//     {
//       title: "Experience Innovation",
//       period: "2017 - 2022",
//       subtitle: "Next-Gen Solutions",
//       location: "Digital First",
//       description: "Pioneering new approaches to customer experience that leverage cutting-edge technology and human insight.",
//       imgSrc:  {MyImg},
//       accentColor: "#0d9488" // Teal
//     },
//     {
//       title: "Customer Advocacy",
//       period: "2016 - 2022",
//       subtitle: "Voice of Customer",
//       location: "Community-Led",
//       description: "Amplifying customer voices and building passionate communities that drive product development and innovation.",
//       imgSrc: {MyImg},
//       accentColor: "#c026d3" // Fuchsia
//     },
//     {
//       title: "Seamless Onboarding",
//       period: "2015 - 2022",
//       subtitle: "Smooth Transitions",
//       location: "Guided Journey",
//       description: "Creating intuitive onboarding experiences that help new customers realize value quickly and confidently.",
//       imgSrc: {MyImg},
//       accentColor: "#ea580c" // Orange
//     }
//   ];

//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Customer Interactions</h2>
//           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
//             Discover how we create meaningful connections with our customers at every touchpoint.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {cardData.map((card, index) => (
//             <CustomerCard 
//               key={index}
//               title={card.title}
//               period={card.period}
//               subtitle={card.subtitle}
//               location={card.location}
//               description={card.description}
//               imgSrc={MyImg}
//               accentColor={card.accentColor}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerInteractionShowcase;