import styles from "../styles/components/heading.module.scss"

const Heading = (props) => {
      const cname = props.type

      return (
            <h2 className={styles[cname]}>{props.head}</h2>
      )
}

export default Heading