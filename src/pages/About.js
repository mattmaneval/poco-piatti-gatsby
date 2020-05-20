import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/_index.scss"
import Faq from "../components/about/Faq"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="About">
      <Faq />
    </div>
  </Layout>
)

export default About;
