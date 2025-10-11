import React from 'react'
import Logo from "./../../assets/images/Logo.png"

function About() {
  return (
    <div className="min-h-[80vh] container flex items-center justify-center py-12 px-4 overflow-x-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch gap-8">

        {/* Vision */}
        <div className="flex-1 min-h-[360px] backdrop-blur-md  p-6 md:p-8 rounded-3xl shadow-2xl border border-[#215685]/30 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold uppercase mb-4 tracking-wide drop-shadow-lg">
              Our Vision
            </h2>
            <p className="text-gray-200 text-lg  leading-relaxed">
              To inspire and empower students to combine knowledge with innovation — creating future engineers who drive meaningful technological and social impact.
            </p>
          </div>
          {/* optional spacer/footer in the card to keep visual balance */}
          <div className="mt-4 md:mt-6" />
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center">
            {/* glow (kept inside center column and sized responsively) */}
            <div className="absolute -z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full  filter blur-3xl" />

            {/* logo box (responsive widths, avoids fixed 380px causing overflow) */}
            <div className="w-40 sm:w-52 md:w-64 lg:w-72">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="flex-1 min-h-[360px] backdrop-blur-md  p-6 md:p-8 rounded-3xl shadow-2xl border border-[#215685]/30 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold uppercase mb-4 tracking-wide drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-gray-200 text-lg  leading-relaxed">
              To bridge the gap between academic learning and real-world application by providing hands-on projects, workshops, and mentorship that build practical skills and confidence.
            </p>
          </div>
          <div className="mt-4 md:mt-6" />
        </div>

      </div>
    </div>
  )
}

export default About
