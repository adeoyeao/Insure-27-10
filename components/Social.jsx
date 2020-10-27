import styles from "../styles/components/social.module.scss"

const Social = (props) => {
      const socialStyle = {
            backgroundImage: `url("./images/icon-${props.social}.svg")`,
            backgroundPosition: "center",
            backgroundSize: "cover"
      }
      
      return (
            <a 
            href={`https://www.${props.social}.com`} 
            target="_blank" 
            style={socialStyle}
            className={styles.social}></a>
      )
}

export default Social