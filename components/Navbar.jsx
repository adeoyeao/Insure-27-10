import styles from "../styles/components/navbar.module.scss"

const Navbar = (props) => {
      return (
            <ul className={styles.navbar}>
                  <li><a href="#home">HOME</a></li>
                  <li><a href="#about-us">ABOUT US</a></li>
                  <li><a href="#learn-more">LEARN MORE</a></li>
            </ul>
      )
} 

export default Navbar