import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThePocoExperience from "../components/ThePocoExperience"
import Locations from "../components/Locations"
import Map from "../components/Map"
import Banner from "../components/Banner"
import "../components/_index.scss"
import Video from "../components/Video"
import DSC04780 from "../images/DSC04780-Edit.jpg"
import DSC04762 from "../images/DSC04762.jpg";

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <Banner />
    <ThePocoExperience />
    <Locations />
    <Map />
    <div className="photo-div">
      <section>
        <img src={DSC04780} alt="Markouk Chicken Wraps" />
      </section>
      <aside>
        <img src={DSC04762} alt="Small Plates" />
      </aside>
    </div>
    <Video />
  </Layout>
)

export default IndexPage;
