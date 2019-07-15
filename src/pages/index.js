import React from "react"
import { Link } from "gatsby"
import LandinPage from '../components/LandingPage'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingPage from "../components/LandingPage";
import AboutEvent from '../components/About'
import  Speakers from "../components/Speaker/index";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingPage />
    <AboutEvent />
    <Speakers />
  </Layout>
)

export default IndexPage
