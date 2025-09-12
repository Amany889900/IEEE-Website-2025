import React from 'react'
import Logo from "./../../assets/images/Logo.png"

function About() {
  return (
    <>
    <div className="bg-cover bg-top-right md:bg-center bg-no-repeat h-auto md:h-screen overflow-hidden" style={{ backgroundImage: `url(${Logo})`, backgroundSize: "40% 50%" }}>
         <div
  className="w-[80%] mx-auto flex flex-col md:flex-row justify-between mt-20 md:mt-0"
>
  {/* Vision */}
  <div className="w-full md:w-[30%] mt-10">
    <h2 className="text-white text-2xl md:text-3xl text-center font-medium">Our vision</h2>
    <p className="text-white mt-24 md:mt-40 text-base md:text-[24px] leading-relaxed md:leading-[34px] text-center">
      Empowering undergraduates to integrate theory and application for a successful career future.
    </p>
    <p className="text-white mt-6 md:mt-10 text-base md:text-[24px] leading-relaxed md:leading-[34px] text-center">
      Creating an environment that encourages and enables students to actively apply their learnings discovering new horizons.
    </p>
  </div>

  {/* Mission */}
  <div className="w-full md:w-[30%] mt-10">
    <h2 className="text-white text-2xl md:text-3xl text-center font-medium">Our mission</h2>
    <p className="text-white mt-6 md:mt-60 text-base md:text-[24px] leading-relaxed md:leading-[34px] text-center">
      Bridging the gap between theory and application for undergraduate engineers.
    </p>
  </div>
</div>
    </div>

    </>
  )
}

export default About