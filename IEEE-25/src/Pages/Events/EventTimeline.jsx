import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import workshop_img_1 from "../../assets/images/workshops/1.png";
import workshop_img_2 from "../../assets/images/workshops/2.jpg";
import workshop_img_3 from "../../assets/images/workshops/2023.jpg";
import workshop_img_4 from "../../assets/images/workshops/2024_2.jpg";
import workshop_img_5 from "../../assets/images/workshops/2024_workshop.jpg";
import workshop_img_6 from "../../assets/images/workshops/kareem_waseem_1.jpg";
import workshop_img_7 from "../../assets/images/workshops/kareem_waseem_2.jpg";


const EventTimeline = () => {
  return (
    <div className="mt-30 p-8 container">
      <h2 className="text-4xl font-bold text-center text-white mb-12 garamond">
        See the events that electrified our members
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mt-30 relative">
        {/* Left fixed panel */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 p-4">
            <p className="text-3xl leading-relaxed">
              <b>
                <i>2023 was a year of electrifying ideas! </i>
              </b>
              Our IEEE Student Branch brought tech to life with workshops on
              Embedded Systems, Digital Design, and Analog Electronics. From
              real-time OS and FPGA design to amplifier topologies, students did
              not just learn — they built, experimented, and innovated. We
              turned challenges into skills and curiosity into breakthroughs,
              shaping engineers ready to lead the future. ⚡
            </p>
          </div>
        </div>

        {/* Right scrollable panel */}
        <div className="p-4 w-full md:w-1/2 overflow-hidden">
          <div className="flex flex-col gap-6">
            <img
              src={workshop_img_1}
              alt="Workshop 1"
              className="w-full h-auto"
            />
            <img
              src={workshop_img_2}
              alt="Workshop 2"
              className="w-full h-auto"
            />
            <img
              src={workshop_img_3}
              alt="Workshop 3"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-30 relative">
        {/* Left fixed panel */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 p-4">
            <p className="text-3xl leading-relaxed">
              <b>
                <i>In 2024,</i>
              </b>
              our IEEE Student Branch pushed boundaries with hands-on workshops
              in Embedded AVR Systems, Analog IC Design, and Digital
              Verification. From coding microcontrollers and mastering circuit
              design to ensuring bug-free digital systems, students gained
              real-world skills that turned challenges into opportunities. It
              was a year of innovation, learning, and engineering excellence —
              shaping future leaders in technology, one workshop at a time. 🚀
            </p>
          </div>
        </div>

        {/* Right scrollable panel */}
        <div className="p-4 w-full md:w-1/2 overflow-hidden">
          <div className="flex flex-col gap-6">
            <img
              src={workshop_img_4}
              alt="Workshop 4"
              className="w-full h-auto"
            />
            <img
              src={workshop_img_5}
              alt="Workshop 5"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-30 relative">
        {/* Left fixed panel */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 p-4">
            <p className="text-3xl leading-relaxed">
              <b>
                <i>In 2025,</i>
              </b>
              our IEEE Student Branch leveled up with a dynamic lineup of Summer
              Workshops designed as a deck of skill cards. From the Digital
              Domain—where participants chose their path as Architects,
              Optimizers, or Guardians—to mastering Analog Electronics and its
              signal-shaping power, students unlocked the building blocks of
              cutting-edge technology. The journey did not stop there: with deep
              dives into Embedded Systems, exploring ARM Cortex-M architectures,
              interrupts, and communication protocols, and the Software Testing
              card, arming members with ISTQB foundations and bug-busting
              strategies, our community gained the tools to engineer with
              precision. Add to that inspiring industry talks on digital
              electronics careers, and 2025 became a year of choices,
              challenges, and champions—preparing our members to master the
              future, one skill card at a time. 🎴⚡
            </p>
          </div>
        </div>

        {/* Right scrollable panel */}
        <div className="p-4 w-full md:w-1/2 overflow-hidden">
          <div className="flex flex-col gap-6">
            <img
              src={workshop_img_6}
              alt="Workshop 6"
              className="w-full h-auto"
            />
            <img
              src={workshop_img_7}
              alt="Workshop 7"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
