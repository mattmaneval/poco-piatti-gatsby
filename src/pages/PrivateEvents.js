import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/_index.scss"
import PerrysburgRoom from "../components/private-events/PerrysburgRoom"
import DowntownRoom from "../components/private-events/DowntownRoom"
import IMG_0049 from "../images/IMG_0049.jpg";
import bar from "../images/bar.jpg";
import PrimaryCallout from "../components/home/PrimaryCallout"

const PrivateEvents = () => (
  <Layout>
    <SEO title="Private Events" />
    <div className="PrivateEvents">
      <div className="wrap">
        <div className="PrivateEventsWrapHeader">
          <h1>Private Events</h1>
          <h3>Book your next private party or event at Poco Piatti.
          We offer flexible packages and personal attention
          to your party planning needs with each event customized to fit your criteria.</h3>
        </div>

        <div className="RoomDescription">
        <a href="mailto:pocopiattiparty@gmail.com" className="cta">Email Us</a>
        <h1>Or call 419.931.0281</h1>

        </div>
      </div>
      <div className="private-events-content">
        <div className="event-location wrap">
          <div className="event-location-desc">
            <PerrysburgRoom />
          </div>
        </div>
        <div className="event-location wrap">
          <div className="event-location-desc">
            <DowntownRoom />
          </div>
        </div>


      </div>
      <PrimaryCallout />
    </div>
  </Layout>
)

export default PrivateEvents
