import { Link } from "gatsby"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'


const Footer =()=>
(
    <div className={style.section}>
        <Container>

            <div className={style.container}>
                <div className={style.content_holder}>
                <p className={style.insta2}>Folow Us on <a className={style.insta}href="https://instagram.com/tedxscem?igshid=1jznmvabayyn6"><br /><span className={style.red} >Instagram </span></a>  </p>
                <p className={style.insta}>Mail Us on  <span className={style.red}> <br /> tedxscem@gmail.com </span>  </p>
                <p className={style.insta}>Contact Us on <span className={style.red}> <br /> +91 7624828176</span>  </p>
                </div>
                <p className={style.license}>"This Independent TEDx event is operated under license from TED." </p>
                <div className={style.credits}>
               
                <p className={style.insta}>Built with ♥ by <a className={style.insta} href="https://sosc.org.in/">SOSC</a></p>
                </div>
            </div>

        </Container>
    </div>


)

export default Footer;