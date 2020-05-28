import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/_index.scss";
import CovidModal from "../components/modules/CovidModal";
import HomeHero from "../components/home/HomeHero";
import PocoExperience from "../components/home/PocoExperience";
import Locations from "../components/modules/Locations";
import PhotoGallery2 from "../components/home/PhotoGallery2";
import PhotoGalleryThree from "../components/home/PhotoGalleryThree";
import PrimaryCallout from "../components/modules/PrimaryCallout";
import Reviews from "../components/home/Reviews";
import Popup from "../components/modules/popup";
import FullMenu from "../components/menu/FullMenu";
import Faq from '../components/about/faq';
import Map from '../components/home/map';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `Mediterranean`, `Restaurant`]} />
    <CovidModal />
    <HomeHero />
    <PocoExperience />
    <Locations />
    <PrimaryCallout />
    <FullMenu />
    <PhotoGallery2 />
    <Reviews />
    <Faq />
    <PhotoGalleryThree />
    <Map />
    <Popup />
  </Layout>
)

export default IndexPage;
