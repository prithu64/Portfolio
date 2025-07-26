import { FaGithub } from "react-icons/fa6";
function ProjectCard({projectName,description,link,github,tech}) {
  return (
    <div className='w-[300px] border h-[250px] dark:border-white/30 dark:text-white p-3  flex flex-col backdrop-blur-lg dark:bg-white/5  rounded-sm'>
                <h1 className='font-bold text-xs font-press mb-2'>{projectName}</h1>
                 
                <p className='text-sm mb-4 h-[100px] dark:text-white/60'>{description}</p>
                <div className="mb-5">
                  {
                    tech.map((techs,index)=>(
                        <button className="border dark:border-white/30 border-black/60 p-1 text-xs ml-2 rounded-xs" key={index}>
                            {techs}
                        </button>
                    ))
                  }
                </div>
                <div className='flex justify-between items-center text-blue-700  gap-x-4'>
                    <a href={link} target="_blank">
                       <button className='underline cursor-pointer dark:text-white/70 dark:hover:text-white'>Live</button>
                    </a>
                    <a href={github} target="_blank">
                        <button className='cursor-pointer dark:text-white/70 dark:hover:text-white'><FaGithub size={25}/></button>
                    </a>       
                </div>
    </div>
  )
}

export default ProjectCard