import React from 'react';

const Popup = () => (
  <div class="popup" id="popup">
    <div class="popup-content">
      <a href="#cta close" class="close">&times;</a>
      <h6>Choose your pickup location for online ordering.</h6>
      <div class="popup-content-bottom">
        <a href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v2/online-order#!/" class="cta leave-popup">Perrysburg</a>
        <a href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v2/online-order#!/" class="cta leave-popup">Sylvania</a>
      </div>
      <h6>Or call <a href="tel:419-931-0281" class="phone" id="cta">419-931-0281</a> for any location.</h6>
    </div>
  </div>
);

export default Popup;
