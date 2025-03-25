import React from "react";
import { Book, Lightbulb, Globe, HandHelping } from 'lucide-react';
import imagefist from "../../../assets/aboutimg2.jpeg";
import imagesecond from "../../../assets/Aboutimg3.jpeg";
 import three from "../../../assets/Aboutimg1.jpeg";
 import Navbar from "../../common/nav";
// import imagefist from "../assets/first.jpg";
// import imagefist from "../assets/first.jpg";

const MainAbout = () => {
  return (
    <div className="font-['Poppins'] text-[#333] leading-[1.6]">
        <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[#5c6bc0] text-white py-[120px] text-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Wave bottom curve */}
        <div className="absolute bottom-[-50px] left-0 w-full h-[100px] bg-white" 
             style={{
               clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)',
               zIndex: 2
             }}
        ></div>
        
        <div className="relative z-[3] max-w-[800px] mx-auto">
          <h1 className="text-[3.5rem] mb-5 font-bold text-shadow-custom">
          The Paras Factor

          </h1>
          <p className="text-[1.25rem] opacity-90 font-light">
            Anchor | Author | LGBTQIA+ Coach 🏳‍🌈
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-[80px]">
        <div className="container max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[2.2rem] mb-5 font-semibold relative">
               About me 
                <span className="absolute bottom-[-15px] left-0 w-[60px] h-1 bg-[#5c6bc0] rounded-sm"></span>
              </h2>
              <p className="text-[1.05rem] mb-5 text-[#555]">
              From battling societal norms to becoming India’s First Transman Emcee, my journey has been about breaking stereotypes and inspiring change. Today, I use my voice to empower others, whether it’s on stage, in corporate boardrooms, or through my writing.
              </p>
              <p className="text-[1.05rem] text-[#555]">
                We strive to cultivate critical thinking, creativity, and ethical leadership in our students, empowering them to make meaningful contributions to society and address the complex challenges of the 21st century.
              </p>
              <div className="text-center mt-6">
            <a
              href="mailto:your-email@example.com"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transform transition duration-300 hover:scale-105 font-medium"
            >
              Contact Me
            </a>
          </div>
            </div>
            
            <div 
  className="h-[400px] rounded-xl overflow-hidden shadow-custom bg-cover bg-center"
  style={{
    backgroundImage: `url(${imagefist})`
  }}
>
</div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#f8f9fa] py-[80px] relative">
        <div 
          className="absolute top-0 left-0 w-full h-[60px] bg-white" 
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-full h-[60px] bg-white" 
          style={{
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
          }}
        ></div>
        
        <div className="container max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-10 items-center" style={{ direction: 'rtl' }}>
            <div className="direction-ltr">
              <h2 className="text-[2.2rem] mb-5 font-semibold relative">
                My Vision
                <span className="absolute bottom-[-15px] left-0 w-[60px] h-1 bg-[#5c6bc0] rounded-sm"></span>
              </h2>
              <p className="text-[1.05rem] mb-5 text-[#555]">
              Certified LGBTQIA+ Coach & Inclusion Advocate
Corporate Trainer for Diversity & Inclusion
Emcee for High-Profile Events & Conferences
Author of Beyond Labels (Upcoming Book)
              </p>
              <p className="text-[1.05rem] text-[#555]">
              "To inspire individuals, transform mindsets, and create workplaces and communities where authenticity is celebrated."
              </p>
            </div>
            <div 
               className="h-[400px] rounded-xl overflow-hidden shadow-custom bg-cover bg-center"
               style={{
                 backgroundImage: `url(${imagesecond})`
               }}
            ></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-[80px]">
        <div className="container max-w-[1200px] mx-auto px-5">
          <h2 className="text-[2.5rem] text-center mb-[50px] font-semibold relative">
            Our Core Values
            <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[80px] h-1 bg-[#5c6bc0] rounded-sm"></span>
          </h2>
          
          <div className="grid grid-cols-4 gap-[30px]">
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
                className="bg-white p-[30px] rounded-xl shadow-custom text-center transition-all duration-300 hover:transform hover:-translate-y-[10px] hover:shadow-hover"
              >
                <div className="w-[70px] h-[70px] bg-[#5c6bc0] text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-icon">
                  {icon}
                </div>
                <h3 className="text-[1.3rem] mb-[15px] text-[#333] font-semibold">{title}</h3>
                <p className="text-[0.95rem] text-[#666]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#f8f9fa] py-[80px]">
        <div className="container max-w-[1200px] mx-auto px-5">
          <h2 className="text-[2.5rem] text-center mb-[50px] font-semibold relative">
          Specializes in
            <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[80px] h-1 bg-[#5c6bc0] rounded-sm"></span>
          </h2>
          
          <div className="grid grid-cols-3 gap-[30px]">
            {[
              {
                name: " LGBTQIA+ Coach 🏳‍🌈",
                title: "Hosting events and engaging audiences with enthusiasm.",
                image:three,
                description: " Paras empowers brands and businesses with inclusive workplace strategies, HR consulting, and LGBTQIA+ marketing. He specializes in brand representation and CSR initiatives, helping organizations foster diversity, equity, and inclusion."
              },
              {
                name: " Author ",
                title: "Writing impactful content on social change and empowerment.",
                image:three,
                description: " Paras an accomplished author, is also a passionate advocate for diversity and inclusion. As a brand ambassador, he collaborates on inclusive initiatives, CSR partnerships, and marketing campaigns, ensuring authentic LGBTQIA+ representation in corporate and social impact projects."
              },
              {
                name: "Anchor",
                title: "Advocating for inclusivity and guiding individuals & organizations.",
                image:three,
                description: "Paras is a versatile host, bringing energy and inclusivity to corporate events, award functions, and conferences. He excels in LGBTQIA+ Pride events, product launches, brand campaigns, and private gatherings, ensuring engaging and memorable experiences for every audience."
              }
            ].map(({ name, title, image, description }, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-custom transition-all duration-300 hover:transform hover:-translate-y-[10px] hover:shadow-hover"
              >
                <div 
                  className="h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="p-5">
                  <h3 className="text-[1.3rem] mb-[5px] text-[#333] font-semibold">{name}</h3>
                  <p className="text-[#5c6bc0] font-medium mb-[10px] text-[0.95rem]">{title}</p>
                  <p className="text-[#666] text-[0.95rem] px-5 pb-5">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Link */}
      <section className="py-[80px]">
        <div className="container max-w-[800px] mx-auto text-center px-5 py-10 bg-[#f8f9fa] rounded-xl shadow-custom">
          <h2 className="text-[2.2rem] mb-5 text-[#333] font-semibold">My History</h2>
          <p className="text-[1.05rem] mb-[30px] text-[#555] max-w-2xl mx-auto">
         
Author | Brand Collaborator | Diversity Ambassador 🏳‍🌈

Paras is an author and trailblazer, has transformed his journey into a powerful force for diversity and inclusion. Rising above societal barriers, he became a voice for the LGBTQIA+ community, advocating for authentic representation in corporate spaces and media. As a brand ambassador, he collaborates on inclusive initiatives, CSR partnerships, and marketing campaigns, ensuring meaningful impact and lasting change.          </p>
          <a 
            href="/history" 
            className="inline-block bg-[#5c6bc0] text-white px-[30px] py-[14px] text-base font-medium rounded-full hover:transform hover:-translate-y-[3px] transition-all duration-300 shadow-btn hover:shadow-btn-hover"
          >
            Explore Our History
          </a>
        </div>
      </section>
    </div>
  );
};

export default MainAbout;
