import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" className="mt-10 px-6">
          <div className="space-y-10 ">
            <div className="flex flex-col items-center w-full md:w-xl lg:w-2xl mx-auto">
              <h3 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">Get In Touch</h3>
              <p className="text-gray-500 text-center text-sm sm:text-lg ">
                I’m a passionate fresher, eager to learn and explore new
                opportunities. If you have any questions, collaboration ideas,
                or potential opportunities, feel free to reach out I’d love to
                connect and respond as soon as I can!
              </p>
            </div>

            <div className="flex justify-center">
              <a href={`mailto:${import.meta.env.VITE_email}`} className="text-white border border-sky-400 rounded-md px-5 py-3 cursor-pointer">Say Hello</a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
