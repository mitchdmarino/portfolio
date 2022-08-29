import Head from "next/head";

// components
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mitchell Marino</title>
        <meta name="description" content="Mitchell Marino Portfolio" />
        {/* put title icon here as link */}
      </Head>
      <aside className="sticky top-0 z-50">
        <Navbar />
      </aside>

      <main>
        {/* HOME SECTION */}
        <Intro />
        <hr></hr>

        {/* ABOUT SECTION */}
        <About />
        <hr></hr>

        {/* SKILLS SECTION */}
        <Skills />
        <hr></hr>

        {/* PROJECTS SECTION */}

        <section id="projects" className="  ">
          <Projects />
        </section>

        {/* CONTACT SECTION */}

        <Contact />
      </main>

      <footer className="bg-[#020122]"></footer>
    </div>
  );
}
