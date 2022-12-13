import { useEffect, useState } from 'react'
import Skills from '../skills'
import Image from 'next/image'


export default function About () {
  const [details, setDetails] = useState(false)  
  
  const handleDetailsClick = () => {
      setDetails(!details)
    }

  return (
    <section id="about" className="w-full p-10 md:px-16 lg:px-20 pb-40">
      <h1 className="text-6xl p-14 text-center">ABOUT</h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full">
          <p className="text-2xl">
            {"I'm"} a Full-Stack Software Engineer at <a href="https://www.roadieslabs.xyz" className="highlight" target="_blank" rel="noreferrer">Roadies Labs Inc.</a> 
            </p>
            <br></br>
            <p className='text-xl max-w-[600px]'>
            As a self-starter, I have passion for creating user-oriented front-ends and organized, efficient back-ends.
            </p>
          
          <p className={details? "text-xl": "hidden"} >I started my professional career in the biotech industry, but made a drastic career change after finding my passion for software engineering. I find that many of my previous skills as a scientist (such as research, experimentation, and strong attention to detail) remain valuable assets to my professional success. I view coding through a scientific lens, which helps me work efficiently and methodically. </p>
          <button className="highlight text-3xl py-10"onClick={() => handleDetailsClick()}>
            {details ? "HIDE": 
            "SEE MORE"}
          </button>
        </div>
         <div className="profile h-[360px] w-[360px] pt-[5px] px-[5px] mx-auto  ">
            <Image
              className="profile"
              src="/linkedinprofilepic.jpg"
              alt="Mitchell Marino Profile Picture"
              height={350}
              width={350}
            />
            <style global jsx>{`
              .profile {
                border-radius: 10%;
              }
            `}</style>
          </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
    </section>
  )
}