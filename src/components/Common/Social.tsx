import React from 'react'
import type { socialType } from '../../Data'

export interface socialsType {
    socials:socialType[]
}

const Social = ({socials}:socialsType) => {
  return (
     <div className=" hidden md:flex absolute left-5 bottom-0 w-10 h-fit  flex-col items-center gap-4 py-2 z-20">
            <div className="text-sky-400 text-2xl font-bold flex flex-col gap-6 ">
                {
                    socials.map((item,idx)=>(<a className='cursor-pointer' key={idx} href={`${item.link}`} target='_blank'><item.icon size={20} /></a>))
                }
            </div>
            <div className="h-36 border border-gray-500 "></div>
        </div>
  )
}

export default Social
