import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// components 
import Skills from '../components/skills'
import Projects from '../components/projects'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mitchell Marino</title>
        <meta name="description" content="Mitchell Marino Portfolio" />
        {/* put title icon here as link */}
      </Head>

      <main className={styles.main}>

        {/* HOME SECTION */}
        <section id='home' className='pb-[300px]'>
          <div className='w-full'>
            <p className='text-2xl text-[#28190E] text-left'>Hi there, I'm </p>
            <h1 className='text-7xl md:text-8xl lg:text-9xl mt-10'>Mitchell Marino</h1>
            <p className='text-2xl text-center mt-10'>A Full-Stack Software Engineer with a passion for problem solving</p>
          </div>
        </section>
        
        {/* ABOUT SECTION */}
        <div id='about'className='w-full'>
          <h1 className='text-8xl text-left'>About Me</h1>
          <div className='bg-[#] profile h-[316px] w-[316px] pt-[8px] pl-[8px] mx-auto'>
            <Image 
                className='profile'
                src='/linkedinprofilepic.jpg'
                alt='Mitchell Marino Profile Picture'
                height={300}
                width={300}
              />
              <style jsx>{`
                .profile {
                  border-radius: 50%;
                }
              `}</style>
          </div>
        </div>
      
        {/* SKILLS SECTION */}
        <div id='skills' className='w-full'>
          <Skills />
        </div>
        
        {/* PROJECTS SECTION */}

        <section id='projects' className=' bg-[#15B097] h-[500px]'>
          <Projects />
        </section>

        {/* CONTACT SECTION */}
        <section id='contact'>
          <h1>Contact Me</h1>
        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
