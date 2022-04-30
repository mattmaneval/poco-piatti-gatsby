import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import "../styles/_index.scss"
import Faq from "../components/about/Faq"
import PrivateEventsCallout from "../components/PrivateEventsCallout/index";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="About">
      <Faq />
      <PrivateEventsCallout />
    </div>
  </Layout>
)

export default About;
