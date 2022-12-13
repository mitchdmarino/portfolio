import { useState, useEffect } from 'react'
import styles from "./intro.module.css"
import useWindowDimensions from "../../utils/helpers/useWindowDimensions"

export default function Intro () {
  // const [height, setHeight] = useState(0)
    const { height, width } = useWindowDimensions();
    
    return (
        <section id="home" className="">
          <div className="w-full px-20" style={{paddingTop: height/3.5}}>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl my-10 text-center">
              Hi there. {"I'm"} <span className={styles.nameTitle}>Mitchell Marino,</span>
            </h1>
            <p className="text-3xl md:text-3xl lg:text-4xl mx-auto text-center ">a full-stack web developer</p>
          </div>
        </section>
    )
}