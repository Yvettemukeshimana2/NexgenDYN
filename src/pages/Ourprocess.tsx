import React from "react";

const OurProcess: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-3 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-brand-navy">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-3 text-white gap-6 ">
        <div className="bg-brand-navy h-72 mt-16 mb-4 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
          <h3 className="text-2xl font-semibold mb-4 text-brand-yellow">
            Expert Professionals
          </h3>
          <p className="text-md text-white/90">
            Experienced engineering and technology professionals delivering
            practical solutions across Africa.
          </p>
        </div>
        <div className=" flex flex-col space-y-3">
          <div className="bg-brand-navy-light p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-brand-yellow">
              Reliable Delivery
            </h3>
            <p className="text-md text-white/90">
              Reliable project delivery and technical support you can count on,
              from planning through completion.
            </p>
          </div>

          <div className="bg-brand-navy-light p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-brand-yellow">
              Tailored Solutions
            </h3>
            <p className="text-md text-white/90">
              Scalable solutions tailored to client requirements — whether
              residential, commercial, or industrial.
            </p>
          </div>
        </div>
        <div className="bg-brand-navy h-72 mt-16 mb-4 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
          <h3 className="text-2xl font-semibold mb-4 text-brand-yellow">
            Innovation Focus
          </h3>
          <p className="text-md text-white/90">
            Innovative and customer-focused solutions that improve efficiency,
            enhance security, and support sustainability.
          </p>
        </div>
      </div>
      <div className="bg-brand-navy p-6 text-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
        <h3 className="text-2xl font-semibold mb-4 text-brand-yellow">
          Quality & Safety Standards
        </h3>
        <p className="text-md text-white/90">
          We are committed to quality and safety standards on every project,
          protecting our clients, their assets, and the communities we serve
          across Africa.
        </p>
      </div>
    </div>
  );
};

export default OurProcess;
