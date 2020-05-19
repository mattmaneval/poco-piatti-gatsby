import React from 'react';
import IMG_0049 from '../images/IMG_0049.jpg';
import IMG_0198 from '../images/IMG_0198.jpg';
import DSC04757 from '../images/DSC04757.jpg';
import foodtruck from '../images/foodtruck.jpg';
import { Link } from "gatsby";

const HeroNav = () => (
  <section class="marquee-nav">
    <nav class="menu wrap">

			<div class="menu__item">
        <a href="#popup" class="menu__item-link">Order</a>
			</div>


			<div class="menu__item">
				<Link to="/Menu/" class="menu__item-link">Menu</Link>
				<img class="menu__item-img" src={DSC04757} alt="Some image"/>
			</div>

			<div class="menu__item">
				<Link to="/Catering/" class="menu__item-link">Catering</Link>
				<img class="menu__item-img" src={foodtruck} alt="Some image"/>
			</div>

			<div class="menu__item">
				<Link to="/PrivateEvents/" class="menu__item-link">Private Events</Link>
				<img class="menu__item-img" src={IMG_0049} alt="Some image"/>
      </div>

			<div class="menu__item">
				<Link to="/About/" class="menu__item-link">About</Link>
				<img class="menu__item-img" src={IMG_0198} alt="Some image"/>
			</div>

			<div class="menu__item">
				<Link to="/Contact/" class="menu__item-link">Contact</Link>
			</div>

		</nav>
  </section>
);

export default HeroNav;
