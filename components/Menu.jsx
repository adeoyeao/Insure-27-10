import styles from "../styles/components/menu.module.scss"
import Navbar from "./Navbar"
import Button from "./Button"

const Menu = (props) => {
      return (
            <div className={styles.menu}>
                  <a href="#home" onClick={() => props.openMenu()}>HOME</a>
                  <a href="#about-us" onClick={() => props.openMenu()}>ABOUT US</a>
                  <a href="#learn-more" onClick={() => props.openMenu()}>LEARN MORE</a>
                  <Button 
                  type="secondary"
                  text="VIEW PLANS"/>
            </div>
      )
}

export default Menu