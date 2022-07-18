import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// components 
import Skills from '../components/skills'
import Projects from '../components/projects'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Mitchell Marino</title>
        <meta name="description" content="Mitchell Marino Portfolio" />
        {/* put title icon here as link */}
      </Head>

      <main>

        {/* HOME SECTION */}
        <section id='home' className='pb-[300px] bg-[#0075C4]  pt-[100px] '>
          <div className='w-full text-black pl-[10%]'>
            <p className='text-3xl  text-left mx-auto font-light '>Hi there, I'm </p>
            <h1 className='text-7xl font-bold text-[#F7FE72] md:text-8xl lg:text-9xl mt-20 mb-20 text-left'>Mitchell Marino</h1>
            <p className='text-3xl text-left mt-10 '>A Full-Stack Software Engineer with a passion solving problems efficiently</p>
          </div>
        </section>
        
        {/* ABOUT SECTION */}
        <div id='about'className='w-full bg-[#020122] text-[#F3FCF0] p-10 md:px-32'>
          <h1 className='text-6xl text-center pb-10'>ABOUT ME</h1>
          <div className='flex flex-col justify-center'>
            <div className='bg-[#0075C4] profile h-[416px] w-[416px] pt-[8px] pl-[8px] mx-auto  '>
              <Image 
                  className='profile'
                  src='/linkedinprofilepic.jpg'
                  alt='Mitchell Marino Profile Picture'
                  height={400}
                  width={400}
                />
                <style jsx>{`
                  .profile {
                    border-radius: 50%;
                  }
                `}</style>
            </div>
            <div className='w-full  '>
              <h3 className='text-5xl py-10 lg:px-20'>My Story</h3>
              <p className='text-2xl lg:px-20'>When I graduated from college in 2020 with a Bachelor's in Molecular Biology, I 
                Coming out of college with a Bachelor's in Molecular Biology, I found success as a lab technician. While I gained valuable expereince designing/executing experiments and working in a high-throughput setting, I found myself questioning my career path.
                I was feeling burnt out and passionless. To my surprise, I found a new passion with computer programming. After much consideration and deliberation, I finally 
                dove into the tech world and committed myself to becoming a successful software engineer.  
                <br></br>
                <br></br>
                After completing the Software Engineering Immersive Bootcamp at General Assembly, I've gained the skills necessary 
                to create my own full stack applications. With a strong passion for designing organized, efficient backends and intuitive, interactive frontends, I aim to 
                help companies deploy websites that enhance the user experience.

              </p>
            </div>
          </div>
        </div>
      
        
        <div className='w-full bg-[#020122] text-[#F3FCF0] pb-10'>
          <Skills />
        </div>
        
        {/* PROJECTS SECTION */}

        <section id='projects' className=' bg-[#0075C4] '>
          <Projects />
        </section>

        {/* CONTACT SECTION */}
        <section id='contact' className='bg-[#020122] p-10 text-[#F3FCF0]'>
          <h1 className='text-[#F3FCF0] pb-5 text-5xl text-center'>CONTACT</h1>
          <div className='flex mx-auto w-3/4 justify-center'>
          <a className='' href='https://www.linkedin.com/in/mitchellmarino/' target='_blank'>
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
          <a className='' href='https://github.com/mitchdmarino' target='_blank'>
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
        </section>
      </main>

      <footer className='bg-[#020122]'>
        
      </footer>
    </div>
  )
}
