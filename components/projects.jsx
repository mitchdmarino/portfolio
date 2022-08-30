import Image from 'next/image'
import { projects } from '../utils/projects'

export default function Projects() {


    const projCards = projects.map(project => {
        return (
            <div key={project.name}className="max-w-[400px] p-4 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-blue-300 m-10 transition ease-in-out delay-100 duration-300 hover:bg-blue-200 hover:text-black">
                
                <div className="px-6 py-4">
                    
                    <div className="font-bold text-5xl mb-2  ">{project.name}</div>
                    
                    <p className=" text-2xl ">
                    {project.description}
                    </p>
                    <div className='flex justify-center my-5 align-center rounded-xl'>
                    <Image 
                        className='rounded-xl'
                        src={project.image}
                        alt={`home page of ${project.name} `}
                        height={225}
                        width={350}
                    />
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-center">
                    
                    {project.tools.map((tool,i) => {
                        return (
                            <div key={`project${project.name}tool-${i}`} className='mb-3 mx-auto flex relative w-[40px] sm:w-[75px] md:w-[90px] lg:w-[110px] xl:w-[150px]'>
                                    {tool}
                            </div>
                        )
                    })}
                </div>
                   <div className="flex justify-center pt-10">
                   <a className="py-2 block mx-4  text-xl text-decoration-line: underline" href={`projects/${project.name.toLowerCase()}`}>Learn More</a>                    {/* <a className="py-2 block mx-4 text-[#95190C] text-xl text-decoration-line: underline" href={`projects/${project.name.toLowerCase()}`}>Case Study</a> */}
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div  id="projects" className=" py-10 text-[#4D243D]">
            <h1 className="text-6xl px-20">MY PROJECTS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-20 xl:px-40 mx-auto justify-center">
                {projCards}
            </div>
        </div>
    )
}