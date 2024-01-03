import React from 'react'
//import Link from 'react-scroll'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="w-[1440px] h-[77px] px-20 py-[26px] bg-violet-700 justify-between items-center inline-flex"> 
      <div class="w-[238.89px] h-[25px] relative">
        <div class="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute">
          <div>
             <div className="w-[238.89px] h-[25px] relative">
              
             <div className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute">
             <img className="w-[414px] h-[414px]" src="/assets/logo.png" />
             </div>
             </div>
          
          </div>
        </div>
        <nav class="justify-start items-start gap-7 flex">
         <Link to="services" spy={true} smooth={true} duration={500} class="text-white text-sm font-medium font-['Inter']">SERVICES</Link>
         <Link to="about" spy={true} smooth={true} duration={500} class="text-white text-sm font-medium font-['Inter']">ABOUT US</Link>
         <Link to="contact" spy={true} smooth={true} duration={500} class="text-white text-sm font-medium font-['Inter']">CONTACT US</Link>
         <Link to="careers" spy={true} smooth={true} duration={500} class="text-white text-sm font-medium font-['Inter']">CAREERS</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar