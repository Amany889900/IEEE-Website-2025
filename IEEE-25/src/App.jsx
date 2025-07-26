//import { useState } from 'react'
import './App.css'
import { Button} from "flowbite-react";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <>
    <div className="relative min-h-screen bg-gradient-to-br from-[#003f6b] via-[#0F4C81] to-[#1f5f92] text-white overflow-hidden">
    <Navbar></Navbar>
<Home/>
</div>
    </>
  )
}

export default App
