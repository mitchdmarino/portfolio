import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";

export default function Intro () {
    return (
        <section id="home" className="pb-[150px] h-full pt-[10px] ">
          <div className="bg-[#95190C] profile h-[310px] w-[310px] pt-[5px] pl-[5px] mx-auto  ">
            <Image
              className="profile"
              src="/linkedinprofilepic.jpg"
              alt="Mitchell Marino Profile Picture"
              height={300}
              width={300}
            />
            <style global jsx>{`
              .profile {
                border-radius: 50%;
              }
            `}</style>
          </div>
          <div className="w-full text-black text-center pt-10">
            <p className="text-3xl mx-auto font-light ">Hi there! {"I'm"} </p>
            <h1 className="text-7xl font-bold text-black md:text-8xl lg:text-9xl mt-10 mb-20 ">
              <span className="text-[#95190C]">Mitchell</span> Marino
            </h1>
            <p className="text-3xl  mt-10 lg:px-20 px-3  ">
              A <span className="text-[#95190C]">Full-Stack Web Developer</span>{" "}
              passionate about creating software solutions that enhance the user
              experience and simplify backend complexity.
            </p>
          </div>
          <div className="flex justify-center flex-wrap pt-10">
            <div className="bg-black hover:bg-[#95190C] rounded-full text-white h-20 w-40 flex justify-center hover:shadow-xl align-center">
              <a
                target="_blank"
                href="/Resume.pdf"
                rel="noopener noreferrer"
                className="text-4xl pt-5"
              >
                Resume
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/mitchellmarino/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="text-2xl h-20 w-20 hover:text-[#95190C] hover:shadow-md mx-10" />
            </a>
            <a
              href="https://github.com/mitchdmarino"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="text-2xl h-20 w-20 hover:text-[#95190C] hover:shadow-md mx-10 " />
            </a>
          </div>
        </section>
    )
}