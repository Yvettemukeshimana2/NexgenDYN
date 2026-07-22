 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import your assets
import im1 from "../assets/Design,manufacture&install robotics in agriculture.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  { id: 1, name: "Agricultural Robotics", price: "Contact for Quote", image: im1, phone: "+250780000000" },
  { id: 2, name: "Heavy Duty Mechanic Kit", price: "$450.00", image: im1, phone: "+250780000000" },
  { id: 3, name: "Smart CCTV System", price: "$299.00", image:"https://t3.ftcdn.net/jpg/00/52/45/32/360_F_52453293_qGCRFdf6nEkCLjBuRIHQIQMOOaYmgNpN.jpg", phone: "+250780000000" },
];

const ImageSlider: React.FC = () => {
  const handleBooking = (phone: string, productName: string) => {
    const message = `Hi! I'm interested in booking: ${productName}`;
    const url = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-extrabold text-gray-900 mt-10 tracking-tight">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">High-quality industrial and agricultural equipment.</p>
        </div>

        {/* Slider Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true, bulletActiveClass: 'bg-blue-600' }}
          navigation={true}
          className="pb-16"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image Wrapper */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-6">{product.price}</p>
                  
                  <button 
                    onClick={() => handleBooking(product.phone, product.name)}
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:text-brand-yellow text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <span>Shop Now</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.888 4.44-9.89 9.893-.001 2.01.601 3.892 1.63 5.498l-1.063 3.883 3.923-1.091z"/></svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;