import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import HeadingGroup from "../components/HeadingGroup/index";
import SectionHeading from "../components/SectionHeading/index";
import PerrysburgRoom from "../components/private-events/PerrysburgRoom"
import DowntownRoom from "../components/private-events/DowntownRoom"

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { color, space, fonts } = theme;


const PrivateEvents = () => (
  <Layout>
    <SEO title="Private Events" />
    <section>
      <div className="wrap">
        <HeadingGroup
          h1Text="Private Events"
          h4Text="Book your next private party or event at Poco Piatti. We offer flexible packages and personal attention to your party planning needs with each event customized to fit your criteria."
        />
      </div>
    </section>
    <div className="PrivateEvents">
      <div className="PrivateEventsWrap">
        <div className="PrivateEventsWrapHeader">
          <h1>Book your next private party or event at Poco Piatti.
          We offer flexible packages and personal attention
          to your party planning needs with each event customized to fit your criteria.
          </h1>
        </div>
        <div className="PrivateEventsPhotos">
          <article className="PrivateEventsPhoto1">
          </article>
          <article className="PrivateEventsPhoto2">
          </article>
        </div>
        <div className="PrivateEventsPhotos">
          <article className="PrivateEventsPhoto3">
          </article>
          <article className="PrivateEventsPhoto4">
          </article>
        </div>
        <div className="RoomDescription">
        <a href="mailto:pocopiattiparty@gmail.com"><button>Email Us</button></a>
        <h1>Or call 419.931.0281</h1>
          <PerrysburgRoom />
          <DowntownRoom />
        </div>

      </div>
    </div>
  </Layout>
)

export default PrivateEvents
