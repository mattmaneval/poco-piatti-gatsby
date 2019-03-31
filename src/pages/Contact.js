import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Locations from "../components/Locations"
import "../components/_Contact.scss"
import Map from "../components/Map"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="Contact">
      <div className="ContactWrap">
        <Locations />
        <Map />
      </div>
    </div>
  </Layout>
)

export default Contact
