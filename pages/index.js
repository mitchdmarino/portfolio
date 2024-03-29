import Head from "next/head";

// components
import Navbar from "../components/nav/navbar";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Skills from "../components/skills";
import Projects from "../components/projects/projects";
import Contact from "../components/contact";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";

export default function Home() {
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()
  const [navStatus, setNavStatus] = useState('home')
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >=0 && window.scrollY <= aboutRef.current.offsetTop-window.scrollY/2) {
        setNavStatus('home')
      }
      else if (aboutRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && projectsRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
        setNavStatus('about')
      }
      else if (projectsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
        setNavStatus('projects')
      }
      else {
        setNavStatus('contact')
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
  }
  }, [navStatus])
  return (
    <div>
      <aside className="sticky top-0 z-50">
        <Navbar navStatus={navStatus} setNavStatus={setNavStatus}/>
      </aside>

      {/* HOME SECTION */}

      <Intro />
      

      {/* ABOUT SECTION */}
      <div ref={aboutRef}>
        <About />
      </div>
      

      {/* PROJECTS SECTION */}

      <section id="projects" ref={projectsRef} className="  ">
        <Projects />
      </section>
      
      {/* CONTACT SECTION */}
      <div ref={contactRef}>
        <Contact />
      </div>
     
    </div>
  );
}
