import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Card(data) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/details/${data.id}`);
  };

  return (
    <motion.div
      className="relative border-2 border-[#215685]/60 rounded-3xl overflow-hidden  transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Workshop Image */}
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-bold text-center mt-4 px-4 uppercase tracking-wide">
        {data.name}
      </h3>

      {/* Details Button */}
      <div className="flex justify-center mt-6 mb-6">
        <button
          onClick={handleDetailsClick}
          className="px-10 py-3 bg-[#FFC425] text-[#00396B] font-bold rounded-full border-2 border-transparent hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
