import React from 'react';
import bar from '../images/bar.jpg';
import IMG_0049 from '../images/IMG_0049.jpg';
import FoodBackground from '../images/FoodBackground.png';
import IMG_0198 from '../images/IMG_0198.jpg';
import DSC04757 from '../images/DSC04757.jpg';
import foodtruck from '../images/foodtruck.jpg';
import { Link } from "gatsby";

const MarqueeNav = () => (
  <section class="marquee-nav">

    <nav class="menu wrap">

			<div class="menu__item">
        <a href="#popup" class="menu__item-link">Order</a>

			</div>


			<div class="menu__item">
				<a  class="menu__item-link">Menu</a>
				<img class="menu__item-img" src={DSC04757} alt="Some image"/>
			</div>

			<div class="menu__item">
				<a  class="menu__item-link">Catering</a>
				<img class="menu__item-img" src={foodtruck} alt="Some image"/>
			</div>
			<div class="menu__item">
				<a class="menu__item-link">Private Events</a>
				<img class="menu__item-img" src={IMG_0049} alt="Some image"/>
      </div>
			<div class="menu__item">
				<a class="menu__item-link">About</a>
				<img class="menu__item-img" src={IMG_0198} alt="Some image"/>
			</div>
			<div class="menu__item">
				<a class="menu__item-link">Contact</a>
			</div>
		</nav>
  </section>
);

export default MarqueeNav;
