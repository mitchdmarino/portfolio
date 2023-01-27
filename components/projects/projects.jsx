import Image from 'next/image'
import { projects } from '../../utils/projects'
import styles from './projects.module.css'
import ProjectCard from './projectCard/projectcard'

export default function Projects() {
    const projCards = projects.map((project,i) => {
        return (
            <ProjectCard project={project} key={i} />
        )
    })
    
    return (
        <div id="projects" className=" p-10 pt-[100px] relative">
            <h1 className="text-5xl mb-10 text-left">Projects</h1>
            <div className={styles.cardContainer}>
                {projCards}
            </div>
            <div className={styles.customShape}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </div>
    )
}