import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/_index.scss"
import Faq from "../components/about/Faq"
import PrimaryCallout from "../components/modules/PrimaryCallout"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="About">
      <Faq />
      <PrimaryCallout />
    </div>
  </Layout>
)

export default About;
