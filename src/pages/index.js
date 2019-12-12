import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Locations from "../components/home/Locations"
import "../styles/_index.scss"
import Review from "../components/home/Review"
import PhotoGallery from "../components/home/PhotoGallery"
import LandingPage from "../components/home/LandingPage"
import PhotoGalleryTwo from "../components/home/PhotoGalleryTwo"
import PhotoGalleryThree from "../components/home/PhotoGalleryThree"
import ThePocoExperience from "../components/home/ThePocoExperience"
import Map from "../components/home/Map"
import Faq from "../components/about/Faq"
import FullMenu from "../components/menu/FullMenu"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `Mediterranean`, `Restaurant`]} />
    <LandingPage />
    <ThePocoExperience />
    <Locations />
    <Map />
    <PhotoGalleryTwo />
    <Review />
    <PhotoGallery />
    <FullMenu />
    <PhotoGalleryThree />
    <Faq />
  </Layout>
)

export default IndexPage;
