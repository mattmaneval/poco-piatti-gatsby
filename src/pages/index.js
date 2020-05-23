import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/_index.scss";
import CovidModal from "../components/CovidModal";
import HomeHero from "../components/home/HomeHero";
import PocoExperience from "../components/home/PocoExperience";
import Locations from "../components/home/Locations";
import Reviews from "../components/home/Reviews";


import Map from "../components/home/Map";
import Faq from "../components/about/Faq";

import Popup from "../components/popup";


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `Mediterranean`, `Restaurant`]} />
    <CovidModal />
    <HomeHero />
    <PocoExperience />
    <Locations />
    <Map />
    <Reviews />
    <Faq />
    <Popup />
  </Layout>
)

export default IndexPage;
