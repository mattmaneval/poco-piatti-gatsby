import React from 'react'
import styled from 'styled-components'

// Images
import DowntownWindows from '../../images/private-events-image.jpg'

// Components
import ArrowCta from '../ArrowCta'

// Styles
import theme from '../../styles/theme'
import media from '../../styles/media'

const { color } = theme

const PrivateEventsCalloutStyle = styled.section`
  background-image: url(${DowntownWindows});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;

  .inner-wrap {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    z-index: 1;
  }
`

const GradientOverlayTop = styled.div`
  top: 0;
  height: 40em;
  left: 0;
  -webkit-mask-image: linear-gradient(
    180deg,
    ${color.foreground},
    rgba(2, 2, 10, 0)
  );
  mask-image: linear-gradient(180deg, ${color.foreground}, rgba(2, 2, 10, 0));
  overflow-x: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;

  &:before {
    background-color: #02020a;
    top: 0;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`
const GradientOverlayBottom = styled.div`
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
    <GradientOverlayTop />
    <div className="inner-wrap">
      <div className="title light">Private Events</div>
      <h2>
        Book your next private party or event at Poco Piatti. We offer flexible
        packages and personal attention to your party planning needs with each
        event customized to fit your criteria.
      </h2>
      <ArrowCta text="Learn More" href="/PrivateEvents/" />
    </div>

    <GradientOverlayBottom />
  </PrivateEventsCalloutStyle>
)

export default PrivateEventsCallout
