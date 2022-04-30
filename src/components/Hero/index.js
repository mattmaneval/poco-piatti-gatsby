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
  justify-content: center;
  align-items: center;
  background-image: url(${diningRoom});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;

  h1 {
    color: ${color.background};
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
  margin: 1em;
  padding: 1em;
  width: 100%;

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
    font-size: 1.65em;
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
  z-index: 2;

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
      <div className="wrap">
        <h1>Welcome to Poco.</h1>
        <HeroNav>
          <HeroNavLinkConatainer>
            <HeroLinkContent>
              <div>Online Ordering</div>
              <a onClick={handleClick} class="cta">Order Now</a>
            </HeroLinkContent>
          </HeroNavLinkConatainer>
          <HeroNavLinkConatainer>
            <HeroLinkContent>
              <div>Carryout & Reservations</div>
              <a href="tel:419-931-0281">Phone</a>
            </HeroLinkContent>
          </HeroNavLinkConatainer>

          <HeroNavLinkConatainer>
            <HeroLinkContent>
              <div>View Our Menu</div>
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
