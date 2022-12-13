import React, { useEffect } from "react";
import styles from "./navbar.module.css"


export default function Navbar({navStatus, setNavStatus}) {
  let homeClass = ""
  let aboutClass = ""
  let projectsClass = ""
  let contactClass = ""

  switch(navStatus) {
    case 'home':
      homeClass=styles.active
      break;
    case 'about':
      aboutClass=styles.active
      break;
    case 'projects':
      projectsClass=styles.active
      break;
    case 'contact':
      contactClass=styles.active
      break;
    default: 
      homeClass=styles.active
  }
  return (
    <nav className={styles.nav}>
      <div>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item+ " " + homeClass}><a href="#">HOME</a></li>
          <li className={styles.nav_item+ " " + aboutClass}><a href="#about">ABOUT</a></li>
          <li className={styles.nav_item+ " " + projectsClass}><a href="#projects">PROJECTS</a></li>
          <li className={styles.nav_item+ " " + contactClass}><a href="#contact">CONTACT</a></li>
          <li className={styles.nav_item}><a href='/Mitchell_Marino_Resume.pdf'rel="noopener noreferrer"target="_blank">RESUME</a></li>
        </ul>
      </div>
    </nav>
  );
};