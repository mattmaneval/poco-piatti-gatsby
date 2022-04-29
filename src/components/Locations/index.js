import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space } = theme;

const LocationsStyle = styled.section`
  /* text-align: center; */

  .locations-container {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${space.space}; */
    display: flex;
    justify-content: space-between;

    @media ${media.primary} {
      /* grid-template-columns: 1fr;
      text-align: left; */
      flex-direction: column;
    }
  }

  .location-container {
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
  }

  .hours {
    /* @media ${media.primary} {
      margin-bottom: 2em;;
    } */
  }

  p {
    color: ${color.foregroundDim};
  }
`;

const Locations = () => (
  <LocationsStyle>
    <div className="wrap">
      <SectionHeading text="Locations" />
      <div className="locations-container">
        <div className="location-container">
          <h3>Perrysburg</h3>
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
        </div>
        <div className="location-container">
          <h3>Sylvania</h3>
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
          <h3>Downtown</h3>
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
