//import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Button } from "flowbite-react";

function App() {
  
  return (
    <>
     <Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>
    <Home/>
    </>
  )
}

export default App
