import React, { useState } from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

// Components
import OrderModal from '../OnlineOrderModal/index';

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
  justify-content: flex-end;
  align-items: center;
  background-image: url(${diningRoom});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

    span {
      font-family: ${fonts.fontItalic};
      font-size: 0.65em;
      text-transform: capitalize;
    }
  }

  .wrap {
    z-index: 1000;
  }
`;

const HeroNav = styled.div`
  ${mixins.flexBetween}
  width: 100%;
  position: relative;
  z-index: 1;

  @media ${media.secondary} {
    flex-direction: column;
  }
`;

const HeroNavLinkConatainer = styled.div`
  ${mixins.animate}
  color: ${color.background};
  cursor: pointer;
  background-color: ${color.foreground};
  padding: 1em;
  width: 100%;
  font-family: ${fonts.fontBold};
  text-transform: uppercase;
  letter-spacing: 0.085em;


  text-align: center;

  &:hover {
    background-color: ${color.callout};
  }
`;

const HeroLinkContent = styled.div`
  // border: 1px solid ${color.background};
  // border-radius: 0.4em;
  // padding: 2em;

  .hero-link-text {
    margin-bottom: 5em;
  }

  a {
    color: ${color.background};
    font-size: 0.95em;

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
          <HeroNavLinkConatainer>
            <HeroLinkContent>
              <a onClick={handleClick} class="cta">Order Now</a>
            </HeroLinkContent>
          </HeroNavLinkConatainer>
          <HeroNavLinkConatainer>
            <HeroLinkContent>
              <a href="tel:419-931-0281">Phone</a>
            </HeroLinkContent>
          </HeroNavLinkConatainer>

          <HeroNavLinkConatainer>
            <HeroLinkContent>
              <Link to="/Menu/">View Menu</Link>
            </HeroLinkContent>
          </HeroNavLinkConatainer>
        </HeroNav>

        <OrderModal modal={modal} onClick={handleClick} />
      </div>
      <GradientOverlay />
    </HeroImage>
  );
}

export default Hero;
