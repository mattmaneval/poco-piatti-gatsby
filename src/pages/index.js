import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThePocoExperience from "../components/ThePocoExperience"
import Locations from "../components/Locations"
import Map from "../components/Map"
import Banner from "../components/Banner"
import Navigation from "../components/Navigation"
import Img from "gatsby-image"
import "../components/_index.scss"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Poco Piatti`, `Toledo`, `Ohio`, `mediterranean`, `restaurant`]} />
    <Navigation />
    <Banner />
    <ThePocoExperience />
    <Locations />
    <Map />

    <div className="photo-features">
      <div className="photo-features-wrap">
        <div className="photo-features-photos">
          <Img fluid={props.data.DSC04762.childImageSharp.fluid} />
          <Img fluid={props.data.DSC04786.childImageSharp.fluid} />
          <Img fluid={props.data.DSC04717.childImageSharp.fluid} />
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage;

export const PageQuery = graphql`
query {
DSC04762: file(relativePath: {eq: "DSC04762.jpg"}) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
DSC04786: file(relativePath: {eq: "DSC04786.jpg"}) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
DSC04717: file(relativePath: {eq: "DSC04717.jpg"}) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
}
`
