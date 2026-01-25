import React from 'react'
import { FaGithub, FaLink, FaRegFolder } from 'react-icons/fa';

interface ProjectItem {
  name: string;
  github: string;
  live: string;
  description: string;
  techStack: string[];
}

const ProjectCard = ({project}:{project:ProjectItem}) => {
  return (
    <div className=" h-75 w-75 p-4 flex flex-col justify-evenly rounded-md bg-gray-900 z-30">

              <div className="flex justify-between">
                <div><FaRegFolder size={24} className='text-sky-500' /></div>
                <div className="flex gap-2">
                  <a href={`${project?.github}`} target='_blank' className="cursor-pointer"><FaGithub /></a>
                  <a href={`${project?.live}`} target='_blank' className="cursor-pointer"><FaLink /></a>
                </div>
              </div>

               <div>
                <div className=" text-sm sm:text-xl font-semibold">{project.name}.</div>

                <div className=" text-xs sm:text-sm text-gray-500">{project.description}.</div>
               </div>

               <div className="text-xs flex gap-1 text-sky-400 flex-wrap ">
                 {
                    project?.techStack?.map((item,idx)=>(
                        <span key={idx} >{item},</span>
                    ))
                 }
               </div>
            </div>
  )
}

export default ProjectCard
