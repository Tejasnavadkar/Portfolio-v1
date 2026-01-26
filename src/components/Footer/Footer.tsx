import React from 'react'
import type { socialsType } from '../Common/Social'



const Footer = ({socials}:socialsType) => {
  return (
    <div>
      <section id="footer" className="px-6 space-y-4">
          <div className="text-sky-400 md:hidden text-2xl font-bold flex gap-6 justify-center ">
                {
                    socials?.map((item,idx)=>(<a className='cursor-pointer' key={idx} href={`${item.link}`} target='_blank'><item.icon size={20} /></a>))
                }
            </div>
          <div className="text-white text-xs sm:text-sm text-center">
             Designed & Built by Tejas Navadkar.
          </div>
        </section>
    </div>
  )
}

export default Footer
