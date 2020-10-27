import { useState } from "react"

import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Hamburger from "../components/Hamburger"
import Menu from "../components/Menu"
import Image from "../components/Image"
import Copy from "../components/Copy"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Icon from "../components/Icon"
import Social from "../components/Social"
import Line from "../components/Line"
import Sitemap from "../components/Sitemap"

import styles from "../styles/layouts/index.module.scss"

const Index = () => {
      const [ menu, setMenu ] = useState(false)
      const openMenu = () => {
            setMenu(!menu)
      }

      return (
            <main>
            <header className={styles.header}>
                  <Logo />
                  <Navbar />
                  <Hamburger openMenu={openMenu} menu={menu}/>
                  { menu && <Menu openMenu={openMenu}/> }
            </header>
            <section id="home" className={styles.home}>
                  <Image url="image-intro-mobile"/>
                  <Copy type="primary" 
                  head="Humanizing your insurance."
                  copy="Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected."/>
                  <Button 
                  type="secondary"
                  text="VIEW PLANS"/>
            </section>
            <section id="about-us" className={styles.aboutUs}>
                  <Heading type="primary"
                  head="We're different"/>
                  <div className={styles.about}>
                        <Icon type="snappy-process"/>
                        <Copy 
                        type="secondary"
                        head="Snappy Process"
                        copy="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."/>
                  </div>
                  <div className={styles.about}>
                        <Icon type="affordable-prices"/>
                        <Copy 
                        type="secondary"
                        head="Affordable Prices"
                        copy="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer best coverage possible."/>
                  </div>
                  <div className={styles.about}>
                        <Icon type="people-first"/>
                        <Copy 
                        type="secondary"
                        head="People First"
                        copy="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."/>
                  </div>
            </section>
            <section id="learn-more" className={styles.learnMore}>
                  <div>
                  <Heading 
                  type="secondary"
                  head="Find out more about how we work"/>
                  <Button 
                  type="secondary"
                  text="HOW WE WORK"/>
                  </div>
            </section>
            <footer className={styles.footer}>
                  <Logo />
                  <div>
                  <Social social="facebook"/>
                  <Social social="pinterest"/>
                  <Social social="twitter"/>
                  <Social social="instagram"/>
                  </div>
                  <Line type="secondary"/>
                  <Sitemap 
                  head="OUR COMPANY"
                  link1="HOW WE WORK"
                  link2="WHY INSURE?"
                  link3="CHECK PRICE"
                  link4="REVIEWS"/>
                  <Sitemap 
                  head="HELP ME"
                  link1="FAQ"
                  link2="TERMS OF USE"
                  link3="PRIVACY POLICY"
                  link4="COOKIES"/>
                  <Sitemap 
                  head="CONTACT"
                  link1="SALES"
                  link2="SUPPORT"
                  link3="LIVE CHAT"/>
                  <Sitemap 
                  head="OTHERS"
                  link1="CAREERS"
                  link2="PRESS"
                  link3="LICENSES"/>
            </footer>
            </main>
      )
}

export default Index