export default function Projects() {
    
    const projects = [
        {
            name: 'Stratego',
            description: 'A mock of the classic board game Stratego',
            tools: ['JavaScript', 'HTML5', 'CSS', 'Canvas'],
            image: 'placeholder',
            github: '',
            deployed: ''
        },
        {
            name: 'Simplifry',
            description: 'Recipe App',
            tools: ['placeholder','Express', 'Node'],
            image: 'placeholder',
            github: '',
            deployed: ''
        },
        {
            name: 'Simplifry',
            description: 'Recipe App',
            tools: ['placeholder','Express', 'Node'],
            image: 'placeholder',
            github: '',
            deployed: ''
        }
      
    ]

    const projCards = projects.map(project => {
        return (
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#F3FCF0] m-10 w-[400px]">
                <img className="w-full" src={project.image} alt={project.description}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.name}</div>
                    <p className="text-gray-700 text-base">
                    {project.description}
                    </p>
                    <a href={project.github}>Github</a><br></br>
                    <a href={project.deployed}>Deployed Link</a>
                </div>
                <div className="px-6 pt-4 pb-2">
                    
                    {project.tools.map(tool => {
                        return (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tool}</span>
                        )
                    })}
                </div>
            </div>
        )
    })
    
    return (
        <div className="p-10">
            <h1 className="text-5xl">MY PROJECTS</h1>
            <div className="flex flex-wrap w-4/5 mx-auto justify-center">
                {projCards}
            </div>
        </div>
    )
}