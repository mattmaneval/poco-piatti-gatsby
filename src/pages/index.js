import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThePocoExperience from "../components/ThePocoExperience"
import Locations from "../components/Locations"
import Map from "../components/Map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <ThePocoExperience />
    <Locations />
    <Map />
  </Layout>
)

export default IndexPage
