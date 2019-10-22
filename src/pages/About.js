import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/_About.scss"
import Faq from "../components/Faq"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="About">
      <Faq />
    </div>
  </Layout>
)

export default About;
