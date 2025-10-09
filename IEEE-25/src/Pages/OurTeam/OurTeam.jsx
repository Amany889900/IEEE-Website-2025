import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon } from '@heroicons/react/24/solid';

// Common animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Placeholder data for team members
const teamMembers = [
  { id: 1, name: "Dr. Ahmed Hassan", role: "Chairperson", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Fatma Ali", role: "Vice-Chairperson", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Mohamed Zaki", role: "Treasurer", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Nouran Gamal", role: "Technical Lead", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Youssef Khaled", role: "HR Manager", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Layla Tarek", role: "Public Relations", image: "https://via.placeholder.com/150" },
];

const OurTeam = () => {
  return (
    <div className="bg-[#00396B] py-20 px-4 md:px-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <span className="text-[#FFC425]">Meet</span> Our Team
          <UsersIcon className="inline-block ml-4 w-12 h-12 text-[#FFC425] align-bottom" />
        </motion.h2>
      </div>

      {/* Team Members Grid */}
      <motion.div
        className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="p-6 bg-[#00396B] rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105 border-2 border-white text-center"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-[#FFC425] shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
              {member.name}
            </h3>
            <p className="text-xl text-[#FFC425] font-semibold">
              {member.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;