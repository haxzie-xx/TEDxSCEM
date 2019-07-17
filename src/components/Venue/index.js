import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import Sahyadri from '../../images/Sahyadri-Campus-005.jpg'
import Map from '../../images/Map.png'


const Venue =()=>
(

    <div className={style.section}>
        <Container>
        <p className={style.title}>The <span className={style.red}>Venue</span></p>
       <div className={style.container}>
         
           <p className={style.venue_content}>
           Netravati Auditorium is situated in the sprawling campus just off the Mangalore-Bangalore National Highway 48, 
           on the banks of the river Nethravathi. Surrounded with natures pristine beauty and an excellent infrastructure coupled.
           It is one of the beautiful auditorium of Sahyadri College of Engineering and Management

                </p>
                <div className={style.buttons}>
                <a className={style.HeroButton} href="https://www.townscript.com/e/tedxscem-211323">Get Tickets</a>
                <a className={style.HeroButton} href="https://g.page/Sahyadri-edu?share">Get Directions</a>

                </div>
              
            <div className={style.venue_holder}>
                <img className={style.venue_image} src={Sahyadri} alt="Sahyadri campus"/>
               <a href="https://g.page/Sahyadri-edu?share"><img className={style.venue_image} src={Map} alt="Sahyadri campus"/></a> 
                

            </div>
    

       </div>

        </Container>



    </div>


)

export default Venue;