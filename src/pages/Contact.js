import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Locations from "../components/home/Locations"
import "../styles/_index.scss"
import Map from "../components/home/Map";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="Contact">
      <div className="ContactWrap">
        <Map />
      </div>
    </div>
  </Layout>
)

export default Contact
