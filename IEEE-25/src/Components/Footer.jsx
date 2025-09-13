import React from 'react'

function Footer() {
  return (
    <>
      <footer className=" text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} IEEE ASUSB. All rights reserved.
      </p>
    </footer>
    </>
  )
}

export default Footer