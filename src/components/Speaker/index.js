import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'



const Speakers =({props})=>
(



    <StaticQuery 

    query={graphql`
    fragment SpeakerImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Speaker_1.JPG" }) {
          ...SpeakerImages
        }
        
      }

    `}

    render={ data =>(<div className={style.section}>
        <Container>
        <div className={style.container}>
            <p className={style.title}> Our <span className={style.red}>Speakers</span></p>
            <div className={style.speaker_container}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajan</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>


        </div>
        

        </div>

        </Container>

    </div>
)
    }
    />

);
export default Speakers;


