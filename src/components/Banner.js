import React from 'react';
import PocoPiattiLogo from '../images/PocoPiattiLogo.svg';
import './_Banner.scss';

const Banner = () => (
  <div className="Banner">
    <section>
      <img src={PocoPiattiLogo} alt="Poco Piatti Logo" />
    </section>
  </div>
);

export default Banner;
