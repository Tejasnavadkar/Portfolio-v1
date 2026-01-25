import ProjectCard from './ProjectCard'
import type { projectType } from '../../Data'

interface projects {
    projects:projectType[]
}

const ProjectSection = ({projects}:projects) => {
  return (
    <div>
      <section id="projects" className="mt-10 px-6">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <h3 className="text-white text-2xl font-bold">Projects</h3>
              <div className="w-[25%] border border-gray-500 "></div>
            </div>

            {/* project grid */}
            <div className="text-white flex flex-wrap justify-center items-center gap-8 ">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default ProjectSection
