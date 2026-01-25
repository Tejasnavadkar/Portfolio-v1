import React from 'react'

const Hero = () => {
  return (
    <div>
        <section id="home" className=" flex flex-col justify-center mt-15 gap-2 md:gap-1 md:px-6 md:mt-8">
          <h1 className="text-emerald-400 font-mono mb-4">Hi, my name is</h1>

         <div>
           <h2 className=" text-3xl md:text-5xl font-bold text-white">Tejas Navadkar.</h2>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mt-2">
            I build things for the web.
          </h3>
         </div>

          <p className=" mt-3 text-xl md:text-2xl  sm:mt-3 md:mt-6 max-w-xl text-gray-400">
            I’m a full-stack developer specializing in building scalable web
            applications using JavaScript, React and Node.js.
          </p>
          <div className=" mt-4">
            <a href="/Tejas_Navadkar_Resume.pdf"  target="_blank" className="text-sky-500 border border-sky-400 py-1 px-2  md:px-4 md:py-2 rounded-md cursor-pointer mt-2">Get Resume</a>
          </div>
        </section>
    </div>
  )
}

export default Hero
