import React from 'react'

import styles from "./Home.module.css"; // import styles object

import bulb from "./../../assets/images/bulb.png"

function Home() {

  return (
<>

 
 
  <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center h-screen">
  {/* Text Section */}
  <div className="w-full md:w-[60%] text-center md:text-left mb-10 md:mb-0">
    <p className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-6 drop-shadow-lg">
      electrifying minds
    </p>
    <p className={` text-4xl sm:text-5xl md:text-6xl  font-medium uppercase text-transparent ${styles.neonText}`}>
      illuminating future
    </p>
  </div>

  {/* Bulb Section */}
  <div className="w-2/3 sm:w-1/2 md:w-[40%] lg:w-[30%]">
    <img
      src={bulb}
      alt="glowing bulb"
      className={`w-full mx-auto ${styles.glowingBulb}`}
    />
  </div>
</div>



    
</>
  )
}

export default Home