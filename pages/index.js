import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// components 
import Skills from '../components/skills'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mitchell Marino</title>
        <meta name="description" content="Mitchell Marino Portfolio" />
        {/* put title icon here as link */}
      </Head>

      <main >
       <div className='w-1/2'>
        <p className='text-2xl text-black '>Hi there! My name is</p>
        <h1 className='text-[150px] text-[#23c686]'>Mitchell Marino</h1>
       </div>
      
        <div className='bg-[#23c686] profile h-[316px] w-[316px] pt-[8px] pl-[8px] mx-auto'>
          <Image 
              className='profile'
              src='/linkedinprofilepic.jpg'
              alt='Mitchell Marino Profile Picture'
              height={300}
              width={300}
            />
            <style jsx global>{`
              .profile {
                border-radius: 50%;
                
              }
            `}</style>
        </div>
        <div className=''>
          <Skills />
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
