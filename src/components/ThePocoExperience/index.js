import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import OrderModal from '../OnlineOrderModal/index';
import Cta from '../Cta/index';

// Images
import ThePocoExperienceImage from "../../images/the-poco-experience.jpg";

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { color, space, fonts } = theme;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${media.primary} {
    display: flex;
    flex-direction: column-reverse;
  }

  .grid-content {
    margin: auto;

    h2 {
      margin: 0 1em 1.25em 0;

      @media ${media.primary} {
        margin: 0 0 1em 0;
      }
    }
  }
`;

const GridImage = styled.div`
  background-image: url(${ThePocoExperienceImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  border-radius: 50%;
  padding-top: 100%;
  filter: brightness(0.85);

  @media ${media.primary} {
    margin-bottom: 3em;
  }
`;

function ThePocoExperience() {
  return (
    <>
    <section className="">
      <div class="wrap">
        <Grid>
          <div className="grid-content">
            <div className="title light">The Poco <span>Experience</span></div>
            <h2>Poco Piatti means "small plates." Here, you have the opportunity to
              experience the many flavors of the mediterranean! We strive to create
              dishes that are unique and healthy using only the most fresh and best
              quality ingredients. So share the small, or large, plates with your
              table and enjoy!
            </h2>
            <Cta text="Explore Our Menu" href="/Menu/"/>
          </div>
          <GridImage />
        </Grid>
      </div>
    </section>
    </>
  );
}

export default ThePocoExperience;