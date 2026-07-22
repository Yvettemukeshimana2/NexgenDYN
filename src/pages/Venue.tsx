 import React from "react";
import { Link } from "react-router-dom";
// import WhatsAppChatButton from "../Component/Whatsapchart";
import im1 from "../assets/images.jpg";

const services = [
  { title: "Renewable Energy", desc: "Solar PV design, BESS, and hybrid energy systems .", link: "/services/3" },
  { title: "Electrical Engineering", desc: "Wiring, power distribution, and backup power solutions .", link: "/services/5" },
  { title: "Smart Security", desc: "CCTV, access control, and integrated alarm systems .", link: "/services/1" },
  { title: "Plumbing & Water", desc: "Water supply, pumping, and heating management systems .", link: "/services/4" },
  { title: "HVAC & Refrigeration", desc: "Climate control, ventilation, and cold room installations .", link: "/services/2" },
  { title: "Mechanical Fabrication", desc: "Structural steel, welding, and industrial platform fabrication .", link: "/services/6" },
  { title: "Fire Protection", desc: "Certified fire alarms, hydrant, and suppression systems .", link: "/services/11" },
  { title: "Industrial Maintenance", desc: "Preventive maintenance for equipment and plant support .", link: "/services/12" },
  { title: "Generator Solutions", desc: "Installation, ATS integration, and fueling system servicing .", link: "/services/9" },
  { title: "Engineering Consultancy", desc: "Design, project supervision, and technical reporting .", link: "/services/10" },
  { title: "Digital Solutions", desc: "Fleet management, tracking, and custom software development .", link: "/services/7" },
  { title: "Prototype Development", desc: "Product design, proof-of-concept, and testing .", link: "/services/8" },
];

const OurServices: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
       <section className="relative h-96 w-full flex items-center overflow-hidden">
               <div className="absolute inset-0">
                 <img
                   src= "https://img.magnific.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid&w=740&q=80"
                   alt="Nexgen Dyn engineering facility"
                   className="object-cover w-full h-full"
                 />
                 <div
                   className="absolute inset-0"
                   style={{
                     background:
                       "linear-gradient(115deg, rgba(15,27,51,0.92) 30%, rgba(15,27,51,0.55) 65%, rgba(15,27,51,0.3) 100%)",
                   }}
                 />
               </div>
       
               <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
                 
                 {/* <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
                   Engineering the future of Africa.
                 </h1> */}
                 <p className="text-white text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                   Innovative, reliable, and sustainable engineering and technology
                   solutions across industrial, energy, and mobility sectors —
                   tailored to your needs.
                 </p>
       
                 <div className="flex flex-wrap gap-4 mt-9">
                   <Link
                     to="/contactus"
                     className="bg-brand-yellow text-brand-navy font-semibold px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
                   >
                     Get in touch
                   </Link>
                   {/* <Link
                     to="/venue"
                     className="border border-white/40 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-colors"
                   >
                     Our services
                   </Link> */}
                 </div>
                 {/* <p className="text-brand-yellow text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 ml-72">
                   Engineering &middot; Technology &middot; Innovation
                 </p> */}
               </div>
       
               {/* Stats bar */}
               {/* <div className="absolute bottom-0 left-0 w-full bg-brand-navy/80 backdrop-blur-sm border-t border-white/10">
                 <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                    
                 </div>
               </div> */}
             </section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#000080] mb-4">Our Service Portfolio</h2>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto"></div>
        </div>

        {/* <WhatsAppChatButton /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-t-4 border-brand-navy bg-gray-50 p-4 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.desc}</p>
              </div>
              <Link 
                to={service.link} 
                className="inline-block bg-[#000080] text-[#000080] text-center py-2 px-4 hover:bg-yellow-500 hover:text-[#000080] transition-all font-semibold"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;