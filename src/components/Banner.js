import React from 'react';
import PocoPiattiLogo from '../images/PocoPiattiLogo.svg';
import './_Banner.scss';

const Banner = () => (
  <section className="Banner">
    <img src={PocoPiattiLogo} alt="Poco Piatti Logo" />
  </section>
);

export default Banner;
