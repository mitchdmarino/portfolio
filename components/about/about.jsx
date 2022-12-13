import { useEffect, useState } from 'react'
import Skills from '../skills'


export default function About () {
  const [details, setDetails] = useState(false)  
  
  const handleDetailsClick = () => {
      setDetails(!details)
    }

  return (
    <section id="about" className="w-full p-10 md:px-16 lg:px-20 pb-40">
      <h1 className="text-6xl pb-10 text-center">ABOUT</h1>
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <p className="text-2xl">
            {"I'm"} a Full-Stack Software Engineer at <a href="https://www.roadieslabs.xyz" target="_blank" rel="noreferrer">Roadies Labs Inc.</a> 
            <br></br>
            <br></br>
            {"I'm"} a self-starter {"who's"} passionate about creating user-oriented front-ends and organized, efficient back-ends.
          </p>
          <p className={details? "": "hidden" } >I started my professional career in the biotech industry, but made a drastic career change after finding my passion for software engineering. I find that many of my previous skills as a scientist (such as research, experimentation, and strong attention to detail) remain valuable assets to my professional success. I view coding through a scientific lens, which helps me work efficiently and methodically. </p>
          <button onClick={() => handleDetailsClick()}>
            {details ? "HIDE": "SEE MORE ->"}
          </button>
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
    </section>
  )
}