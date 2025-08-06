import React from 'react'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
