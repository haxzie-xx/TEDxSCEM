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
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w

                </p>
                <div className={style.buttons}>
                <Link className={style.HeroButton}>Get Tickets</Link>
                <Link className={style.HeroButton}>Get Directions</Link>

                </div>
              
            <div className={style.venue_holder}>
                <img className={style.venue_image} src={Sahyadri} alt="Sahyadri campus"/>
                <img className={style.venue_image} src={Map} alt="Sahyadri campus"/>
                

            </div>
    

       </div>

        </Container>



    </div>


)

export default Venue;