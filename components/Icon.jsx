import styles from "../styles/components/icon.module.scss"

const Icon = (props) => {
      const iconStyle = {
      backgroundImage: `url("./images/icon-${props.type}.svg")`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
      }
      return (
            <div className={styles.icon} style={iconStyle}/>
      )
}

export default Icon