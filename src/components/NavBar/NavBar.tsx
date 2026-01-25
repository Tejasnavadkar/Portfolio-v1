import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { RiCloseLargeFill } from 'react-icons/ri'
import { NavItems } from '../../Data'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {
     const [sideBarOpen,setSideBarOpen] = useState(false)

    //  smooth scrolling logic
     const handleScroll = (id: string) => {
  const container = document.querySelector('.scroll-container');
  const element = document.getElementById(id);

  if (container && element) {
    container.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    });
  }
  setSideBarOpen(false)
};

  return (
    <>

    { // black overlay
      sideBarOpen && ( <div className='h-screen md:hidden absolute top-0 left-0 right-0 bottom-0 z-40 bg-black opacity-80' onClick={()=>setSideBarOpen(false)} />)
    }
    
    {/* mobile sidebar */}
    <div className={`md:hidden h-screen absolute z-60 space-y-6 right-0 top-0 bottom-0 bg-gray-900 transition-all ease-in 1s overflow-hidden ${sideBarOpen ? 'w-60 px-7 py-1 ' : 'w-0'}`}>
      <div className='flex justify-end mt-2'>
      <button className=' text-sky-600' onClick={()=>setSideBarOpen(false)} >
        <RiCloseLargeFill size={25} />
      </button>
      </div>
     <div className='flex flex-col gap-4 text-white '>
      {
        NavItems?.map((item,idx)=>(
          <button onClick={()=>{handleScroll(item.link)}} key={idx} className='border py-1 rounded-md hover:text-sky-500'>{item.name}</button>
        ))
      } 
         
     </div>
       <a href='https://github.com/Tejasnavadkar' target='_blank' className="flex w-full justify-center bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 text-sm font-medium items-center space-x-2 cursor-pointer">
            <span>Git Hub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a> 
    </div>
    
    {/* NavBar */}
     <nav className="sticky left-0 right-0 backdrop-blur-sm top-0 z-50 flex justify-between items-center py-5 px-11 md:px-8 md:py-2">
        <button onClick={()=>handleScroll("home")} className="flex  cursor-pointer items-center space-x-3 text-sky-400 border border-sky-400 px-2 py-1 rounded-md">
          TN
        </button>
        
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
            {
              NavItems.map((item,idx)=>(
                <button onClick={()=>handleScroll(item.link)} key={idx} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer">{item.name}</button>
              ))
            }            
          </div>
          
          <a href='https://github.com/Tejasnavadkar' target='_blank' className="hidden md:flex bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 text-sm font-medium items-center space-x-2 cursor-pointer">
            <span>Git Hub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button onClick={()=>setSideBarOpen((prev)=>!prev)} className='md:hidden text-sky-500'><CiMenuFries size={25} /></button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
