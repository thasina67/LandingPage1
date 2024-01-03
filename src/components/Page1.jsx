import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Page1 = () => {
  return (
  
    <div>
        <img  src="/assets/img1.png" alt="" class="w-[1440px] h-[763px]"/>
        
         <div className="w-[630px] h-[306px] px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-[556px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">We crush your competitors, goals, and sales records - without the B.S.</div>
          <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
            <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">Get free consultation</div>
          </div>
         </div>
        
         <div className="w-[1064px] h-[414px] justify-start items-center gap-[108px] inline-flex">
            <img className="w-[414px] h-[414px]" src="/assets/img2.png" />
             <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">Web & Mobile App Development</div>
              </div>
              <div className="self-stretch text-black text-base font-normal font-['Inter']">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</div>
              <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">LEARN MORE</div>
              </div>
             </div>
        </div>

        <div className="w-[1064px] h-[416px] justify-start items-center gap-[108px] inline-flex">
           <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex">
             <div className="flex-col justify-start items-start gap-3 flex">
               <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">Digital Strategy Consulting</div>
             </div>
             <div className="self-stretch text-black text-base font-normal font-['Inter']">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</div>
             <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
               <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">LEARN MORE</div>
             </div>
           </div>
           <img className="w-[414px] h-[416px]" src="/assets/img3.png" />
       </div>
   </div>
  
  )
}

export default Page1