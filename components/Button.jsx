import styles from "../styles/components/button.module.scss"   

const Button = (props) => {
      return (
            <button className={styles[props.type]}>{props.text}</button>
      )
}

export default Button