import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import OrderModal from '../OnlineOrderModal/index';

// Images
import hummus from "../../images/hummus.png";

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space, fonts } = theme;

const HeroImage = styled.div`
  background-image: url(${hummus});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 10em;
`;




function ThePocoExperience() {
  const [modal, openModal] = useState(false);

  const handleClick = () => (modal ? openModal(false) : openModal(true));

  return (
    <section class="home-hero">
      <div class="wrap">
        <HeroImage />
        <h1>The Poco Experience</h1>
        <p>Poco Piatti means "small plates." Here, you have the opportunity to
          experience the many flavors of the mediterranean! We strive to create
          dishes that are unique and healthy using only the most fresh and best
          quality ingredients. So share the small, or large, plates with your
          table and enjoy!
        </p>
        <h6>
          <span>carryout & reservations:</span>
          <span><a href="tel:419-931-0281" class="phone" id="cta">419-931-0281</a></span>
        </h6>
        <a onClick={handleClick} class="cta">Order Online!</a>
        <OrderModal modal={modal} onClick={handleClick} />
      </div>
    </section>
  );
}

export default ThePocoExperience;
