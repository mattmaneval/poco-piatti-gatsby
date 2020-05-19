import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Locations from "../components/home/Locations"
import "../styles/_index.scss"
import HeroNav from '../components/hero-nav';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <HeroNav />
    <div className="Contact">
      <div className="ContactWrap">
        <Locations />
      </div>
    </div>
  </Layout>
)

export default Contact
