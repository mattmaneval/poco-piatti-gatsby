import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThePocoExperience from "../components/ThePocoExperience"
import Locations from "../components/Locations"
import Banner from "../components/Banner"
import "../sass/_index.scss"
import Review from "../components/Review"
import PhotoGallery from "../components/PhotoGallery"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <Banner />
    <ThePocoExperience />
    <Locations />
    <PhotoGallery />
    <Review />
  </Layout>
)

export default IndexPage;
