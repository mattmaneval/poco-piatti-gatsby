import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Locations from "../components/Locations"
import "../sass/_index.scss"
import Review from "../components/Review"
import PhotoGallery from "../components/PhotoGallery"
import LandingPage from "../components/LandingPage"
import PhotoGalleryTwo from "../components/PhotoGalleryTwo"
import ThePocoExperience from "../components/ThePocoExperience"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <LandingPage />
    <ThePocoExperience />
    <Locations />
    <PhotoGalleryTwo />
   
    <PhotoGallery />
    <Review />
    
  </Layout>
)

export default IndexPage;
