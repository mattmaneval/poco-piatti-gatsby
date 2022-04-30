import React, { useState } from 'react';
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

function ThePocoExperience() {
  return (
    <>
    <section class="home-hero">
      <div class="wrap">

        <h1>The Poco Experience</h1>
        <p>Poco Piatti means "small plates." Here, you have the opportunity to
          experience the many flavors of the mediterranean! We strive to create
          dishes that are unique and healthy using only the most fresh and best
          quality ingredients. So share the small, or large, plates with your
          table and enjoy!
        </p>
      </div>
    </section>
    </>
  );
}

export default ThePocoExperience;
