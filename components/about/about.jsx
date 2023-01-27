import { useEffect, useState } from 'react'
import Skills from '../skills'
import Image from 'next/image'
import styles from './about.module.css'


export default function About () {
  const [details, setDetails] = useState(false)  
  
  const handleDetailsClick = () => {
      setDetails(!details)
    }

  return (
    <section id="about" className="w-full pt-[90px] px-10 md:px-10 lg:px-40">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl ">Who am I?</h1>
      <div className="flex flex-col justify-around">
        {/* <div className="profile max-w-[300px] max-h-[240px] flex align-center justify-center mx-auto">
              <Image
                className="profile"
                src="/linkedinprofilepic.jpg"
                alt="Mitchell Marino Profile Picture"
                layout="fixed"
                width={200}
                height={200}
              />
              <style global jsx>{`
                .profile {
                  border-radius: 50%;
                  border: 2px solid var(--important);
                  background-color: var(--important);
                }
              `}</style>
            </div> */}
        <div className="description text-2xl md:text-3xl">
          <p className="">
            My name is Mitchell, and {"I'm"} a Full-Stack Software Engineer.
            </p>           
            <br></br>
            <p className='text-2xl md:text-3xl '>
            I have one year of software engineering experience, specializing in application development with JavaScript and Python. 
            </p>
            <br></br>
            <p>Currently a software engineer at <a href="https://www.roadieslabs.xyz" className="highlight" target="_blank" rel="noreferrer">Roadies Labs Inc.</a> </p>
            <br></br>
          <p className={details? "text-2xl md:text-3xl": "hidden"} >After graduating from UCLA with a degree in Molecular Biology and spending some time in biotech, I decided to make a career change and pursue my passion for coding. I am a highly motivated, self starter who loves solving problems. <br></br><br></br>In my free time, I enjoy hiking, surfing, snowboarding, gaming, and working out.  </p>
          
          
          <button className="highlight text-2xl md:text-3xl py-10"onClick={() => handleDetailsClick()}>
            {details ? "HIDE": 
            "SEE MORE"}
          </button>
          <style global jsx>{`
                .description {
                  border-left: 2px solid var(--important);
                  padding: 10px 20px;
                  margin: 20px 20px 0 0 ;
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