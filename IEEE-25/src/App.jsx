//import { useState } from 'react'
import './App.css'
import { Button} from "flowbite-react";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About/About';
import Workshops from './Pages/Workshops/Workshops';
import ContactUs from './Pages/ContactUS/ContactUs';
import Footer from './Components/Footer';
import EventTimeline from './Pages/Events/EventTimeline';

function App() {
  
  return (
    <>
    <div className="bg-[#00396B]">
      <Navbar></Navbar>
      <section id="home" name="home"><Home /></section>
      <section id="about" name="about"><About /></section>
      <section id="workshops" name="workshops"><Workshops /></section>
      <section id="events" name="events"><EventTimeline /></section>
      <section id="contact" name="contact"><ContactUs /></section>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
