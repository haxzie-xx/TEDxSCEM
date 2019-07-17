import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import TEDx from '../../images/about_image.jpg'

const About =()=>
(
    
    <div className={style.container}>
        <Container>
        <div className={style.content_holder}>

        
        <div className={style.content_wrap}>
        <div className={style.content}>
        <p className={style.content_title}>What is <span className={style.red}>TEDx</span> </p>
        <p  className={style.content_data}>In the spirit of ideas worth spreading, TED has created a program called TEDx. 
        TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. 
        Our event is called TEDxSCEM, where x = independently organized TED event. At our TEDxSCEM event, 
        TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general 
        guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
        <Link className={style.HeroButton} to="/about">Learn more</Link>
        </div>

        <img src={TEDx} className={style.About_image}   alt="about-ted" />
        </div>


        </div>


        </Container>

    </div>
)

export default About;