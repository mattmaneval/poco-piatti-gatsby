import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Locations from "../components/Locations/index";
import "../styles/_index.scss"
import DeliveryBanner from "../components/home/DeliveryBanner"
import Review from "../components/home/Review"
import PhotoGallery from "../components/home/PhotoGallery"
import PhotoGalleryTwo from "../components/home/PhotoGalleryTwo"
import PhotoGalleryThree from "../components/home/PhotoGalleryThree"
import ThePocoExperience from "../components/home/ThePocoExperience"
import GoogleMap from "../components/GoogleMap/index"
import Faq from "../components/about/Faq"
import FullMenu from "../components/menu/FullMenu"
import Popup from "../components/popup"
import Togo from "../components/home/Togo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `Mediterranean`, `Restaurant`]} />
    <DeliveryBanner />
    <ThePocoExperience />
    <Togo />
    <Locations />
    <GoogleMap />
    <PhotoGalleryTwo />
    <Review />
    <PhotoGallery />
    <FullMenu />
    <PhotoGalleryThree />
    <Faq />
    <Popup />
  </Layout>
)

export default IndexPage;
