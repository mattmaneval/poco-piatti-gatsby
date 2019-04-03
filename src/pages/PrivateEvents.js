import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/_PrivateEvents.scss"

const PrivateEvents = () => (
  <Layout>
    <SEO title="Private Events" />
    <div className="PrivateEvents">
      <div className="PrivateEventsWrap">
        <h1>Events and Private Parties</h1>
        <span className="Line"></span>
        <div className="Outline">
          <h5>Perrysburg Banquet Room</h5>
          <p>Book your next private party or event at Poco Piatti.
          Poco Piatti offers flexible packages and personal attention
          to your party planning needs with each event customized to fit your criteria.
          As a result, pricing is contingent upon your requirements as well as menu choices.
          Please see the catering section of our website for suggested packages and pricing.
          We have a wide variety of menu options to satisfy any request. With space to
          accommodate six to fifty people, it is the perfect room for your next birthday,
          wedding rehearsal, graduation, business meeting or Saturday night out with your friends.
          </p>
        </div>
        <a href="mailto:pocopiattiparty@gmail.com"><button>Email Us</button></a>
      </div>
    </div>
  </Layout>
)

export default PrivateEvents
