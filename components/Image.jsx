import styles from "../styles/components/image.module.scss"

const Image = (props) => {
      return (
            <img src={`./images/${props.url}.jpg`} />
      )
}

export default Image