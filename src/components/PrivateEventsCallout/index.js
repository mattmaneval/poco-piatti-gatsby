import React from 'react'
import styled from 'styled-components'

// Images
import DowntownWindows from '../../images/IMG_0046.jpg'

// Components
import Cta from '../Cta/index'

// Styles
import theme from '../../styles/theme'
import media from '../../styles/media'

const { color } = theme

const PrivateEventsCalloutStyle = styled.section`
  background-image: url(${DowntownWindows});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .private-events-callout {
    background-color: ${color.foreground};
    border: 1em solid ${color.background};
    padding: 4em;
    text-align: center;
    z-index: 1;
    position: relative;

    @media ${media.secondary} {
      padding: 2em;
    }

    .title {
      margin-bottom: 1.25em;
    }
  }
`

const GradientOverlay = styled.div`
  bottom: 0;
  height: 40em;
  left: 0;
  -webkit-mask-image: linear-gradient(
    180deg,
    rgba(2, 2, 10, 0),
    ${color.foreground}
  );
  mask-image: linear-gradient(180deg, rgba(2, 2, 10, 0), ${color.foreground});
  overflow-x: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;

  &:before {
    background-color: #02020a;
    bottom: 0;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

const PrivateEventsCallout = () => (
  <PrivateEventsCalloutStyle>
    <div className="inner-wrap">
      <div className="private-events-callout">
        <div className="title light">Private Events</div>
        <h2>
          Book your next private party or event at Poco Piatti. We offer
          flexible packages and personal attention to your party planning needs
          with each event customized to fit your criteria.
        </h2>
        <Cta text="Learn More" href="/PrivateEvents" />
      </div>
    </div>
    <GradientOverlay />
  </PrivateEventsCalloutStyle>
)

export default PrivateEventsCallout
