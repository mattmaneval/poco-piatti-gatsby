import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/_About.scss"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="About">
    <div className="AboutWrap">
      <h1>Frequently Asked Questions</h1>
      <span className="line"></span>
      <div className="Outline">
        <h5>Dietary Restrictions</h5>
        <p>We accommodate most dietary needs like gluten free, vegetarian, and vegan. Ask for our gluten free menu. </p>
        <p>Our meat is Halal.</p>
        <h5>Reservations</h5>
        <p>For reservations at Perrysburg location call: 419-931-0281</p>
        <p>For reservations at Sylvania location call: 419-720-8028</p>
        <p>For reservations at Downtown location call: </p>
        <p>Automatic gratuity may be applied to groups of 5 or more.</p>
        <h5>Bar Options</h5>
        <p>We serve beer, wine, cocktails, and our famous sangria! </p>
        <h5>Wifi</h5>
        <p>Complimentary wifi is available.</p>
        <h5>Gift Certificates</h5>
        <p>We offer gift certificates in-store at all our locations.</p>
      </div>
    </div>
  </div>
  </Layout>
)

export default About
