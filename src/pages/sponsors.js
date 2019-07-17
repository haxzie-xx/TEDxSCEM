import React from "react"
import style from './sass/sponsor.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';



const Sponsors=()=>
(
    <Layout>
    <StaticQuery


    query={graphql`
    fragment SponsorPageImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Sahyadri.png" }) {
          ...SponsorPageImages
        }
        imageSecond: file(relativePath: { eq: "sosc-svg.png" }) {
            ...SponsorPageImages
          }
        
      }

    `}

    render={data=>(


        <div className={style.section}>
            <Container>
            <p className={style.title}> Our <span className={style.red}>Sponsors</span></p>
            <div className={style.container}>
           
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.sponsor_image}
            alt="Sponsor image"
            /> 
         
             <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className={style.sponsor_image}
            alt="Sponsor image"
            /> 


            </div>
           <p className={style.sponsor}>Wanna Sponsor Us ? Mail us on <span className={style.red}>tedxscem@gmail.com </span>to know more.</p>

            </Container>


        </div>
    )}
    />
    </Layout>
)

export default Sponsors;