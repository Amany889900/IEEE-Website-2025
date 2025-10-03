import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SparklesIcon, BoltIcon, RocketLaunchIcon, CubeTransparentIcon, LightBulbIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

// Image assets
import workshop_img_1 from "../../assets/images/workshops/1.png";
import workshop_img_2 from "../../assets/images/workshops/2.jpg";
import workshop_img_3 from "../../assets/images/workshops/2023.jpg";
import workshop_img_4 from "../../assets/images/workshops/2024_2.jpg";
import workshop_img_5 from "../../assets/images/workshops/2024_workshop.jpg";
import workshop_img_6 from "../../assets/images/workshops/kareem_waseem_1.jpg";
import workshop_img_7 from "../../assets/images/workshops/kareem_waseem_2.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

const textVariants = {
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

const Section2023 = () => (
  <motion.div
    className="bg-[#00396B] text-white p-8 rounded-2xl shadow-2xl transform border-2 border-white sticky top-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white"
        variants={textVariants}
      >
        2023: A Year of Breakthroughs
      </motion.h2>
      <div className="flex space-x-2">
        <motion.div variants={textVariants}>
          <SparklesIcon className="w-10 h-10 text-[#FFC425] animate-pulse" />
        </motion.div>
        <motion.div variants={textVariants}>
          <BoltIcon className="w-10 h-10 text-[#FFC425] animate-bounce" />
        </motion.div>
      </div>
    </div>
    <motion.p className="text-xl md:text-2xl leading-relaxed font-light text-gray-200" variants={textVariants}>
      Our IEEE Student Branch ignited minds and built the future. From **Embedded Systems** and **Digital Design** to **Analog Electronics**, our workshops were more than just lessons—they were launchpads for innovation. We went hands-on with real-time OS, mastered FPGA design, and explored amplifier topologies, turning curiosity into skills and challenges into triumphs. This is where engineers are forged, and the future is built.
    </motion.p>
  </motion.div>
);

const Section2024 = () => (
  <motion.div
    className="bg-[#00396B] text-white p-8 rounded-2xl shadow-2xl transform border-2 border-white sticky top-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white"
        variants={textVariants}
      >
        2024: A Year of Innovation
      </motion.h2>
      <div className="flex space-x-2">
        <motion.div variants={textVariants}>
          <RocketLaunchIcon className="w-10 h-10 text-[#FFC425] animate-pulse" />
        </motion.div>
        <motion.div variants={textVariants}>
          <CubeTransparentIcon className="w-10 h-10 text-[#FFC425] animate-spin" />
        </motion.div>
      </div>
    </div>
    <motion.p className="text-xl md:text-2xl leading-relaxed font-light text-gray-200" variants={textVariants}>
      In 2024, our IEEE Student Branch pushed the boundaries of technology with hands-on workshops in **Embedded AVR Systems**, **Analog IC Design**, and **Digital Verification**. From coding microcontrollers and mastering circuit design to ensuring bug-free digital systems, students gained real-world skills that turned challenges into opportunities. It was a year of innovation, learning, and engineering excellence—shaping future leaders in technology, one workshop at a time.
    </motion.p>
  </motion.div>
);

const Section2025 = () => (
  <motion.div
    className="bg-[#00396B] text-white p-8 rounded-2xl shadow-2xl transform border-2 border-white sticky top-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white"
        variants={textVariants}
      >
        2025: A Year of Champions
      </motion.h2>
      <div className="flex space-x-2">
        <motion.div variants={textVariants}>
          <LightBulbIcon className="w-10 h-10 text-[#FFC425] animate-pulse" />
        </motion.div>
        <motion.div variants={textVariants}>
          <AcademicCapIcon className="w-10 h-10 text-[#FFC425] animate-bounce" />
        </motion.div>
      </div>
    </div>
    <motion.p className="text-xl md:text-2xl leading-relaxed font-light text-gray-200" variants={textVariants}>
      In 2025, our IEEE Student Branch leveled up with a dynamic lineup of Summer Workshops. Students unlocked the building blocks of cutting-edge technology by choosing their path in the Digital Domain, mastering Analog Electronics, and diving deep into Embedded Systems with ARM Cortex-M architectures. With the Software Testing card, our members gained the tools to engineer with precision. Add to that inspiring industry talks on careers in digital electronics, and 2025 became a year of choices, challenges, and champions—preparing our members to master the future, one skill card at a time.
    </motion.p>
  </motion.div>
);

const EventTimeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the component is mounted and the ref is available
    if (containerRef.current) {
      const panels = gsap.utils.toArray(".timeline-section");

      panels.forEach((panel) => {
        const fixedPanel = panel.querySelector(".sticky");
        const scrollableContent = panel.querySelector(".scrollable-content");
        
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          endTrigger: scrollableContent,
          end: "bottom bottom",
          pin: fixedPanel,
          pinSpacing: false
        });
      });
    }
  }, []);

  const commonImageClasses = "w-full h-auto rounded-xl shadow-xl border-2 border-white transform hover:scale-103 transition-transform duration-300";

  return (
    <div ref={containerRef} className="mt-30 p-8 container">
      <h2 className="text-4xl font-bold text-center text-white mb-12 garamond">
        See the events that electrified our members
      </h2>
      
      {/* 2023 Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-30 timeline-section">
        <div className="w-full md:w-1/2">
          <Section2023 />
        </div>
        <div className="p-4 w-full md:w-1/2 overflow-hidden scrollable-content">
          <div className="flex flex-col gap-6">
            <motion.img src={workshop_img_1} alt="Workshop 1" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
            <motion.img src={workshop_img_2} alt="Workshop 2" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
            <motion.img src={workshop_img_3} alt="Workshop 3" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
          </div>
        </div>
      </div>
      
      {/* 2024 Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-30 timeline-section">
        <div className="w-full md:w-1/2">
          <Section2024 />
        </div>
        <div className="p-4 w-full md:w-1/2 overflow-hidden scrollable-content">
          <div className="flex flex-col gap-6">
            <motion.img src={workshop_img_4} alt="Workshop 4" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
            <motion.img src={workshop_img_5} alt="Workshop 5" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
          </div>
        </div>
      </div>

      {/* 2025 Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-30 timeline-section">
        <div className="w-full md:w-1/2">
          <Section2025 />
        </div>
        <div className="p-4 w-full md:w-1/2 overflow-hidden scrollable-content">
          <div className="flex flex-col gap-6">
            <motion.img src={workshop_img_6} alt="Workshop 6" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
            <motion.img src={workshop_img_7} alt="Workshop 7" className={commonImageClasses} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;