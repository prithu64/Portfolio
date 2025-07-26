import { FaGithub } from "react-icons/fa6";
function ProjectCard({projectName,description,link,github,tech}) {
  return (
    <div className='w-[300px] border h-[250px]  p-3  flex flex-col  rounded-sm'>
                <h1 className='font-bold text-xs font-press mb-2'>{projectName}</h1>
                 
                <p className='text-sm mb-4 h-[100px] '>{description}</p>
                <div className="mb-5">
                  {
                    tech.map((techs,index)=>(
                        <button className="border border-black/60 p-1 text-xs ml-2 rounded-xs" key={index}>
                            {techs}
                        </button>
                    ))
                  }
                </div>
                <div className='flex justify-between items-center text-blue-700 gap-x-4'>
                    <a href={link}>
                       <button className='underline cursor-pointer'>Live</button>
                    </a>
                    <a href={github}>
                        <button className='cursor-pointer'><FaGithub size={25}/></button>
                    </a>       
                </div>
    </div>
  )
}

export default ProjectCard