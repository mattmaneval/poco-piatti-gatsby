import React from 'react';
import bar from '../images/bar.jpg';

const MarqueeNav = () => (
  <section class="marquee-nav">

    <nav class="menu wrap">

			<div class="menu__item">
				<a class="menu__item-link">Order</a>
				<img class="menu__item-img" src={bar} alt="Some image"/>
			</div>


			<div class="menu__item">

				<a href="/menu/" to="/Menu/" class="menu__item-link">Menu</a>

				<img class="menu__item-img" src={bar} alt="Some image"/>
			</div>

			<div class="menu__item">
				<a class="menu__item-link">Catering</a>
				<img class="menu__item-img" src="img/2.jpg" alt="Some image"/>
			</div>
			<div class="menu__item">
				<a class="menu__item-link">Private Events</a>
				<img class="menu__item-img" src="img/3.jpg" alt="Some image"/>
      </div>
			<div class="menu__item">
				<a class="menu__item-link">About</a>
				<img class="menu__item-img" src="img/4.jpg" alt="Some image"/>
			</div>
			<div class="menu__item">
				<a class="menu__item-link">Contact</a>
				<img class="menu__item-img" src="img/5.jpg" alt="Some image"/>
			</div>
		</nav>
  </section>
);

export default MarqueeNav;
