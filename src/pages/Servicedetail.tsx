import React from "react";
import { useParams, Link } from "react-router-dom";

const services = [
  {
    id: "1",
    title: "CCTV Cameras Installation",
    description:
      "At NEXGEN DYN, we provide comprehensive CCTV surveillance solutions for residential, commercial, and industrial clients across Africa. Our team delivers reliable security systems designed to protect people, property, and assets.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-LyjhfUDmD34l79i2p8D9PHFjZLSevzmvw&s",
    details:
      "Our CCTV Installation Services Include:\n Supply and installation of CCTV surveillance systems for homes, offices, factories, and institutions.\n Residential, commercial, and industrial security solutions tailored to site requirements.\n Remote monitoring and access systems for real-time visibility from anywhere.\n Maintenance and support services to keep your security infrastructure running reliably.",
    purpose:
      "Why Choose NEXGEN DYN for CCTV Solutions?\n Experienced engineering and technology professionals with proven security expertise.\n Innovative and customer-focused solutions designed around your specific needs.\n Commitment to quality and safety standards on every installation.\n Reliable project delivery and ongoing technical support.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "2",
    title: "Car Buy & Sell Services",
    description:
      "NEXGEN DYN offers professional vehicle sourcing and transaction support, helping clients buy and sell new and used vehicles with confidence. We simplify the process from inspection to final delivery.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtDsjwnJfT2i0_VbG46bhZsuBmki76bwL2A&s",
    details:
      "Our Car Buy & Sell Services Include:\n Vehicle sourcing and procurement services for individuals and businesses.\n Buying and selling of new and used vehicles with transparent processes.\n Vehicle inspection and valuation services to ensure fair and informed decisions.\n Customer support throughout the entire transaction process.",
    purpose:
      "Why Choose NEXGEN DYN for Vehicle Services?\n Trusted guidance from sourcing through to completion.\n Thorough inspection and valuation for peace of mind.\n Customer-focused support at every stage of the transaction.\n Reliable service backed by our commitment to integrity and excellence.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "3",
    title: "Solar Photovoltaic Installation",
    description:
      "NEXGEN DYN designs and installs solar photovoltaic systems that help homes, businesses, and industries reduce energy costs and embrace sustainable power. We deliver end-to-end solar solutions across Rwanda and Africa.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hefZ6F4ucniuzFdzR6stCV2G-JK-iz1GiQ&s",
    details:
      "Our Solar PV Services Include:\n Design and installation of solar PV systems for residential, commercial, and industrial use.\n Battery storage and backup power systems for uninterrupted energy supply.\n Solar system maintenance and optimization to maximize performance and lifespan.\n Scalable solutions tailored to your energy needs and budget.",
    purpose:
      "Why Choose NEXGEN DYN for Solar Energy?\n Expert engineering combined with modern renewable energy technology.\n Sustainable solutions that support Africa's energy transformation.\n Quality installations with reliable maintenance and support.\n Customized systems designed for efficiency and long-term savings.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "4",
    title: "Plumbing and Water Heater Systems Installation",
    description:
      "NEXGEN DYN provides professional plumbing and water heater installation services for residential and commercial properties. We ensure safe, efficient water supply systems built to last.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShF_3LEreTGvdPZd9buOU_f4blZit4Wu_eKg&s",
    details:
      "Our Plumbing Services Include:\n Plumbing system design and installation for new and existing buildings.\n Installation of hot and cold water supply systems.\n Water heater installation and maintenance for reliable hot water access.\n Residential and commercial plumbing services with quality workmanship.",
    purpose:
      "Why Choose NEXGEN DYN for Plumbing?\n Skilled professionals with experience in residential and commercial projects.\n Quality materials and installations that meet safety standards.\n Reliable maintenance and support when you need it.\n Solutions tailored to your property and usage requirements.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "5",
    title: "Electrical and Elevator Installation",
    description:
      "NEXGEN DYN delivers electrical installation and elevator commissioning services for buildings and industrial facilities. Our team ensures safe, efficient power distribution and reliable vertical transport systems.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovmmaEpPGHnZe65vfYemGwTMwe4pHRUCpmw&s",
    details:
      "Our Electrical & Elevator Services Include:\n Electrical installation works for buildings and industrial facilities.\n Power distribution and control systems designed for safety and efficiency.\n Elevator installation and commissioning support.\n Maintenance and troubleshooting services to minimize downtime.",
    purpose:
      "Why Choose NEXGEN DYN for Electrical & Elevator Work?\n Experienced engineers committed to safety and quality standards.\n End-to-end support from installation through maintenance.\n Reliable project delivery for commercial and industrial clients.\n Scalable solutions tailored to your facility requirements.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "6",
    title: "Fleet Management Software Solutions",
    description:
      "NEXGEN DYN develops and deploys fleet management software that helps transport and logistics companies track vehicles, manage fuel, and improve driver performance with data-driven insights.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK_ZNNhuafGAdAPTIVTCp0uPJ3-AGluhH4w&s",
    details:
      "Our Fleet Management Solutions Include:\n Vehicle tracking and monitoring systems for real-time fleet visibility.\n Fuel consumption management to reduce costs and improve efficiency.\n Driver performance monitoring for safer and more accountable operations.\n Fleet analytics and reporting solutions for smarter business decisions.",
    purpose:
      "Why Choose NEXGEN DYN for Fleet Management?\n Technology solutions built for Africa's transport and logistics sector.\n Customizable platforms tailored to your fleet size and operations.\n Reliable support and system integration expertise.\n Data-driven tools that improve efficiency and reduce operational costs.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "7",
    title: "Software Development Services",
    description:
      "NEXGEN DYN builds custom software solutions that help businesses automate operations, manage workflows, and reach customers through modern web and mobile platforms.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3OM2zBLYvMDZcLD0OmKkX15838sozp2CtQ&s",
    details:
      "Our Software Development Services Include:\n Custom software development for unique business requirements.\n Web and mobile application development for modern digital experiences.\n Business management systems to streamline operations.\n System integration and automation solutions that connect your tools and processes.",
    purpose:
      "Why Choose NEXGEN DYN for Software Development?\n Engineering and technology expertise under one roof.\n Solutions designed around your business goals and workflows.\n Scalable platforms that grow with your organization.\n Ongoing support and integration with existing systems.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
  },
  {
    id: "8",
    title: "Prototype Development",
    description:
      "NEXGEN DYN supports innovators and businesses with product design, engineering, and prototype development services. We help turn ideas into tested, improved products ready for market.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
    details:
      "Our Prototype Development Services Include:\n Product design and engineering support from concept to build.\n Mechanical and industrial prototype development.\n Proof-of-concept development to validate ideas before full production.\n Testing and product improvement services to refine performance and reliability.",
    purpose:
      "Why Choose NEXGEN DYN for Prototyping?\n Hands-on engineering expertise across mechanical and industrial domains.\n Practical, scalable approach to product innovation.\n Commitment to quality testing and continuous improvement.\n Partner-focused collaboration from idea through to working prototype.",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QjNZsZ7Df1WuPGpiR0zwv7jL7OBA0mVbaA&s",
  },
];

