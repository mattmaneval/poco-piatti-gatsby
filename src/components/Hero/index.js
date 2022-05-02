import React, { useState } from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

// Components
import OrderModal from '../OnlineOrderModal/index';
import Cta from '../Cta/index';

// Images
import diningRoom from "../../images/IMG_0066.jpg";

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space, fonts } = theme;

const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;

  video {
    height: 100vh;
    width: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    filter: brightness(0.65);
  }

  h1 {
    text-transform: uppercase;
    margin-bottom: 0.25em;
  }

  .wrap {
    z-index: 1000;
  }
`;

const HeroNav = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  @media ${media.secondary} {
    flex-direction: column;
  }

  a {
    @media ${media.secondary} {
      width: 100%;
      text-align: center;
    }
  }
`;

const HandleClickWrap = styled.a`
  position: relative;
  display: inline-block;
  margin-right: 1em;

  @media ${media.secondary} {
    margin: 0 0 1em 0;
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

function Hero() {
  const [modal, openModal] = useState(false);

  const handleClick = () => (modal ? openModal(false) : openModal(true));

  return (
    <HeroImage>
      <video playsInline  autoPlay muted loop id="bgvid">
        <source src="https://pocopiatti.s3.us-east-2.amazonaws.com/background-video.mp4" type="video/mp4" />
        <source src="https://pocopiatti.s3.us-east-2.amazonaws.com/background-video.mp4" type="video/mmp4" />
      </video>
      <div className="wrap">
        <h1><span>Experience</span> <br />Poco Piatti</h1>
        <HeroNav>
          <HandleClickWrap onClick={handleClick}>
            <Cta text="Order Online" filled />
          </HandleClickWrap>
          <Cta text="Carryout & Reservations" href="tel:419-931-0281"/>
        </HeroNav>

        <OrderModal modal={modal} onClick={handleClick} />
      </div>
      <GradientOverlay />
    </HeroImage>
  );
}

export default Hero;


// <HeroNavLinkConatainer>
//   <HeroLinkContent>
//     <a onClick={handleClick} class="cta">Order Online</a>
//   </HeroLinkContent>
// </HeroNavLinkConatainer>
// <HeroNavLinkConatainer>
//   <HeroLinkContent>
//     <a href="tel:419-931-0281">Carryout & Reservations</a>
//   </HeroLinkContent>
// </HeroNavLinkConatainer>
