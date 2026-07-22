 import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhatsAppChatButton from "../Component/Whatsapchart";

// Updated data structure to better reflect your service document
const services = [
  {
    title: "Renewable Energy",
    description: "Comprehensive solar PV design, installation, and battery storage solutions for sustainable power.",
    link: "/services/renewable",
  },
  {
    title: "Electrical Engineering",
    description: "Standards-compliant electrical systems, distribution, and industrial power infrastructure.",
    link: "/services/electrical",
  },
  {
    title: "Industrial Maintenance",
    description: "Preventive and corrective maintenance to maximize equipment reliability and minimize downtime.",
    link: "/services/maintenance",
  },
  {
    title: "Smart Security",
    description: "Integrated CCTV, access control, and biometrics to enhance safety and operational control.",
    link: "/services/security",
  },
  {
    title: "Mechanical Fabrication",
    description: "Expert structural steel welding, machine frames, and customized industrial components.",
    link: "/services/fabrication",
  },
  {
    title: "Digital & Automation",
    description: "Fleet management systems, fuel monitoring, and custom software development solutions.",
    link: "/services/digital",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering multidisciplinary engineering and technology solutions to 
            empower industries across the East African region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-1 bg-teal-600 mb-6"></div>
              <h3 className="font-bold text-2xl text-blue-950 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link to={service.link} className="inline-block font-semibold text-teal-700 hover:text-blue-950 transition">
                Explore Solution →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <WhatsAppChatButton />
          <Link
            to="/venue"
            className="inline-block mt-8 px-8 py-4  text-white font-bold rounded bg-blue-900 transition"
          >
            View All Specialized Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;