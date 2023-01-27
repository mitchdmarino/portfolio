import React, { useState } from "react";
import styles from "./navbar.module.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuItems from "./responsive/menuItems.jsx"

export default function Navbar({navStatus}) {
  const [active, setActive] = useState(false)
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

  const showMenu = () => {
    setActive(!active)
  }
  return (
    <nav className={styles.nav}>
      <div className={`absolute right-6 md:hidden top-6 scale-150`}>
        <MenuOutlinedIcon 
          onClick={showMenu}
          className="scale-150 cursor-pointer" 
          color="inherit"
          
        />
      </div>
      <div >
        <ul className="hidden md:flex">
          <li className={styles.nav_item+ " " + homeClass}><a href="#">HOME</a></li>
          <li className={styles.nav_item+ " " + aboutClass}><a href="#about">ABOUT</a></li>
          <li className={styles.nav_item+ " " + projectsClass}><a href="#projects">PROJECTS</a></li>
          <li className={styles.nav_item+ " " + contactClass}><a href="#contact">CONTACT</a></li>
          <li className={styles.nav_item}><a href='/Mitchell_Marino_Resume.pdf'rel="noopener noreferrer"target="_blank">RESUME</a></li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} navStatus={navStatus} />
      </div>
      
    </nav>
  );
};