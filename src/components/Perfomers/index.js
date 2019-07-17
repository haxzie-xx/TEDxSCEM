import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'


const Perfomers=()=>
(
    <StaticQuery
    query={graphql`
    fragment PerfomersImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Performance_1.jpg" }) {
          ...PerfomersImages
        }
        imageSecond: file(relativePath: { eq: "Performance_2.jpg" }) {
          ...PerfomersImages
        }
        imageThird: file(relativePath: { eq: "Performance_3.jpg" }) {
          ...PerfomersImages
        }
        imageFourth: file(relativePath: { eq: "Performance_4.jpg" }) {
          ...PerfomersImages
        }
      }

    `

    }

    render={data=>
    (
        <div className={style.section}>
            <Container>
            <div className={style.container}>
            <p className={style.title}> Cultural <span className={style.red}>Perfomers</span></p>
            <div className={style.speaker_container}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Adarsh Pakkala</p>
            <p className={style.about_speaker}>Yakshagana</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Karishma Arora</p>
            <p className={style.about_speaker}>Kathak</p>               
            </div>
            
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageThird.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Team Propaganda</p>
            <p className={style.about_speaker}>Bolly-Hop</p>               
            </div>
            <div className={`${style.speaker_holder} ${style.aligned}`}>
            <Img
            fluid={data.imageFourth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>ArtBeats</p>
            <p className={style.about_speaker}>Fusion</p>               
            </div>
            </div>
            </div>
            </Container>



        </div>
    )}

    />
)


export default Perfomers;