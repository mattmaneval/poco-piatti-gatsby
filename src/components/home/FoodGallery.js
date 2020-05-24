import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import bar from '../../images/bar.jpg'
import DSC04717 from '../../images/DSC04717.jpg'
import IMG_0175 from '../../images/IMG_0175.jpg'

export default () => (
  <div className="food-gallery wrap">
    <Carousel centerMode={true} emulateTouch={true} dynamicHeight={true} showIndicators={false} showStatus={false} swipeable={true} showArrows={true} infiniteLoop={true} autoPlay={true}>
        <div>
          <img alt="" src={bar} />
        </div>
        <div>
          <img alt="" src={DSC04717} />
        </div>
        <div>
          <img alt="" src={IMG_0175} />
        </div>
    </Carousel>
  </div>
);
