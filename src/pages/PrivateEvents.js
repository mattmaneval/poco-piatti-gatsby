import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/_PrivateEvents.scss"
import PerrysburgRoom from "../components/PerrysburgRoom"
import DowntownRoom from "../components/DowntownRoom"

const PrivateEvents = () => (
  <Layout>
    <SEO title="Private Events" />
    <div className="PrivateEvents">
      <div className="PrivateEventsWrap">
        <h1>Book your next private party or event at Poco Piatti.
        Poco Piatti offers flexible packages and personal attention
        to your party planning needs with each event customized to fit your criteria.</h1>
        <span className="Line"></span>
        <div className="PhotoGalleryRow">
          <article className="PortobelloCaps">
          </article>
          <article className="PocoTips">
          </article>
      </div>
      </div>
      <PerrysburgRoom />
      <DowntownRoom />
    </div>
  </Layout>
)

export default PrivateEvents
