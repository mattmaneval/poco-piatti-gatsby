import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/_index.scss";
import HomeHero from "../components/home/HomeHero";
import PocoExperience from "../components/home/PocoExperience";
import Locations from "../components/home/Locations";
import CovidModal from "../components/CovidModal";
import Review from "../components/home/Review";
import PhotoGallery from "../components/home/PhotoGallery";
import PhotoGalleryTwo from "../components/home/PhotoGalleryTwo";
import PhotoGalleryThree from "../components/home/PhotoGalleryThree";
import Map from "../components/home/Map";
import Faq from "../components/about/Faq";
import FullMenu from "../components/menu/FullMenu";
import Popup from "../components/popup";


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `Mediterranean`, `Restaurant`]} />
    <CovidModal />
    <HomeHero />
    <PocoExperience />
    <Locations />
    <Map />
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
