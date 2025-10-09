import React from 'react'
import Logo from "./../../assets/images/Logo.png"

function About() {
  return (
    <>
      <div className="min-h-screen container flex items-center justify-center  py-16 px-6">
        <div className="w-full md:w-[85%] flex flex-col md:flex-row items-center justify-between  text-center md:text-left space-y-10 md:space-y-0 md:space-x-20">
          
          {/* Vision */}
          <div className="w-full md:w-1/3 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold uppercase mb-6 tracking-wide drop-shadow-lg">
              Our Vision
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Empowering undergraduates to integrate theory and application for a successful career future by creating an environment that encourages and enables students to actively apply their learnings and discover new horizons.
            </p>
          </div>

          {/* Center Logo */}
   <div className="w-full md:w-1/3 flex justify-center my-10 md:my-0">
  <div className="relative flex items-center justify-center">
    {/* Subtle glow behind the logo */}
    <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px]"></div>

    {/* Main logo container */}
    <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] flex items-center justify-center transition-transform duration-500 hover:scale-105">
      <img
        src={Logo}
        alt="Logo"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>


          {/* Mission */}
          <div className="w-full md:w-1/3 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold uppercase mb-6 tracking-wide drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Bridging the gap between theory and application for undergraduate engineers.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

