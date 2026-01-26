import ProjectCard from './ProjectCard'
import type { projectType } from '../../Data'
import TitleHead from '../Common/TitleHead'

interface projects {
    projects:projectType[]
}

const ProjectSection = ({projects}:projects) => {
  return (
    <div>
      <section id="projects" className="mt-10 px-6">
          <div className="space-y-10">
           <TitleHead title='Projects' />

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
