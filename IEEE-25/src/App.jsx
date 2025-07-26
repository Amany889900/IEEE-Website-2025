//import { useState } from 'react'
import './App.css'
import { Button} from "flowbite-react";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <>
    <div className="relative min-h-screen bg-[#2A588C] text-white overflow-hidden">
    <Navbar></Navbar>
<Home/>
</div>
    </>
  )
}

export default App
