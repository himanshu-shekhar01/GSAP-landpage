import React from 'react'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './Components/Navbar';
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <h1 className='flex-center h-[100vh]'>Gsap Course</h1>
    </main>
  )
}

export default App
