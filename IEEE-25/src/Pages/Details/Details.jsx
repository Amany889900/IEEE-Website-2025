import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import workshopsData from "../../utils/workshopDetails";
import { useEffect } from "react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Component for a single curriculum point ---
const CurriculumPoint = ({ title, description, Icon }) => (
  <motion.div
    className="flex items-start p-5 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
    variants={itemVariants}
  >
    <div className="flex-shrink-0 mr-4 mt-1">
      {Icon && <Icon className="w-8 h-8 text-[#FFC425] drop-shadow-lg" />}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-1 text-white tracking-wide">
        {title}
      </h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  </motion.div>
);

// --- Main Dynamic Workshop Details Component ---
const Details = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL (e.g., 'analog-electronics')
  const navigate = useNavigate();

  // Find the workshop data that matches the URL ID
  const workshop = workshopsData.find((w) => w.id === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    console.log(`Navigating to Registration Form for ${workshop?.name}...`);
    // NOTE: Replace this console.log with actual navigation or modal open logic.
  };

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-8 bg-[#00396B] rounded-xl text-white">
          <h1 className="text-4xl font-extrabold mb-4">Workshop Not Found</h1>
          <p className="text-xl">
            The details for workshop ID "{id}" could not be loaded.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-[#00396B] transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  // If data is found, render the dynamic content
  return (
    <div className="min-h-screen font-sans p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center px-4 py-2 border-2 border-white/50 text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        {/* Hero Section: DYNAMIC WORKSHOP NAME */}
        <motion.header
          className="relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl mb-12 shadow-2xl bg-[#00396B] border-4 border-[#FFC425]"
          variants={containerVariants}
          initial="hidden"
          //whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background pattern for depth */}
          <div
            className="absolute inset-0 opacity-10 bg-repeat"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <motion.div variants={itemVariants} className="relative z-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FFC425] drop-shadow-lg leading-tight">
              {workshop.name}
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl font-light text-gray-100 italic">
              {workshop.tagline}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center space-x-4 relative z-10"
          >
            <BoltIcon className="w-12 h-12 text-[#FFC425] animate-pulse" />
            <p className="text-xl text-white font-medium tracking-wide">
              {workshop.introText}
            </p>
          </motion.div>
        </motion.header>

        {/* Introduction / Call to Action */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          //whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Key Workshop Focus
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: workshop.description }}
          ></p>
        </motion.div>

        {/* Curriculum Section */}
        <motion.section
          className="p-6 md:p-10 bg-[#00396B] rounded-2xl shadow-xl border-2 border-white/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-extrabold text-[#FFC425] mb-8 text-center tracking-tight"
          >
            Key Learning Modules
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshop.curriculum.map((point, index) => (
              <CurriculumPoint
                key={index}
                title={point.title}
                description={point.description}
                Icon={point.Icon}
              />
            ))}
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            disabled
            onClick={handleRegisterClick}
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-transparent text-xl font-bold rounded-full 
               text-[#00396B] bg-gray-400 cursor-not-allowed opacity-60 
               transition-all duration-300 shadow-xl"
          >
            Register Now for {workshop.name}!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
