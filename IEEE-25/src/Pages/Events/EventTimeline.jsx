import React from "react";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import workshop_img_1 from "../../assets/images/workshops/1.png";
import workshop_img_2 from "../../assets/images/workshops/2.jpg";
import workshop_img_3 from "../../assets/images/workshops/2023.jpg";
import workshop_img_4 from "../../assets/images/workshops/2024_2.jpg";
import workshop_img_5 from "../../assets/images/workshops/2024_workshop.jpg";
import workshop_img_6 from "../../assets/images/workshops/kareem_waseem_1.jpg";
import workshop_img_7 from "../../assets/images/workshops/kareem_waseem_2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const commonImageClasses =
  "rounded-2xl shadow-2xl border border-white/30 object-cover hover:scale-105 transition-transform duration-300 w-full h-[250px] sm:h-[300px] lg:h-[280px]";

const Section = ({ year, title, description, icons, images, reverse }) => {
  const isThreeImages = images.length === 3;

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-10 mb-24`}
    >
      {/* Text Section */}
      <motion.div
        className="bg-[#00396B] text-white p-8 rounded-3xl shadow-2xl border border-[#215685]/50 w-full lg:w-1/2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide">
            {year}: {title}
          </h2>
          <div className="flex space-x-2">{icons}</div>
        </div>
        <p className="text-lg lg:text-xl leading-relaxed text-gray-200">
          {description}
        </p>
      </motion.div>

      {/* Images Section */}
      <div
        className={`grid ${
          isThreeImages
            ? "grid-cols-2 gap-4 w-full lg:w-1/2"
            : "grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2"
        }`}
      >
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Workshop ${year} - ${i + 1}`}
            className={`${commonImageClasses} ${
              isThreeImages && i === 2
                ? "col-span-2 w-[80%] mx-auto"
                : "w-full"
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

const EventTimeline = () => {
  return (
    <div className="container mx-auto px-6 py-20 overflow-x-hidden">
      <motion.h2
        className="text-5xl lg:text-6xl font-extrabold text-center text-white mb-20 tracking-wide drop-shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        See the events that{" "}
        <span className="text-[#FFC425]">electrified</span> our members
      </motion.h2>

      {/* 2023 */}
      <Section
        year="2023"
        title="A Year of Breakthroughs"
        description="Our IEEE Student Branch ignited minds and built the future. From Embedded Systems and Digital Design to Analog Electronics, our workshops were launchpads for innovation — where curiosity met hands-on engineering excellence."
        icons={[
          <SparklesIcon
            key="sparkle"
            className="w-10 h-10 text-[#FFC425] animate-pulse"
          />,
          <BoltIcon
            key="bolt"
            className="w-10 h-10 text-[#FFC425] animate-bounce"
          />,
        ]}
        images={[workshop_img_1, workshop_img_2]}
      />

      {/* 2024 */}
      <Section
        year="2024"
        title="A Year of Innovation"
        description="In 2024, our IEEE Student Branch pushed the boundaries of technology with hands-on workshops in Embedded AVR Systems, Analog IC Design, and Digital Verification — transforming challenges into opportunities for growth and excellence."
        icons={[
          <RocketLaunchIcon
            key="rocket"
            className="w-10 h-10 text-[#FFC425] animate-pulse"
          />,
          <CubeTransparentIcon
            key="cube"
            className="w-10 h-10 text-[#FFC425] animate-spin"
          />,
        ]}
        images={[workshop_img_4, workshop_img_5]}
        reverse
      />

      {/* 2025 */}
      <Section
        year="2025"
        title="A Year of Champions"
        description="In 2025, we leveled up with workshops in ARM Cortex-M Embedded Systems, Digital Design, and Analog Mastery — empowering students to engineer the future with precision, creativity, and purpose."
        icons={[
          <LightBulbIcon
            key="bulb"
            className="w-10 h-10 text-[#FFC425] animate-pulse"
          />,
          <AcademicCapIcon
            key="cap"
            className="w-10 h-10 text-[#FFC425] animate-bounce"
          />,
        ]}
        images={[workshop_img_6, workshop_img_7]}
      />
    </div>
  );
};

export default EventTimeline;
