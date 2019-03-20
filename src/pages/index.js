import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThePocoExperience from "../components/ThePocoExperience"
import Locations from "../components/Locations"
import Map from "../components/Map"
import Banner from "../components/Banner"
import SmallPlates from "../components/SmallPlates"
import ChickenWraps from "../components/ChickenWraps"
import "../components/_index.scss"
import Video from "../components/Video"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <Banner />
    <ThePocoExperience />
    <Locations />
    <Map />
    <div className="photo-div">
    <section>
      <SmallPlates />
    </section>
    <aside>
      <ChickenWraps />
    </aside>
    </div>
    <Video />
  </Layout>
)

export default IndexPage;
