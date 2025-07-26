import React from 'react'

//import { useState } from 'react'
import  bulb from "../assets/images/bulb.png"
import Logo from "../assets/images/Logo-3-IEEE[1].jpg"


/* 
<div className='bg-[var(--color-light-blue)]'>
<img src={logo}></img>
  <img src={bulb}  width={"20%"}/>
</div> */
function Home() {

  return (
<>

 <div className="relative min-h-screen bg-gradient-to-br from-[#003f6b] via-[#0F4C81] to-[#1f5f92] text-white overflow-hidden flex items-center justify-center px-4">
      {/* Animated floating glow */}
      <div className="absolute w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl animate-pulse top-1/4 left-1/4">
      
      </div>

  <img src={bulb} width={"10%"}></img>
      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        <img src={Logo} alt="IEEE ASU Logo" className="mx-auto w-48 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to <span className="text-[#00bfff]">IEEE ASU Student Branch</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Innovating the future through engineering, technology, and leadership.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#00bfff] text-white font-semibold rounded-lg hover:bg-[#00a8d6] transition duration-300">
          Join Us
        </button>
      </div>
    </div>

</>
  )
}

export default Home