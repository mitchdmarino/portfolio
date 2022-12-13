import Image from 'next/image'
import { projects } from '../../utils/projects'

export default function Projects() {
    const projCards = projects.map(project => {
        return (
            <div key={project.name}className=" max-w-[400px] p-4 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-gray-100 m-10 transition ease-in-out delay-100 duration-300 hover:bg-gray-200 group hover:text-black">
                
                <div className="px-6  py-4">
                    
                    <div className="font-bold text-3xl sm:text-5xl mb-2"><h1>{project.name}</h1></div>
                    
                    <p className=" text-xl sm:text-2xl h-[75px] ">
                    {project.description}
                    </p>
                    <div className='flex transition ease-in-out delay-100 duration-300 hover:bg-blue-200 justify-center mb-5 align-center hover:scale-110 rounded-xl'>
                    <Image 
                        className='rounded-xl'
                        src={project.image}
                        alt={`home page of ${project.name} `}
                        height={225}
                        width={325}
                    />
                </div>
                <div className=" pt-4 pb-2 flex justify-between">
                    
                    {project.tools.map((tool,i) => {
                        return (
                            <div key={`project${project.name}tool-${i}`} className='mb-3 mx-2 relative w-[40px] sm:w-[75px] md:w-[90px] lg:w-[110px] xl:w-[150px] hover:scale-110'>
                                    {tool}
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center pt-10">
                    <a className=" py-2 mx-4 block  text-xl text-decoration-line: underline text-[#F87666]" href={project.github}>Repo</a>
                    <br></br>
                    {project.deployed? <a className="py-2 block mx-4  text-xl text-decoration-line: underline text-[#F87666]" href={project.deployed}>Live</a>: ''}         
                </div>
                {/* <div className="flex justify-center pt-10 group-hover:animate-bounce">
                   <a className="py-2 block mx-4  text-3xl" href={`projects/${project.name.toLowerCase()}`}>Learn More</a>
                </div> */}
                </div>
            </div>
        )
    })
    
    return (
        <div  id="projects" className=" py-10">
            <h1 className="text-6xl p-14 text-center">PROJECTS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2  px-10 sm:px-20 xl:px-40 mx-auto justify-center">
                {projCards}
            </div>
        </div>
    )
}