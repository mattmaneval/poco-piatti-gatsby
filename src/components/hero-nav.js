import React from 'react';

const MarqueeNav = () => (

<main>
  <nav class="menu wrap">
    <div class="menu__item">
      <a href="https://www.google.com/" class="menu__item-link">Menu</a>
      <img class="menu__item-img" src="" alt="Some "/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Fatoosh Salad - </span>
          <span>Roasted Beet Salad - </span>
          <span>Artichoke Salad - </span>
          <span>Fatoosh Salad - </span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <a href="https://www.google.com/" class="menu__item-link">Catering</a>
      <img class="menu__item-img" src="" alt="Some "/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Case Studies</span>
          <span>Case Studies</span>
          <span>Case Studies</span>
          <span>Case Studies</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <a href="https://www.google.com/" class="menu__item-link">Private Events</a>
      <img class="menu__item-img" src="" alt="Some "/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Experiments</span>
          <span>Experiments</span>
          <span>Experiments</span>
          <span>Experiments</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <a href="https://www.google.com/" class="menu__item-link">About</a>
      <img class="menu__item-img" src="" alt="Some "/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>Experiments</span>
          <span>Experiments</span>
          <span>Experiments</span>
          <span>Experiments</span>
        </div>
      </div>
    </div>
    <div class="menu__item">
      <a href="https://www.google.com/" class="menu__item-link">Contact</a>
      <img class="menu__item-img" src="" alt="Some "/>
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>The Crew</span>
          <span>The Crew</span>
          <span>The Crew</span>
          <span>The Crew</span>
        </div>
      </div>
    </div>
  </nav>
</main>
);

export default MarqueeNav;
