import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';

// Images
import diningRoom from "../../images/IMG_0066.jpg";

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space } = theme;


const HeroImage = styled.div`

`;

const LocationsStyle = styled.section`
  .locations-container {
    display: flex;
    justify-content: space-between;

    @media ${media.primary} {
      /* grid-template-columns: 1fr;
      text-align: left; */
      flex-direction: column;
    }
  }

  .title {

    position: relative;
    z-index: 1;
  }

  .location-container {
    // background-color: ${color.background};

    background-image: url(${diningRoom});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    z-index: 1;

    @media ${media.primary} {
      margin-bottom: 4em;
    }

    &:last-of-type {
      @media ${media.primary} {
        margin-bottom: 0;
      }
    }
  }

  .address {
    margin-bottom: ${space.space};
    position: relative;
    z-index: 1;
  }

  .hours {
    /* @media ${media.primary} {
      margin-bottom: 2em;;
    } */
    position: relative;
    z-index: 1;
  }

  p {
    color: ${color.foregroundDim};
  }
`;

const GradientOverlay = styled.div `
  bottom: 0;
  height: 40em;
  left: 0;
  -webkit-mask-image: linear-gradient(180deg,rgba(2,2,10,0), ${color.foreground});
  mask-image: linear-gradient(180deg,rgba(2,2,10,0), ${color.foreground});
  overflow-x: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;
  // z-index: 1000;

  &:before {
    background-color: #02020a;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const Locations = () => (
  <LocationsStyle>
    <div className="wrap">
      <SectionHeading text="Locations" light/>
      <div className="locations-container">
        <div className="location-container">
          <div className="title">Perrysburg</div>
          <div className="address">
            <p>3155 Chappel Dr.</p>
            <p>Perrysburg, Ohio</p>
          </div>
          <div className="hours">
            <p>Mon, 11:30 am - 9 pm</p>
            <p>Tue - Thu, 11:30 - 9:30 pm</p>
            <p>Fri - Sat, 11:30 - 10:30 pm</p>
            <p>Sun, 12 am - 9 pm</p>
          </div>
          <GradientOverlay />
        </div>
        <div className="location-container">
          <div className="title">Sylvania</div>
          <div className="address">
            <p>6710 W. Central Ave #1</p>
            <p>Toledo, Ohio</p>
          </div>
          <div className="hours">
            <p>Mon - Fri, 11:30 am - Close</p>
            <p>Sat, 11:30 - Close</p>
            <p>Sun, 12 am - 9 pm</p>
          </div>
        </div>
        <div className="location-container">
          <div className="title">Downtown</div>
          <div className="address">
            <p>329 N Huron</p>
            <p>Toledo, Ohio</p>
          </div>
          <div className="hours">
            <p>Mon, Open For Lunch</p>
            <p>Tues - Fri, 11 am - Close</p>
            <p>Sat, 4pm - Close</p>
            <p>Sun, Closed</p>
          </div>
        </div>
      </div>
    </div>
  </LocationsStyle>
);

export default Locations;
