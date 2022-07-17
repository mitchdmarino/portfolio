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
        <h2 className='text-5xl text-center'>My skills</h2>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 w-2/3 mx-auto">
                {skills.map((skill, index) => {
                    return (
                        <div key={`skill-${index}`}className="flex text-2xl text-[#020122] bg-[#EE4266] m-4 p-6 rounded-2xl justify-center hover:text-[#F3FCF0]">
                            <p>{skill.name}</p>
                            {skill.icon ? 
                            
                            <div className='' style={{width: 50, height: 25, position: 'relative'}}>
                                <Image 
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>: '' }

                        </div>
                    )
                })}
            </div>
        </>
    )
}