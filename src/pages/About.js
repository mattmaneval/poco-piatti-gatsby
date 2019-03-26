import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import "../components/_About.scss"

const About = () => (
  <Layout>
  <Banner />
    <SEO title="About" />
    <div className="About">
    <div className="AboutWrap">
      <h1>Frequently Asked Questions</h1>
      <span className="underline"></span>
      <h3>Dietary Restrictions</h3>
      <p>We accommodate most dietary needs like gluten free, vegetarian, and vegan. Ask for our gluten free menu. </p>
      <p>Our meat is Halal.</p>
      <h3>Reservations</h3>
      <p>For reservations at Perrysburg location call: 419-931-0281</p>
      <p>For reservations at Sylvania location call: 419-720-8028</p>
      <p>For reservations at Downtown location call: </p>
      <p>Automatic gratuity may be applied to groups of 5 or more.</p>
      <h3>Bar Options</h3>
      <p>We serve beer, wine, cocktails, and our famous sangria! </p>
      <h3>Wifi</h3>
      <p>Complimentary wifi is available.</p>
      <h3>Gift Certificates</h3>
      <p>We offer gift certificates in-store at all our locations.</p>
      <h3>Employment</h3>
      <p>FOH and BOH interested candidates can download our application here.</p>
    </div>
  </div>
  </Layout>
)

export default About
