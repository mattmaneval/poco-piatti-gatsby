import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import OrderModal from '../OnlineOrderModal/index';
import Cta from '../Cta/index';

// Images
import PrivateRoomImage from "../../images/the-poco-experience.jpg";

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { color, space, fonts } = theme;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media ${media.primary} {
    display: flex;
    flex-direction: column-reverse;
  }

  .grid-content {
    margin: auto;

    h2 {
      margin: 0 0 1em 0;

      @media ${media.primary} {
        margin: 0 0 1em 0;
      }
    }
  }
`;

const GridImage = styled.div`
  // background-image: ${props => `url(${props.imageUrl})`};
  background-image: url(${PrivateRoomImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  border-radius: 50%;
  padding-top: 100%;
  filter: brightness(0.85);

  grid-area: ${({ reverse }) => (reverse ? `1/1/2/2` : `auto`)};

  @media ${media.primary} {
    margin-bottom: 3em;
  }
`;

function PrivateRoom({ titleText, pText, ctaText, ctaHref, reverse}) {
  return (
    <>
    <section className="">
      <div class="wrap">
        <Grid>
          <div className="grid-content">
            <div class="title light">{titleText}</div>
            <h2>{pText}</h2>
            <Cta text={ctaText} href={ctaHref}/>
          </div>
          <GridImage reverse={reverse} />
        </Grid>
      </div>
    </section>
    </>
  );
}

export default PrivateRoom;
