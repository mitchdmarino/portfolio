import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

// components 
import Skills from '../components/skills'
import Projects from '../components/projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mitchell Marino</title>
        <meta name="description" content="Mitchell Marino Portfolio" />
        {/* put title icon here as link */}
      </Head>
      <aside className='sticky top-0 z-50'><Navbar/></aside>
      

      <main>

        {/* HOME SECTION */}
        <section id='home' className='pb-[150px]   pt-[100px] '>
          <div className='bg-[#95190C] profile h-[416px] w-[416px] pt-[8px] pl-[8px] mx-auto  '>
                
                <Image 
                    className='profile'
                    src='/linkedinprofilepic.jpg'
                    alt='Mitchell Marino Profile Picture'
                    height={400}
                    width={400}
                  />
                  <style global jsx>{`
                        .profile {
                          border-radius: 50%;
                        }
                      `}</style>
            </div>
          <div className='w-full text-black text-center pt-10'>
            <p className='text-3xl mx-auto font-light '>Hi there! {"I'm"} </p>
            <h1 className='text-7xl font-bold text-black md:text-8xl lg:text-9xl mt-10 mb-20 '><span className='text-[#95190C]'>Mitchell</span> Marino</h1>
            <p className='text-3xl  mt-10 px-20 '>A <span className='text-[#95190C]'>Full-Stack Web Developer</span> passionate about creating software solutions that enhance the user experience and simplify backend complexity.</p>
          </div>
          <div className='flex justify-center flex-wrap pt-10'>
            <div className='bg-black hover:bg-[#95190C] rounded-full text-white h-20 w-40 flex justify-center hover:shadow-xl align-center'><a target="_blank" href='/Resume.pdf'  rel="noopener noreferrer" className='text-4xl pt-5'>Resume</a></div>
            <AiOutlineLinkedin className='text-2xl h-20 w-20 hover:text-[#95190C] hover:shadow-md mx-10'/>
            <AiOutlineGithub className='text-2xl h-20 w-20 hover:text-[#95190C] hover:shadow-md mx-10 '/>
          </div>
        </section>

        <hr></hr>
        
        {/* ABOUT SECTION */}
        <div id='about'className='w-full  text-black p-10 pb-40 md:px-32'>
          <h1 className='text-6xl text-center pb-10'>ABOUT ME</h1>
          <div className='flex flex-col justify-center'>
            
            <div className='w-full  '>
            
              <p className='text-2xl lg:px-20'>{"I'm"} a full-stack web developer with a background in biotechnology. After completing a Molecular Biology Bachelor's Degree and spending 
              almost 2 years in the industry, I decided to make a change and pursue a career in software engineering. 
                <br></br>
                <br></br>
                After completing the <span className='text-[#95190C]'>Software Engineering Immersive Bootcamp at General Assembly </span>, I have gained the skills necessary 
                to create full stack applications from scratch. With a strong passion for designing organized, efficient backends and intuitive, interactive frontends, I aim to 
                help companies deploy websites that enhance the user experience, while simplifying the complexities of backend management.  I find that I can apply many of my previous skills as a scientist to solving coding problems, such as research, experimentation and strong attention to 
                detail. With these skills, I attack coding through a scientific lens, which helps me work effieciently and methodically.

              </p>
            </div>
          </div>
        </div>
      
        <hr></hr>
        <div className='w-full  pb-10' id="skills">
          <Skills />
        </div>

        <hr></hr>
        
        {/* PROJECTS SECTION */}

        <section id='projects' className='  '>
          <Projects />
        </section>

        {/* CONTACT SECTION */}
        <section id='contact' className='bg-[#DFE0DC] p-10 text-black'>
          <h1 className=' pb-5 text-5xl text-center'>CONTACT</h1>
          <div className='flex mx-auto w-3/4 justify-center'>
          <a className='' href='https://www.linkedin.com/in/mitchellmarino/' target='_blank' rel="noreferrer">
            <div className='mx-20 bg-[#F3FCF0] hover:scale-125 rounded-full ' style={{width: 100, height: 55, position: 'relative'}}>
              <Image 
                  src={'/linkedin.png'}
                  alt={`linkedin logo`}
                  layout='fill'
                  objectFit='contain'
              />
            </div>
          </a>
          <a className='hover:scale-125 mt-5 text-2xl' href='mailto:mitchdmarino@gmail.com'>mitchdmarino@gmail.com</a>
          <a className='' href='https://github.com/mitchdmarino' target='_blank' rel="noreferrer">
            <div className='mx-20 bg-[#F3FCF0] hover:scale-125 rounded-full' style={{width: 100, height: 55, position: 'relative'}}>
              <Image 
                  src={'/github.png'}
                  alt={`github logo`}
                  layout='fill'
                  objectFit='contain'
              />
            </div>
          </a>         

          </div>
          <div className="container mt-20 mx-auto  text-black">
            <form action="action_page.php">

              <label htmlFor="fname" className=''>First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
              <br></br>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
              <br></br>
              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
              <br></br>
              <input type="submit" value="Submit"/>

            </form>
          </div>
        </section>
      </main>

      <footer className='bg-[#020122]'>
        
      </footer>
    </div>
  )
}
