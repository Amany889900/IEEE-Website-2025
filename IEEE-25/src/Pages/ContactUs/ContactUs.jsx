

import React from 'react'

function ContactUs() {
  return (
    <>
    <div className="flex justify-center items-center mt-20 space-x-10">
        <a target="_blank"  href="https://www.facebook.com/ieeeasueg"><div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center hover:bg-blue-500 hover:text-white transition-all duration-300"><i className="fa-brands fa-facebook-f text-3xl "></i></div></a>
        <a target="_blank"  href="https://www.linkedin.com/company/ieee-asusb/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8fSbGGPcTIGtgj6FtSUtZQ%3D%3D"><div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center hover:bg-blue-500 hover:text-white transition-all duration-300"><i className="fa-brands fa-linkedin-in text-3xl "></i></div></a>
        <a target="_blank"  href="https://www.instagram.com/ieee.asusb?igsh=YzljYTk1ODg3Zg=="><div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center hover:bg-blue-500 hover:text-white transition-all duration-300"><i className="fa-brands fa-instagram text-3xl "></i></div></a>
    </div>
    </>
  )
}

export default ContactUs