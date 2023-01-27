import { useState, useEffect } from 'react'
import styles from "./intro.module.css"
import useWindowDimensions from "../../utils/helpers/useWindowDimensions"

export default function Intro () {
  // const [height, setHeight] = useState(0)
    const { height, width } = useWindowDimensions();
    
    return (
        <section id="home" className="pt-[50px] md:pt-[100px] lg:pt-[200px]" >
          <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
          <div className="w-full p-10 sm:p-20">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl my-10 text-center">
              Hi there. {"I'm"} <span className={styles.nameTitle}>Mitchell Marino,</span>
            </h1>
            <p className="text-3xl md:text-3xl lg:text-4xl mx-auto text-center ">a full-stack web developer</p>
          </div>
          <div className={styles.customShape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
            </svg>
          </div>
        </section>
    )
}