import React from 'react';
import IMG_0049 from '../images/IMG_0049.jpg';
import IMG_0198 from '../images/IMG_0198.jpg';
import IMG_0177 from '../images/IMG_0177.jpg';
import DSC04757 from '../images/DSC04757.jpg';
import foodtruck from '../images/foodtruck.jpg';
import chalkboard from '../images/chalkboard.jpeg';
import hummusAndSalad from '../images/hummusAndSalad.jpeg';
import { Link } from "gatsby";

const HeroNav = () => (
  <nav class="menu">
  <div class="">
    <div class="menu__item">
      <Link to="/" class="menu__item-link">Poco Piatti</Link>
      <img class="menu__item-img" src={chalkboard} alt="Some image"/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Poco Piatti</span>
          <span>Poco Piatti</span>
          <span>Poco Piatti</span>
          <span>Poco Piatti</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <Link to="/Menu/" class="menu__item-link">Menu</Link>
      <img class="menu__item-img" src={hummusAndSalad} alt="Some image"/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Menu</span>
          <span>Menu</span>
          <span>Menu</span>
          <span>Menu</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <Link to="/Catering/" class="menu__item-link">Catering</Link>
      <img class="menu__item-img" src={foodtruck} alt="Some image"/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Catering</span>
          <span>Catering</span>
          <span>Catering</span>
          <span>Catering</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <Link to="/PrivateEvents/" class="menu__item-link">Private Events</Link>
      <img class="menu__item-img" src={IMG_0049} alt="Some image"/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Private Events</span>
          <span>Private Events</span>
          <span>Private Events</span>
          <span>Private Events</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <Link to="/About/" class="menu__item-link">FAQ</Link>
      <img class="menu__item-img" src={IMG_0198} alt="Some image"/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>FAQ</span>
          <span>FAQ</span>
          <span>FAQ</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <Link to="/Contact/" class="menu__item-link">Contact</Link>
      <img class="menu__item-img" src={IMG_0177} alt="Some image"/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Contact</span>
          <span>Contact</span>
          <span>Contact</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
    </div>
  </nav>
);

export default HeroNav;
