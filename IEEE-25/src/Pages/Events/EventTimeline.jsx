import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import workshop_img_1 from "../../assets/images/workshops/1.png";
import workshop_img_2 from "../../assets/images/workshops/2.jpg";
import workshop_img_3 from "../../assets/images/workshops/3.jpg";


const EventTimeline = () => {




  return (
    <div className="mt-30 p-8 container">
      <h2 className="text-4xl font-bold text-center text-white mb-12 garamond">
        See the events that electrified our members
      </h2>

      {/* Parent wrapper (pinned until right finishes) */}
      <div
        className="flex flex-col md:flex-row gap-4 mt-30 relative"
      >
        {/* Left fixed panel */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 p-4">
            <p className="text-3xl leading-relaxed">
              <b>
                <i>In 2023</i>
              </b>
              , our IEEE Student Branch powered up innovation through a series
              of exciting hands-on workshops. From <i>Embedded Systems</i> —
              covering real-time OS, bootloaders, and industry practices — to{" "}
              <i>Digital Design with Verilog HDL</i> and{" "}
              <i>Analog Electronics</i>, students explored the core of modern
              technology while building real-world skills.
            </p>
            <p className="text-3xl leading-relaxed mt-10">
              Whether diving into FPGA design, mastering circuit fundamentals,
              or exploring amplifier topologies, our workshops brought theory to
              life and turned curiosity into capability. It was a year of
              growth, innovation, and creativity—shaping future engineers, one
              workshop at a time.
            </p>
          </div>
        </div>

        {/* Right scrollable panel */}
        <div  className="p-4 w-full md:w-1/2 overflow-hidden">
          <div className="flex flex-col gap-6">
            <img src={workshop_img_1} alt="Workshop 1" className="w-full h-auto" />
            <img src={workshop_img_2} alt="Workshop 2" className="w-full h-auto" />
            <img src={workshop_img_3} alt="Workshop 3" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
