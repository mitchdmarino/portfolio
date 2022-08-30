import Skills from './skills'

export default function About () {
    return (
        <section id="about" className="w-full  text-[#4D243D] p-10 md:px-16 lg:px-20 pb-40 ">
          <h1 className="text-6xl pb-10">ABOUT ME</h1>
          <div className="flex flex-col justify-center">
            <div className="w-full  ">
              <p className="text-2xl ">
                {"I'm"} a full-stack web developer with a background in
                biotechnology. After completing a Molecular Biology Bachelor
                {"'s"} Degree and spending a few years in biotech, I
                decided to make a change and pursue a career in software
                engineering. 
                <br></br>
                <br></br>
                After completing the{" "}
                <span className="text-[white] font-bold">
                Software Engineering Bootcamp{" "}
                </span>
                at General Assembly, I have gained the skills necessary to create full stack
                applications from scratch. With a strong passion for designing
                organized, efficient backends and intuitive, interactive
                frontends, I aim to help companies deploy websites that enhance
                the user experience, while simplifying the complexities of
                backend management. I find that I can apply many of my previous
                skills as a scientist to solving coding problems, such as
                research, experimentation, and strong attention to detail. With
                these skills, I attack coding through a scientific lens, which
                helps me work effieciently and methodically.
              </p>
            </div>
          </div>
          <div id="skills">
            <Skills />
          </div>
        </section>
    )
}