const parseContentSection = (content: string) => {
  const lines = content.split("\n").filter((line) => line.trim() !== "");
  const title = lines[0];
  const sections = lines.slice(1).map((line) => {
    const numberedMatch = line.match(/^(\d+)\.\s*(.+):/);
    const subSectionMatch = line.match(/^\s*o\s*(.+)/);

    if (numberedMatch) {
      return {
        number: numberedMatch[1],
        title: numberedMatch[2],
        description: "",
      };
    } else if (subSectionMatch) {
      return subSectionMatch[1];
    }
    return line;
  });
  return { title, sections };
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="text-center py-10 mt-10 pb-11">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <p className="mt-4">
          The service you're looking for doesn't exist. Please{" "}
          <Link to="/venue" className="text-brand-navy underline hover:text-brand-yellow transition-colors">
            go back to the services page
          </Link>
          .
        </p>
      </div>
    );
  }

  const parsedDetails = parseContentSection(service.details);
  const parsedPurpose = parseContentSection(service.purpose);

  return (
    <div className="container mx-auto px-6 mt-10 py-20">
      <h1 className="text-3xl font-bold text-brand-navy mb-6">
        {service.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <p className="text-lg text-brand-charcoal ">{service.description}</p>
          <img
            src={service.img}
            alt={service.title}
            className="rounded-lg object-cover mt-10 w-full h-auto mb-6"
          />
          <img
            src={service.img2}
            alt={service.title}
            className="rounded-lg object-cover mt-10 w-full h-auto mb-6"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-brand-navy">
            {parsedDetails.title}
          </h2>

          <ul className="list-decimal pl-6 space-y-4">
            {parsedDetails.sections.map((section, index) => {
              if (typeof section === "object" && section.number) {
                return (
                  <li key={index} className="text-brand-charcoal">
                    <span className="font-semibold">{section.title}</span>
                    <p className="mt-1 text-gray-600">{section.description}</p>
                  </li>
                );
              } else if (typeof section === "string") {
                return (
                  <li key={index} className="text-brand-charcoal pl-4">
                    {section}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-brand-navy">
          {parsedPurpose.title}
        </h2>

        <ul className="list-decimal pl-6 space-y-3">
          {parsedPurpose.sections.map((section, index) => {
            if (typeof section === "object" && section.number) {
              return (
                <li key={index} className="text-gray-800">
                  <span className="font-semibold">{section.title}</span>
                  <p className="mt-1 text-gray-600">{section.description}</p>
                </li>
              );
            } else if (typeof section === "string") {
              return (
                <li key={index} className="text-brand-charcoal">
                  {section}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <Link to="/venue">
          <button className="btn-outline transition-colors duration-300">
            Back to Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
