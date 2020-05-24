import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/_index.scss";
import CovidModal from "../components/CovidModal";
import HomeHero from "../components/home/HomeHero";
import PocoExperience from "../components/home/PocoExperience";
import Locations from "../components/modules/Locations";
import PhotoGallery2 from "../components/home/PhotoGallery2";
import PhotoGalleryThree from "../components/home/PhotoGalleryThree";
import PrimaryCallout from "../components/home/PrimaryCallout";
import Reviews from "../components/home/Reviews";
import Carousel from "../components/home/FoodGallery";
import Popup from "../components/popup";

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `Mediterranean`, `Restaurant`]} />
    <CovidModal />
    <HomeHero />
    <PocoExperience />
    <Locations />
    <PrimaryCallout />
    <Reviews />
    <PhotoGallery2 />
    <PhotoGalleryThree />
    <Popup />
  </Layout>
)

export default IndexPage;
