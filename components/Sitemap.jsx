import styles from "../styles/components/sitemap.module.scss"

const Sitemap = (props) => {
      return (
            <div className={styles.sitemap}>
            <h4>{props.head}</h4>
            <ul>
                  <li>{props.link1}</li>
                  <li>{props.link2}</li>
                  <li>{props.link3}</li>
                  <li>{props.link4}</li>
            </ul>
            </div>
      )
}

export default Sitemap