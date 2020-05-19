import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/_index.scss"
import Faq from "../components/about/Faq"
import HeroNav from '../components/hero-nav';

const About = () => (
  <Layout>
    <SEO title="About" />
    <HeroNav />
    <div className="About">
      <Faq />
    </div>
  </Layout>
)

export default About;
