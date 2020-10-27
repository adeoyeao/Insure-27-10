import styles from "../styles/components/line.module.scss"

const Line = (props) => {
      return (
            <div className={styles[props.type]}/>
      )
}

export default Line