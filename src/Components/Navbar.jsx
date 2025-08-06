import React from 'react'
import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    });
  
    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(2px)',
        duration: 1,
        ease: 'power1.inOut'
      }
    );
  });
  
  return (
    <nav>
      <div className="flex items-center justify-between px-4 py-2">
        <a href="#home" className='flex items-center gap-2'>
          <img src="/src/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="font-bold">Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) =>(
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
