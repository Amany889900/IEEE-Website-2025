import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon } from '@heroicons/react/24/solid';
import Youssef_kareem from "../../assets/images/team/Youssef_Kareem.jpg"
import Seif_Foaud from "../../assets/images/team/Seif_Fouad.jpg"
import Abdelrahman_Youssef  from "../../assets/images/team/Abdelrahman_Youssef.JPG"
import Salma_Diab from "../../assets/images/team/Salma_Diab.jpg"
import Shehab_Mahmoud from "../../assets/images/team/Shehab_Mahmoud.png"
import Karim_Khaled from "../../assets/images/team/Karim_Khaled.jpg"
import Rewan_Mohamed from "../../assets/images/team/Rewan_Mohamed.jpg"
import Habiba_Mostafa from "../../assets/images/team/Habiba_Mostafa.jpeg"
import Amany_Ehab from "../../assets/images/team/Amany_Ehab.jpg"
import Kareem_Amr from "../../assets/images/team/Kareem_Amr.jpg"
import Passant_Amr from "../../assets/images/team/Passant_Amr.jpg"




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


const teamMembers = [
  { id: 1, name: "Kareem Amr", role: "Chairman", image: Kareem_Amr },
  { id: 2, name: "Youssef Kareem", role: "Vice-Chairman", image: Youssef_kareem },
  { id: 3, name: "Passant Amr", role: "Treasurer", image: Passant_Amr },
  { id: 4, name: "Seif Fouad", role: "Secretary", image: Seif_Foaud },
  { id: 5, name: "Abdelrahman Youssef", role: "Public Relations Head", image: Abdelrahman_Youssef },
  { id: 6, name: "Salma Diab", role: "Public Relations Vice Head", image: Salma_Diab },
  { id: 7, name: "Shehab Mahmoud", role: "Media Head", image: Shehab_Mahmoud },
  { id: 8, name: "Karim Khaled", role: "Marketing Head", image: Karim_Khaled },
  { id: 9, name: "Rewan Mohamed", role: "Fundraising Head", image: Rewan_Mohamed },
  { id: 10, name: "Habiba Mostafa", role: "IT Head", image: Habiba_Mostafa },
  { id: 11, name: "Amany Ehab", role: "IT Vice Head", image: Amany_Ehab},
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
      {/* <motion.div
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
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
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
      </motion.div> */}
      <motion.div
  className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
  initial="hidden"
  animate="visible"
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
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
        {member.name}
      </h3>
      <p className="text-xl text-[#FFC425] font-semibold">{member.role}</p>
    </motion.div>
  ))}
</motion.div>

    </div>
  );
};

export default OurTeam;