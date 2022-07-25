import Image from 'next/image'

export default function Skills() {
    const skills = [
        {
            name: 'JavaScript',
            icon: '/tech_icons/javascript.png'
        },
        {
            name: 'HTML5',
            icon: '/tech_icons/html.png'
        },
        {
            name: 'CSS3',
            icon: '/tech_icons/css.png'
        },
        {
            name: 'React',
            icon: '/tech_icons/react.png'
        },
        {
            name: 'Next.js',
            icon: ''
        },
        {
            name: 'MongoDB',
            icon: '/tech_icons/mongodb.png'
        },
        {
            name: 'PostgreSQL',
            icon: '/tech_icons/postgresql.png'
        },
        {
            name: 'Python',
            icon: '/tech_icons/python.png'
        },
        {
            name: 'Django',
            icon: '/tech_icons/django.png'
        }
    ]
    return (
        <>
        <h2 className='text-5xl text-center py-10'>SKILLS</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full mx-auto">
                {skills.map((skill, index) => {
                    return (
                        <div key={`skill-${index}`}className="flex mx-auto flex-col text-2xl text-[#020122] bg-gray-200 m-4 p-6 w-[150px] rounded-2xl justify-center hover:shadow">
                            {skill.icon ? 
                            
                            <div className='mb-3 mx-auto' style={{width: 50, height: 50, position: 'relative'}}>
                                <Image 
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    layout='fill'
                                    objectFit='contain'
                                    />
                            </div>: '' }
                                    <p className='text-center'>{skill.name}</p>

                        </div>
                    )
                })}
            </div>
        </>
    )
}