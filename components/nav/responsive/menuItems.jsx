import styles from "./menuItems.module.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function MenuItems({ showMenu, active, navStatus }) {
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
      <ul
        className={
          active
            ? "flex-col flex items-center md:hidden w-full m-0 bg-[#060416]"
            : "hidden"
        }
      >
        <CloseOutlinedIcon onClick={showMenu} className="cursor-pointer" />
        <li className={styles.nav_item+ " " + homeClass}><a href="#">HOME</a></li>
        <li className={styles.nav_item+ " " + aboutClass}><a href="#about">ABOUT</a></li>
        <li className={styles.nav_item+ " " + projectsClass}><a href="#projects">PROJECTS</a></li>
        <li className={styles.nav_item+ " " + contactClass}><a href="#contact">CONTACT</a></li>
        <li className={styles.nav_item}><a href='/Mitchell_Marino_Resume.pdf'rel="noopener noreferrer"target="_blank">RESUME</a></li>
      </ul>
    );
  };