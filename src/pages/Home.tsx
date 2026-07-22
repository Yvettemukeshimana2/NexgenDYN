 // src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import im1 from "../assets/images.jpg";
import OurServices from "./service";
import AboutUs from "./Aboutus";
import OurProcess from "./Ourprocess";
// import Specialties from "./Speciality";

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "50+", label: "Projects delivered" },
  { value: "6", label: "Countries served" },
  { value: "24/7", label: "Support & maintenance" },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={im1}
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
          
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
            Engineering the future of Africa.
          </h1>
          <p className="text-white text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Innovative, 
            
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              to="/contactus"
              className="bg-brand-yellow text-brand-navy font-semibold px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
            <Link
              to="/venue"
              className="border border-white/40 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Our services
            </Link>
          </div>
          {/* <p className="text-brand-yellow text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 ml-72">
            Engineering &middot; Technology &middot; Innovation
          </p> */}
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 w-full bg-brand-navy/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-white text-2xl md:text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-white text-xs md:text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutUs />
      <OurServices />
      {/* <Specialties /> */}
      <OurProcess />
    </div>
  );
};

export default Home;