import React from 'react'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <div>
      <h1 className='text-8xl text-indigo-50 flex-center h-[100vh]'>Learn GSAP very Easy</h1>
    </div>
  )
}

export default App
