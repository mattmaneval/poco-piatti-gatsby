import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThePocoExperience from "../components/ThePocoExperience"
import Locations from "../components/Locations"
import Map from "../components/Map"
import Banner from "../components/Banner"
import Navigation from "../components/Navigation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <Navigation />
    <Banner />
    <Locations />
    <Map />
    <ThePocoExperience />

  </Layout>
)

export default IndexPage
