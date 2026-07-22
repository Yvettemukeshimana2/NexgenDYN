import React from "react";
import { motion } from "framer-motion";
import weddingImage from "../assets/Pictures/Agricultural Heavy Machine.jpg";
import partyImage from "../assets/Pictures/Design,manufacture&install robotics in agriculture.jpg";

const specialtiesData = [
  {
    title: "Engineering & Technology Expertise",
    description:
      "NEXGEN DYN combines engineering expertise with modern technology to deliver high-quality solutions in security, renewable energy, software, infrastructure, and product innovation across Africa.",
    image: weddingImage,
  },
  {
    title: "Innovative & Customer-Focused Solutions",
    description:
      "We deliver innovative, reliable, and sustainable solutions tailored to the unique needs of residential customers, businesses, institutions, and industries.",
    image: partyImage,
  },
  {
    title: "Quality, Safety & Reliability",
    description:
      "Our commitment to quality and safety standards, reliable project delivery, and scalable solutions ensures long-term value for every client we serve.",
    image:
      "https://www.shutterstock.com/image-photo/handshake-sunset-silhouette-park-field-260nw-2445915397.jpg",
  },
];

const Specialties: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto   "
    >
      <h2 className="text-4xl font-bold text-center mt-10 text-brand-navy">
        Why Choose NEXGEN DYN?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="  p-6 rounded-lg ">
            <img
              src={specialty.image}
              alt={specialty.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-brand-navy">
              {specialty.title}
            </h3>
            <p className="text-md text-brand-charcoal">{specialty.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Specialties;
