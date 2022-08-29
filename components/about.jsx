import Skills from './skills'

export default function About () {
    return (
        <div id="about" className="w-full  text-black p-10 pb-40 md:px-32">
          <h1 className="text-6xl text-center pb-10">ABOUT ME</h1>
          <div className="flex flex-col justify-center">
            <div className="w-full  ">
              <p className="text-2xl lg:px-20">
                {"I'm"} a full-stack web developer with a background in
                biotechnology. After completing a Molecular Biology Bachelor
                {"'s"} Degree and spending almost 2 years in the industry, I
                decided to make a change and pursue a career in software
                engineering.
                <br></br>
                <br></br>
                After completing the{" "}
                <span className="text-[#95190C]">
                  Software Engineering Immersive Bootcamp at General Assembly{" "}
                </span>
                , I have gained the skills necessary to create full stack
                applications from scratch. With a strong passion for designing
                organized, efficient backends and intuitive, interactive
                frontends, I aim to help companies deploy websites that enhance
                the user experience, while simplifying the complexities of
                backend management. I find that I can apply many of my previous
                skills as a scientist to solving coding problems, such as
                research, experimentation and strong attention to detail. With
                these skills, I attack coding through a scientific lens, which
                helps me work effieciently and methodically.
              </p>
            </div>
          </div>
        </div>
    )
}