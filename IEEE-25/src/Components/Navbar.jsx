import React, { useState } from 'react'
import Logo from "../assets/images/Logo.png"
import { Link } from "react-scroll";
function Navbar() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-[#135491] sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-[80%] mx-auto p-2">
        {/* Logo */}
        <a
          href="https://www.linkedin.com/company/ieee-asusb/posts/?feedView=all"
          className="flex items-center"
        >
          <img
            src={Logo}
            className="rounded-full w-[80px] h-[80px]"
            alt="IEEE Logo"
          />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            ASUSB
          </span>
        </a>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav menu */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
            <li>
    <Link to="home" smooth={true} duration={500} className="block py-2 px-3 text-white cursor-pointer">
      Home
    </Link>
  </li>
  <li>
    <Link to="about" smooth={true} duration={500}  offset={-100}  className="block py-2 px-3 text-white cursor-pointer">
      About
    </Link>
  </li>
  <li>
    <Link to="workshops" smooth={true} duration={500}  offset={-150}  className="block py-2 px-3 text-white cursor-pointer">
      Workshops
    </Link>
  </li>
  <li>
    <Link to="events" smooth={true} duration={500}  offset={-100}  className="block py-2 px-3 text-white cursor-pointer">
      Events
    </Link>
  </li>
  <li>
    <Link to="team" smooth={true} duration={500}  offset={-100}  className="block py-2 px-3 text-white cursor-pointer">
      Our team
    </Link>
  </li>
  <li>
    <Link to="contact" smooth={true} duration={500} offset={-100} className="block py-2 px-3 text-white cursor-pointer">
      Contact us
    </Link>
  </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar