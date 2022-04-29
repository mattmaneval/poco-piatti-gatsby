import React, { useState } from 'react';
import OrderModal from '../OnlineOrderModal/index';


function ThePocoExperience() {
  const [modal, openModal] = useState(false);

  const handleClick = () => (modal ? openModal(false) : openModal(true));

  return (
    <section class="home-hero">
      <div class="wrap">
        <h1>Toledo's Only Mediterranean Tapas Bar</h1>
        <h6>
          <span>carryout & reservations:</span>
          <span><a href="tel:419-931-0281" class="phone" id="cta">419-931-0281</a></span>
        </h6>
        <a onClick={handleClick} class="cta">Order Online!</a>
        <OrderModal modal={modal} onClick={handleClick} />
      </div>
    </section>
  );
}

export default ThePocoExperience;
