 import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We develop creative and scalable engineering solutions that respond to Africa's industrial and technological challenges.",
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "We deliver exceptional quality through precision, technical expertise, and continuous improvement.",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We build trusted relationships through transparency, accountability, and ethical practices.",
  },
  {
    number: "04",
    title: "Client Focus",
    description:
      "We understand our clients' goals and create customized solutions that generate measurable results.",
  },
  {
    number: "05",
    title: "Sustainability",
    description:
      "We promote responsible engineering solutions that support economic growth and environmental responsibility.",
  },
  {
    number: "06",
    title: "Safety First",
    description:
      "We maintain the highest safety standards to protect our employees, clients, and projects.",
  },
];
const achievements = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Projects Completed",
  },
  {
    value: "20+",
    label: "Professional Experts",
  },
  {
    value: "100%",
    label: "Quality Commitment",
  },
];
const animation = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};
const AboutUs: React.FC = () => {
return (
 <div className="overflow-hidden">
<section className="relative bg-brand-navy py-32">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">
 <motion.div initial="hidden"whileInView="visible"viewport={{once:true}}variants={animation}transition={{duration:0.7}} className="max-w-4xl">
<span className="text-brand-yellow uppercase tracking-[5px] text-sm font-semibold"> About Us </span>
 <h1 className="text-white text-5xl md:text-7xl font-bold mt-6 leading-tight"> Building innovative engineering solutions for Africa's future</h1>
 <p className="text-brand-yellow text-lg mt-8 max-w-3xl leading-relaxed">
              We are an engineering and technology company delivering reliable,
              sustainable, and high-performance solutions that help businesses
              grow and strengthen infrastructure across Rwanda and East Africa. </p>


          </motion.div>


        </div>

      </section>



      {/* INTRODUCTION */}

      <section className="py-24 bg-white">

        <div className="container mx-auto px-6 md:px-12 max-w-7xl">


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              variants={animation}
            >

              <p className="text-brand-yellow uppercase font-semibold tracking-widest">
                Who We Are
              </p>


              <h2 className="text-yellow text-4xl md:text-5xl font-bold mt-4">
                A trusted engineering partner focused on innovation
              </h2>


              <p className="text-gray-600 mt-6 leading-relaxed">
                Our mission is to provide advanced engineering and technology
                solutions that improve productivity, efficiency, and
                sustainability for organizations across Africa.
              </p>


              <p className="text-gray-600 mt-5 leading-relaxed">
                Through technical expertise, creativity, and commitment to
                excellence, we transform ideas into practical solutions that
                create long-term value.
              </p>


            </motion.div>




            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              variants={animation}
              className="bg-gray-50 rounded-3xl p-10"
            >

              <h3 className="text-2xl font-bold text-brand-navy mb-8">
                Why Choose Us?
              </h3>


              <div className="space-y-6">


                {
                  [
                    "Experienced engineering professionals",
                    "Modern technology-driven solutions",
                    "Reliable project execution",
                    "Commitment to safety and quality",
                  ].map((item)=>(

                    <div
                      key={item}
                      className="flex gap-4 items-center"
                    >

                      <div className="w-3 h-3 bg-brand-yellow rounded-full"/>

                      <p className="text-gray-700">
                        {item}
                      </p>

                    </div>

                  ))
                }


              </div>


            </motion.div>


          </div>

        </div>

      </section>





      {/* ACHIEVEMENTS */}


      <section className="bg-gray-100 py-20">


        <div className="container mx-auto px-6 md:px-12 max-w-7xl">


          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">


            {
              achievements.map((item)=>(
                
                <motion.div
                  key={item.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true}}
                  variants={animation}
                  className="text-center"
                >

                  <h3 className="text-5xl font-bold text-brand-navy">
                    {item.value}
                  </h3>

                  <p className="text-gray-600 mt-3">
                    {item.label}
                  </p>


                </motion.div>

              ))
            }


          </div>


        </div>


      </section>






      {/* MISSION VISION */}


      <section className="py-24">


        <div className="container mx-auto px-6 md:px-12 max-w-7xl">


          <div className="grid md:grid-cols-2 gap-10">


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              variants={animation}
              className="bg-brand-navy rounded-3xl p-12"
            >

              <h2 className="text-white text-3xl font-bold mb-5">
                Our Mission
              </h2>


              <p className="text-white/70 leading-relaxed">
                To deliver innovative, reliable, and sustainable engineering
                and technology solutions that empower businesses and strengthen
                infrastructure throughout Rwanda and East Africa.
              </p>


            </motion.div>





            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              variants={animation}
              className="border rounded-3xl p-12"
            >

              <h2 className="text-brand-navy text-3xl font-bold mb-5">
                Our Vision
              </h2>


              <p className="text-gray-600 leading-relaxed">
                To become a leading African engineering enterprise recognized
                for innovation, quality, and sustainable industrial development.
              </p>


            </motion.div>


          </div>


        </div>


      </section>






      {/* CORE VALUES */}


      <section className="bg-gray-50 py-24">


        <div className="container mx-auto px-6 md:px-12 max-w-7xl">


          <div className="text-center mb-16">


            <span className="text-brand-yellow uppercase tracking-widest text-sm">
              Our Values
            </span>


            <h2 className="text-brand-navy text-4xl md:text-5xl font-bold mt-4">
              Principles that drive our success
            </h2>


          </div>





          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {
              values.map((value)=>(
                
                <motion.div
                  key={value.title}
                  whileHover={{y:-8}}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
                >

                  <span className="text-brand-yellow text-xl font-bold">
                    {value.number}
                  </span>


                  <h3 className="text-brand-navy text-2xl font-bold mt-5">
                    {value.title}
                  </h3>


                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {value.description}
                  </p>


                </motion.div>


              ))
            }


          </div>


        </div>


      </section>
 
      <section className="bg-brand-navy py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white text-4xl font-bold">
            Let's build innovative solutions together
          </h2>
          <p className="text-white/70 mt-5">
            Partner with us for reliable engineering and technology services.
          </p>
          <button className="mt-8 bg-brand-yellow text-brand-navy px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">   Contact Us</button>
        </div>
      </section>
    </div>
    );};
export default AboutUs;