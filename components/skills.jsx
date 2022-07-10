export default function Skills() {
    const skills = [
        'JavaScript', 
        'HTML',
        'CSS', 
        'React.js',
        'Next.js',
        'Mongo',
        'SQL',
        'Python',
        'Django'
    ]
    return (
        <>
        <h2>These are my amazing skills</h2>
           <div className="grid">
                {skills.map(skill => {
                    return (
                        <div className="">
                            <p>{skill}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}