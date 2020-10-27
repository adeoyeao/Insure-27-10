import styles from "../styles/components/hamburger.module.scss"

const Hamburger = (props) => {
      const cname = !props.menu ? "open" : "close"

      return (
            <button className={styles[cname]}
            onClick={() => props.openMenu()}></button>
      )
}

export default Hamburger