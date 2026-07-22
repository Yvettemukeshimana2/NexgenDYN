 import React from "react";
import { motion } from "framer-motion";

interface CoreValue {
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description:
      "Pioneering creative, scalable engineering solutions for the African industrial landscape.",
  },
  {
    title: "Excellence",
    description:
      "Maintaining world-class standards in every design, installation, and project delivery.",
  },
  {
    title: "Integrity",
    description:
      "Operating with absolute transparency and professional ethics in all client partnerships.",
  },
  {
    title: "Client focus",
    description:
      "Delivering tailored, high-performance solutions that directly improve operational efficiency.",
  },
  {
    title: "Sustainability",
    description:
      "Empowering economic development through energy-efficient and responsible engineering.",
  },
  {
    title: "Safety first",
    description:
      "Ensuring the highest safety standards and reliability for our team, clients, and infrastructure.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Section intro */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-brand-yellow text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            About us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            Built on purpose, driven by precision
          </h2>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-brand-navy p-10 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Our mission</h3>
            <p className="text-white/80 text-base leading-relaxed">
              To deliver innovative, reliable, and sustainable engineering and
              technology solutions that empower businesses and strengthen
              infrastructure across Rwanda and East Africa.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-brand-navy">Our vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To become a leading African engineering and technology
              enterprise, developing our own proprietary manufacturing
              capabilities and driving industrial progress.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div {...fadeInUp} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our core values
          </h2>
          <div className="w-16 h-[3px] bg-brand-yellow mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-l-2 border-gray-200 pl-6 hover:border-brand-yellow transition-colors"
            >
              <span className="text-xs font-semibold text-gray-400 tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-brand-navy mt-2 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;