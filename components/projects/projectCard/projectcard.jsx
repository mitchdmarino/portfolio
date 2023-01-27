import Image from "next/image"
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
import { withTheme } from "@emotion/react";

export default function ProjectCard ({project}) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setIsFlipped(!isFlipped)
    }
    
    return (
        <ReactCardFlip className="" isFlipped={isFlipped} cardStyles={{front: {flex: "row", alignItems: "center", margin: "2px",backgroundColor: "#060416",width: "300px", height: "320px", border: "5px solid black"}, back: {margin: "2px",backgroundColor: "#060416", height: "320px", border: "5px solid black", width: "300px"}}}>
            {/* front of the card */}
            <div onClick={handleClick} className='h-full w-full flex items-center'>
                    <Image 
                        className=''
                        src={project.image}
                        alt={`home page of ${project.name} `}
                        height={250}
                        width={300}
                        
                    />
            </div>
            {/* back of the card */}
            <div className=" h-full px-6  py-4 text-[#EDE9E8]"> 
                <div onClick={handleClick}>                   
                <div className="font-bold text-3xl sm:text-5xl mb-2"><h1>{project.name}</h1></div>
                    <p className=" text-xl sm:text-2xl h-[75px] ">
                        {project.description}
                    </p>
                    <div className=" pt-4 flex justify-between">
                    
                        {project.tools.map((tool,i) => {
                            return (
                             <div key={`project${project.name}tool-${i}`} className='mx-2 relative w-[40px] sm:w-[75px] md:w-[90px] lg:w-[110px] xl:w-[150px] hover:scale-110'>
                                     {tool}
                            </div>
                         )
                     })}
                 </div>
                 </div>
                <div className="flex justify-center pt-5">
                     <a className=" py-2 mx-4 block  text-xl text-decoration-line: underline "target={"_blank"} rel="noreferrer" href={project.github}>Repo</a>
                     <br></br>
                     {project.deployed? <a className="py-2 block mx-4  text-xl text-decoration-line: underline "target={"_blank"} rel="noreferrer" href={project.deployed}>Live</a>: ''}         
                 </div>
            </div>
        </ReactCardFlip>
        // <div key={project.name}className=" max-w-[400px] p-4 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-[#060416] m-10 transition ease-in-out delay-100 duration-300 hover:bg-gray-200 group hover:text-black">
                
        //         
        //             <div className='flex transition ease-in-out delay-100 duration-300 hover:bg-blue-200 justify-center mb-5 align-center hover:scale-110 rounded-xl'>
        //             <Image 
        //                 className='rounded-xl'
        //                 src={project.image}
        //                 alt={`home page of ${project.name} `}
        //                 height={225}
        //                 width={325}
        //             />
        //         </div>
        //         <div className=" pt-4 pb-2 flex justify-between">
                    
        //             {project.tools.map((tool,i) => {
        //                 return (
        //                     <div key={`project${project.name}tool-${i}`} className='mb-3 mx-2 relative w-[40px] sm:w-[75px] md:w-[90px] lg:w-[110px] xl:w-[150px] hover:scale-110'>
        //                             {tool}
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //         <div className="flex justify-center pt-10">
        //             <a className=" py-2 mx-4 block  text-xl text-decoration-line: underline " href={project.github}>Repo</a>
        //             <br></br>
        //             {project.deployed? <a className="py-2 block mx-4  text-xl text-decoration-line: underline " href={project.deployed}>Live</a>: ''}         
        //         </div>
        //         {/* <div className="flex justify-center pt-10 group-hover:animate-bounce">
        //            <a className="py-2 block mx-4  text-3xl" href={`projects/${project.name.toLowerCase()}`}>Learn More</a>
        //         </div> */}
        //         </div>
        //             </div>
    )
}