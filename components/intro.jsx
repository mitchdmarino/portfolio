import { useState } from 'react'
import Image from "next/image";


export default function Intro () {
    const [showDetails, setShowDetails] = useState(false)

    const handleDetailsClick = () => {
        setShowDetails(!showDetails)
    }
    return (
        <section id="home" className="pb-[150px] pt-[10px] max-w-screen  ">
          <div className="bg-[#F8F0FB] profile h-[360px] w-[360px] pt-[5px]   px-[5px] mx-auto  ">
            <Image
              className="profile"
              src="/linkedinprofilepic.jpg"
              alt="Mitchell Marino Profile Picture"
              height={350}
              width={350}
            />
            <style global jsx>{`
              .profile {
                border-radius: 50%;
              }
            `}</style>
          </div>
          <div className="w-full text-black px-20  pt-10">
            <p className="text-4xl text-[#F4D06F] mx-auto ">Hi there! {"I'm"} </p>
            <h1 className="text-7xl font-bold text-[#F4D06F] md:text-8xl lg:text-9xl my-10  ">
              <span className="text-[#F4D06F]">Mitchell,</span> 
            </h1>
            <p className="text-4xl text-[#F4D06F] mx-auto ">a full stack web developer</p>
            <p className="text-3xl  mt-10 text-[#FBF2C0] px-3 mb-10  ">
              I am passionate about creating software solutions that enhance the user
              experience and simplify backend complexity.
            </p>
            <a href='#about' className="text-4xl text-[white]">Learn More <Image src="/down.png" alt="Down Arrow" height={30} width={30}/></a>

          </div>
      
          
        </section>
    )
}