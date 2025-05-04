import React from "react";

import { Book, Lightbulb, Globe, HandHelping} from 'lucide-react';
import Navbar from "../../common/nav";
import { Link } from "react-router-dom";
import imagefist from "../../../assets/paras1.jpeg";
import imagesecond from "../../../assets/new4.JPG";
import three from "../../../assets/aboutimg3.jpeg";
import four from "../../../assets/paras2.jpeg";
import five from "../../../assets/new3.JPG";
import Footer from "../../common/footer";
// impoting images for the background and other sections
// import imagefist from "../../../assets/new3.JPG";
const MainAbout = () => {
  // Mock imports for images (replace with your actual imports)
  

  return (
    <div className=" text-[#333] leading-[1.6]">
      <div className="bg-white w-full mt-12">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 md:py-24 lg:py-32 text-center overflow-hidden">
        {/* Background overlay with subtle pattern */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated wave pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
           
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Wave bottom curve */}
        <div 
          className="absolute bottom-0 left-0 w-full h-16 md:h-24"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,.1,0c40.75,5.95,81.94,12.76,122.55,21.31Z' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 2
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-bold leading-tight animate-fadeIn">
            The Paras Factor
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 font-light">
            Anchor | Author | LGBTQIA+ Coach 🏳️‍🌈
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl mb-6 font-semibold relative inline-block">
                About Me
                <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              </h2>
              <p className="text-lg mb-5 text-gray-700">
                From battling societal norms to becoming India's First Transman Emcee, my journey has been about breaking stereotypes and inspiring change. Today, I use my voice to empower others, whether it's on stage, in corporate boardrooms, or through my writing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We strive to cultivate critical thinking, creativity, and ethical leadership in our students, empowering them to make meaningful contributions to society and address the complex challenges of the 21st century.
              </p>
              <div className="mt-8">
                <Link to="/contact"
                  href="mailto:your-email@example.com"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transform transition duration-300 hover:scale-105 font-medium"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
            <div
  className="overflow-hidden shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105"
  style={{
    backgroundImage: `url(${imagefist})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    aspectRatio: '1/1', // Use '1/1' for a square, or adjust as needed
    width: '100%',
    borderRadius: '1rem',
    backgroundColor: '#fff' // Optional: helps with transparent images
  }}
></div>

</div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-12 md:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-white" 
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 40%)'
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" 
          style={{
            clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)'
          }}
        ></div>
        
        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl mb-6 font-semibold relative inline-block">
                My Vision
                <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              </h2>
              <p className="text-lg mb-5 text-gray-700">
                Certified LGBTQIA+ Coach & Inclusion Advocate
                Corporate Trainer for Diversity & Inclusion
                Emcee for High-Profile Events & Conferences
                Author of Beyond Labels (Upcoming Book)
              </p>
              <p className="text-lg text-gray-700 italic">
                "To inspire individuals, transform mindsets, and create workplaces and communities where authenticity is celebrated."
              </p>
            </div>
            
            <div className="order-1 md:order-1">
            <div 
  className="w-full md:w-[90%] h-80 md:h-96 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 bg-no-repeat bg-center mx-auto"
  style={{
    backgroundImage: `url(${imagesecond})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }}
>



</div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-semibold relative inline-block mx-auto">
            Our Core Values
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: <Book size={36} />, 
                title: "Academic Excellence", 
                description: "We are committed to the highest standards of teaching, learning, and scholarship."
              },
              { 
                icon: <Lightbulb size={36} />, 
                title: "Innovation", 
                description: "We embrace creativity, critical thinking, and new approaches to education and research."
              },
              { 
                icon: <Globe size={36} />, 
                title: "Global Perspective", 
                description: "We foster an international outlook and prepare students for success in a diverse global society."
              },
              { 
                icon: <HandHelping size={36} />, 
                title: "Community Engagement", 
                description: "We are dedicated to serving our communities through education, research, and outreach."
              }
            ].map(({ icon, title, description }, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                  {icon}
                </div>
                <h3 className="text-xl md:text-2xl mb-3 text-gray-800 font-semibold">{title}</h3>
                <p className="text-base text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializes in */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-semibold relative inline-block mx-auto">
            Specializes In
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "LGBTQIA+ Coach 🏳️‍🌈",
                title: "Hosting events and engaging audiences with enthusiasm.",
                image: three,
                description: "Paras empowers brands and businesses with inclusive workplace strategies, HR consulting, and LGBTQIA+ marketing. He specializes in brand representation and CSR initiatives, helping organizations foster diversity, equity, and inclusion."
              },
              {
                name: "Author",
                title: "Writing impactful content on social change and empowerment.",
                image: five,
                description: "Paras, an accomplished author, is also a passionate advocate for diversity and inclusion. As a brand ambassador, he collaborates on inclusive initiatives, CSR partnerships, and marketing campaigns, ensuring authentic LGBTQIA+ representation in corporate and social impact projects."
              },
              {
                name: "Host",
                title: "Advocating for inclusivity and guiding individuals & organizations.",
                image: four,
                description: "Paras is a versatile host, bringing energy and inclusivity to corporate events, award functions, and conferences. He excels in LGBTQIA+ Pride events, product launches, brand campaigns, and private gatherings, ensuring engaging and memorable experiences for every audience."
              }
            ].map(({ name, title, image, description }, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div 
                  className="h-48 md:h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl mb-2 text-gray-800 font-semibold">{name}</h3>
                  <p className="text-indigo-600 font-medium mb-4 text-base">{title}</p>
                  <p className="text-gray-600 text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Link */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-4xl mx-auto text-center px-4 sm:px-6 py-12 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-800 font-semibold">My History</h2>
          <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
            Author | Brand Collaborator | Diversity Ambassador 🏳️‍🌈
            <br /><br />
            Paras is an author and trailblazer, has transformed his journey into a powerful force for diversity and inclusion. Rising above societal barriers, he became a voice for the LGBTQIA+ community, advocating for authentic representation in corporate spaces and media. As a brand ambassador, he collaborates on inclusive initiatives, CSR partnerships, and marketing campaigns, ensuring meaningful impact and lasting change.
          </p>
          <a
            href="/services" 
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 text-lg font-medium rounded-full hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore My History
          </a>
        </div>
      </section>

      {/* Footer with social links */}
      <Footer />
    </div>
  );
};

export default MainAbout;