import React from "react"
import style from './sass/team.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';



const TeamPage =()=>(



    <StaticQuery

    query={graphql`
    fragment TeamPageImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "team_1.jpeg" }) {
          ...TeamPageImages
        }
        imageSecond: file(relativePath: { eq: "team_2.jpg" }) {
            ...TeamPageImages
          }
          imageThird: file(relativePath: { eq: "team_3.jpeg" }) {
            ...TeamPageImages
          }
          imageFourth: file(relativePath: { eq: "team_4.jpeg" }) {
            ...TeamPageImages
          }
          imageFifth: file(relativePath: { eq: "team_5.jpeg" }) {
            ...TeamPageImages
          }
          imageSixth: file(relativePath: { eq: "team_6.jpeg" }) {
            ...TeamPageImages
          }
          imageSeventh: file(relativePath: { eq: "team_7.jpeg" }) {
            ...TeamPageImages
          }
          image8: file(relativePath: { eq: "Team_7.jpeg" }) {
            ...TeamPageImages
          }
          image9: file(relativePath: { eq: "team_8.jpeg" }) {
            ...TeamPageImages
          }
          image10: file(relativePath: { eq: "team_9.jpeg" }) {
            ...TeamPageImages
          }
          image11: file(relativePath: { eq: "team_10.jpeg" }) {
            ...TeamPageImages
          }
          image12: file(relativePath: { eq: "team_11.jpeg" }) {
            ...TeamPageImages
          }
      }

    `}
    render={ data =>(
        <Layout>
    <div className={style.section}>
        <Container>
        <div className={style.container}>
            <p className={style.title}> Our <span className={style.red}>Team</span></p>
            <div className={style.speaker_container}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Basavarajeshwari Ambi</p>
            <p className={style.about_speaker}>Organiser</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Srujan U</p>
            <p className={style.about_speaker}>Co-Organiser</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageThird.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Afroz Hussain</p>
            <p className={style.about_speaker}>Technical</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFourth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Nathaniel Ryan Matthew</p>
            <p className={style.about_speaker}>Design</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFifth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Dhanush Bangera</p>
            <p className={style.about_speaker}>Design</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSixth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Hiba Fathima</p>
            <p className={style.about_speaker}>Content Writer</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSeventh.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Pavanje Manoj Rao</p>
            <p className={style.about_speaker}>Member</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.image8.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Uttam kini</p>
            <p className={style.about_speaker}>Member</p>               
            </div>

            <div className={style.speaker_holder}>
            <Img
            fluid={data.image9.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Rachitha</p>
            <p className={style.about_speaker}>Member</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.image10.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Shravan</p>
            <p className={style.about_speaker}>Member</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.image11.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Navya BL</p>
            <p className={style.about_speaker}>Member</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.image12.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Shravan</p>
            <p className={style.about_speaker}>Member</p>               
            </div>
            


        </div>
        

        </div>

        </Container>

    </div>
    </Layout>
)
    }
    />
)


export default TeamPage;