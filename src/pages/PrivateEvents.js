import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import Navigation from "../components/Navigation"
import "../components/_PrivateEvents.scss"

const PrivateEvents = () => (
  <Layout>
  <Banner />
  <Navigation />
    <SEO title="Private Events" />
    <div className="PrivateEvents">
    <div className="PrivateEventsWrap">
      <h1>Events and Private Parties</h1>
      <span className="underline"></span>
      <p>
        Book your next private party or event at Poco Piatti.
        Poco Piatti offers flexible packages and personal attention
        to your party planning needs with each event customized to fit your criteria.
        As a result, pricing is contingent upon your requirements as well as menu choices.
        Please see the catering section of our website for suggested packages and pricing.
        We have a wide variety of menu options to satisfy any request. With space to
        accommodate six to fifty people, it is the perfect room for your next birthday,
        wedding rehearsal, graduation, business meeting or Saturday night out with your friends.
      </p>
      <button>Email Us</button>
    </div>
  </div>
  </Layout>
)

export default PrivateEvents
