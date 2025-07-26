import ProjectCard from './ProjectCard'
import { ProjectData } from '../data/ProjectData'


function Projects() {
 console.log(ProjectData)
  return (
<div className='w-full flex flex-col gap-y-4'>
     <div className='mx-auto'>
            <h1 className='font-press'>LATEST PROJECTS</h1>
     </div>
    <div className='py-3 grid grid-cols-1 md:grid-cols-2 mx-auto gap-4'>
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            projectName={project.projectName}
            description={project.description}
            link={project.link}
            github={project.github}
            tech={project.tech}
          />
         ))}
      </div>
    </div>
  )
}

export default Projects