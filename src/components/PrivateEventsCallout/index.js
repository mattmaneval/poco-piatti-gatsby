import React from 'react';
import styled from 'styled-components';

// Images
import DowntownWindows from "../../images/IMG_0046.jpg";

// Components
import Cta from '../Cta/index';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const PrivateEventsCalloutStyle = styled.section`
  background-image: url(${DowntownWindows});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    background: ${color.foreground};
    content: "";
    left: 0;
    opacity: 0.75;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
  }


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
`;

const PrivateEventsCallout = () => (
  <PrivateEventsCalloutStyle>
    <div className="inner-wrap">
      <div className="private-events-callout">
        <div className="title">Private Events</div>
        <h3>
          Book your next private party or event at Poco Piatti.
          We offer flexible packages and personal attention to your
          party planning needs with each event customized to fit your criteria.
        </h3>
        <Cta text="Learn More" />
      </div>
    </div>
  </PrivateEventsCalloutStyle>
);

export default PrivateEventsCallout;
