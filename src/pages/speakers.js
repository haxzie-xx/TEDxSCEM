import React from "react"
import style from './sass/speakers.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
const SpeakerPage=()=>
(

    <StaticQuery 

    query={graphql`
    fragment SpeakerPageImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Speaker_1.JPG" }) {
          ...SpeakerPageImages
        }
        imageSecond: file(relativePath: { eq: "Speaker_2.jpg" }) {
          ...SpeakerPageImages
        }
        imageThird: file(relativePath: { eq: "Speaker_3.jpeg" }) {
          ...SpeakerPageImages
        }
        imageFourth: file(relativePath: { eq: "Speaker_4.jpg" }) {
          ...SpeakerPageImages
        }
        imageFifth: file(relativePath: { eq: "Speaker_5.jpeg" }) {
          ...SpeakerPageImages
        }
        imageSixth: file(relativePath: { eq: "Speaker_6.jpg" }) {
          ...SpeakerPageImages
        }
        imageSeventh: file(relativePath: { eq: "Speaker_7.jpg" }) {
          ...SpeakerPageImages
        }
        imageEiegth: file(relativePath: { eq: "Speaker_8.jpg" }) {
          ...SpeakerPageImages
        }
        
      }

    `}
    render={ data=>(<Layout>
        <div className={style.section}>
        <Container>
            <div className={style.container}>
            <div className={style.speaker_container}>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
           
            
            </div>
            <p className={style.speaker_details}><span className={style.title}>Siddharth Rajhans </span>is a Harvard educated first generation technology entrepreneur, a Silicon Valley Technocrat and product expert, management researcher, TEDx and motivational speaker and Pioneer of the Outernet Technology in India and the Asia Pacific Region. Siddharth is currently a Principal Policy Officer working on the Sustainable Development Goals (SDG’s) format of the United Nations in New York and has previously worked as a Product Manager for Apple in Singapore and 
            spearheaded Apple’s Everyone Can Code project. He also heads his startup called “Spacify” as a co-founder and CEO, which has been working to provide satellite-powered internet or “Outernet” in Singapore and parts of rural India as part of the Digital India initiative. Siddharth is on the board of several universities, including DAVV Indore, Symbiosis, Indore, RGPV Bhopal and de facto advisor to several others, including the likes of IIT
            Kharagpur, NIT Kurukshetra, UPES Dehradun and NMIMS Bangalore for bridging the industry academia gap.</p>
            </div>
           
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
                  
            </div>
            <p className={style.speaker_details}><span className={style.title}>Dhanya Ravi </span>“I think my bones break but 
            I have never been broken,” says Dhanya Ravi also known as the “Glass Woman” with conviction.  Born with the rare genetic disorder, 
            Osteogenesis Imperfecta (OI), commonly known as brittle bone disease, Dhanya, however, is made of sterner belief and refuses to be 
            hamstrung by impediments.  Dhanya, who had consulted over 50 specialists across the country, says she has suffered over 300 fractures 
            since birth. However, the gritty woman, a native of Palakkad, has learnt to tide over obstacles. Today, she is a motivational speaker 
            and a freelance content writer for whom “the Internet is my world.” Dhanya is also an active member of city-based community initiative 
            Amritavarshini Charitable Society, which aims to lend assistance to those afflicted with the disorder. She also spends much of her time 
            participating in various awareness campaigns.
</p>
            </div>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageThird.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
               
            </div>
            <p className={style.speaker_details}><span className={style.title}>Brigadier I N Rai </span>was commissioned as the second Lieutenant
             in the Sikh Light Infantry in 1970 and took part in the historic 1971 Indo-Pak War. As a Captain, he was involved in operations against 
             Naga Guerillas and as a Major, he commanded a Rifle Company facing the Chinesein East Ladakh. He has also operated in Sri Lanka as part of IPKF. After being promoted to the post of a Colonel, he commanded an Infantry Battalion in LOC at GUREZ, for which he was awarded the COAS Unit Citation.  Later, as a Brigadier, he commanded the Mountain Brigade in East Sikkim. He has the distinction of being an instructor in Officers Training Academy, 
            Chennai and as Brigadier in Indian Military Academy, Dehradun.</p>
            </div>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFourth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
                      
            </div>
            <p className={style.speaker_details}><span className={style.title}>Swastik Padma </span>an "Innovator by heart, Entrepreneur by mind",  
            has a minor planet named after him. This honor has been extended to Swastik, taking into account the distinction he had achieved in the International Level Science and Engineering Fair, 2018.  He has been conferred with this honor by Massachusetts Institute of Technology, Lincoln Laboratory and International Astronomical Union. During his participation in ISEF-2017, he had made an item using slag with non-reusable plastic, which was 24 times stronger than iron. He won a special award for this discovery. During a similar event in 2018, he had developed a paper slip that can diagnose malnutrition among children six months in advance. He also developed a paper slip that can detect oral cancer much in advance. For his achievements, he bagged the Second Grand Award. 
            He was presented with the National Child Award from the President of India last year.</p>
            </div>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFifth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
               
            </div>
            <p className={style.speaker_details}><span className={style.title}>Kavitha Mishra</span>Kavitha Mishra, 
            presently part of the agriculture sector says, “We want to encourage farmers to grow forest and fruit trees together as it supports biodiversity and secures their livelihood. Fruit trees generate income monthly or yearly while forest trees are fixed deposits for the retirement when it is difficult to do physical work. Above all the monetary reasons, every individual must grow trees for contributing for the betterment of this planet so forest and fruit trees are the best pick!” Mrs. Mishra did masters in Psychology and also holds Diploma in Computer Science. She got the opportunity to work for an IT company but refused the offer and turned into a farmer. “I belong to an agriculture
             family therefore since childhood I was interested in farming,” she justifies..</p>
            </div>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSixth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
             
            </div>
            <p className={style.speaker_details}><span className={style.title}>Dr. Rohan Chandra Gatti </span>Dr. Rohan Chandra Gatti is 
            a Senior Consultant Surgical Oncologist at Mangalore Institute of Oncology, India with more than ten years of experience in the field. 
            He has specialized in minimally invasive and organ sparing therapies. He is also the Head of Department of Surgical Oncology at Father 
            Muller Hospital, Mangalore. His qualifications include MBBS, MS in General Surgery and MCh in General Oncology. Dr. Rohan is considered 
            one of the best in Mangalore who says "I am simple and love to converse with creative people."
</p>
            </div>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSeventh.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
           
            </div>
            <p className={style.speaker_details}><span className={style.title}>Swami Ekagamyanandaji </span>Swami Ekagamyanandaji is a monk of the Ramakrishna Order. He has been serving in the Mangalore ashrama for the past 12 years. He had his Sannyasa from the most revered, Swami Atmasthanandaji
Maharaj, in 2016.  He has been instrumental in the success of various initiatives of Ramakrishna Math, Mangalore such as Swacch Mangaluru for Swacch Bharath Abhiyan. His able guidance & leadership in steering the noble venture forward has met with tremendous success in terms of active public participation and has drawn 
volunteers in huge numbers. He has also worked in Ramakrishna Mission at Belgaum under Swami Purushottamanandaji for a few years.</p>
            </div>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageEiegth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            
            </div>
            <p className={style.speaker_details}><span className={style.title}>Ankit Kumar</span>Mr Ankith S Kumar is a Behavioral Scientist ,
             Psycho-Social support  Counsellor , Life Skills Coach , and Personality Development trainer. He is a certified Hypnotist and Neuro Linguistic Programme 
             Practitioner, a certified Yoga Therapist and also a Pranic Healer (Level 1), a certified First Aid Medic( Certified by Indian Red Cross and St John’s Ambulance ) .  He is also trained in Forensic Science. As a hobby, he is into Astrology & Paranormal Investigation. He has 4 years of teaching experience in behavioural sciences; Psychiatric and Medical Social work. He has conducted over 200 training programs for educational, healthcare, industrial and public institutions on Life skills and personality development.
             He is also a Life Member of Indian Society of Professional Social Workers (ISPSW)..</p>
                   
            </div>
            </div>
                </div>
                


          


        </Container>
        </div>

</Layout>


)}
/>
)

export default SpeakerPage;