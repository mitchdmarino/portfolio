import Image from 'next/image'

export default function Projects() {
    
    const projects = [
        {
            name: 'Stratego',
            description: 'Classic board game',
            tools: ['JavaScript', 'HTML5', 'CSS', 'Canvas'],
            image: '/Stratego.png',
            github: 'https://github.com/mitchdmarino/Stratego-mock',
            deployed: 'https://mitchdmarino.github.io/Stratego-mock/',
        },
        {
            name: 'Simplifry',
            description: 'Personal recipe library with nutritional info',
            tools: ['Express', 'Node', 'SQL', 'sequelize', 'EJS Layouts'],
            image: '/Simplifry.png',
            github: 'https://github.com/mitchdmarino/Simplifry',
            deployed: 'https://simplifry.herokuapp.com/'
        },
        {
            name: 'CheckMate',
            description: 'Organizational/Collaborative task list',
            tools: ['Express', 'Node', 'Tailwind', 'React', 'MongoDB', 'Mongoose'],
            image: '/CheckMate.png',
            github: 'https://github.com/mitchdmarino/InCRUDibles-client',
            deployed: 'https://dreamy-puffpuff-ae38ac.netlify.app/'
        },
        {
            name: 'Flex',
            description: 'Workout scheduler',
            tools: ['Python','Django', 'Postgresql', 'Pytest', 'Bootstrap'],
            image: '/Flex.png',
            github: 'https://github.com/mitchdmarino/Flex',
            deployed: 'na'
        }
      
    ]

    const projCards = projects.map(project => {
        return (
            <div key={project.name}className="max-w-[400px] p-4 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-blue-300 m-10 ">
                
                <div className="px-6 py-4">
                    
                    <div className="font-bold text-5xl mb-2  ">{project.name}</div>
                    
                    <p className="text-gray-700 text-lg h-[40px] ">
                    {project.description}
                    </p>
                    <div className='flex justify-center align-center rounded-xl'>
                    <Image 
                        className='rounded-xl'
                        src={project.image}
                        alt={`home page of ${project.name} `}
                        height={225}
                        width={350}
                    />
                </div>
                   <div className="flex justify-center pt-10">
                    <a className=" py-2 mx-4 block text-[#95190C] text-xl text-decoration-line: underline" href={project.github}>Repo</a>
                    <br></br>
                    <a className="py-2 block mx-4 text-[#95190C] text-xl text-decoration-line: underline" href={project.deployed}>Live</a>
                    {/* <a className="py-2 block mx-4 text-[#95190C] text-xl text-decoration-line: underline" href={`projects/${project.name.toLowerCase()}`}>Case Study</a> */}
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    
                    {project.tools.map(tool => {
                        return (
                            <span key={project.name + tool.name} className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tool}</span>
                        )
                    })}
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