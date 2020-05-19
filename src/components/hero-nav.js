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
				<Link to="/" class="menu__item-link" activeClassName="active">Home</Link>
			</div>

			<div class="menu__item">
				<Link to="/Menu/" class="menu__item-link" activeClassName="active">Menu</Link>
			</div>

			<div class="menu__item">
				<Link to="/Catering/" class="menu__item-link" activeClassName="active">Catering</Link>
			</div>

			<div class="menu__item">
				<Link to="/PrivateEvents/" class="menu__item-link" activeClassName="active">Private Events</Link>
      </div>

			<div class="menu__item">
				<Link to="/About/" class="menu__item-link" activeClassName="active">About</Link>
			</div>

			<div class="menu__item">
				<Link to="/Contact/" class="menu__item-link" activeClassName="active">Contact</Link>
			</div>

		</nav>
  </section>
);

export default HeroNav;
