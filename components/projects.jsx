export default function Projects() {
    
    const projects = [
        {
            name: 'Stratego',
            description: 'A mock of the classic board game Stratego, built using HTML5/Canvas, CSS, and vanilla JavaScript.',
            tools: ['JavaScript', 'HTML5', 'CSS', 'Canvas'],
            image: 'Stratego.png',
            github: 'https://github.com/mitchdmarino/Stratego-mock',
            deployed: 'https://mitchdmarino.github.io/Stratego-mock/',
        },
        {
            name: 'Simplifry',
            description: 'Cookbook app where users can store recipes and add recipes made available by the community. It harnesses the Edamam API to also display nutritional info.',
            tools: ['Express', 'Node', 'SQL', 'sequelize', 'EJS Layouts'],
            image: 'Simplifry.png',
            github: 'https://github.com/mitchdmarino/Simplifry',
            deployed: 'https://simplifry.herokuapp.com/'
        },
        {
            name: 'CheckMate',
            description: 'Collaborative todo list where users can make a team account, add mulitple profiles, and add and complete tasks in a checklist format.',
            tools: ['Express', 'Node', 'Tailwind', 'React', 'MongoDB', 'Mongoose'],
            image: 'CheckMate.png',
            github: 'https://github.com/mitchdmarino/InCRUDibles-client',
            deployed: 'https://dreamy-puffpuff-ae38ac.netlify.app/'
        },
        {
            name: 'Flex',
            description: 'A Django app that allows users to create, schedule, and complete workouts and track their progress over time.',
            tools: ['Python','Django', 'Postgresql', 'Pytest', 'Bootstrap'],
            image: 'Flex.png',
            github: 'https://github.com/mitchdmarino/Flex',
            deployed: 'na'
        }
      
    ]

    const projCards = projects.map(project => {
        return (
            <div key={project.name}className="max-w-sm p-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-gray-100 m-10 w-full">
                <img className="w-full" src={project.image} alt={project.description}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 ">{project.name}</div>
                    
                    <p className="text-gray-700 text-lg ">
                    {project.description}
                    </p>
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
                            <span key={project.name + tool.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tool}</span>
                        )
                    })}
                </div>
            </div>
        )
    })
    
    return (
        <div className="p-10">
            <h1 className="text-5xl text-center">MY PROJECTS</h1>
            <div className="flex flex-wrap  mx-auto justify-center">
                {projCards}
            </div>
        </div>
    )
}