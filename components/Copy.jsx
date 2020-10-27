import styles from "../styles/components/copy.module.scss"

const Copy = (props) => {
      return (
            <div className={styles[props.type]}>
            { props.type === "primary" ? <h1>{props.head}</h1> : <h3>{props.head}</h3>}
            <p>{props.copy}</p>
            </div>
      )
}

export default Copy