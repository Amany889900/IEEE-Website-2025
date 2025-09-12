//import { useState } from 'react'
import './App.css'
import { Button} from "flowbite-react";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About/About';

function App() {
  
  return (
    <>
    <div className="bg-[#00396B]">
      <Navbar></Navbar>
      <Home/>
      <About/>
    </div>
    
    </>
  )
}

export default App
