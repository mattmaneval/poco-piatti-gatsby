import React from 'react';

const Popup = () => (

  <div>
  <div class="popup-container">
  <a href="#popup" class="cta" id="cta">
    Order Online
  </a>
  </div>
  <div class="popup" id="popup">
    <div class="popup-content">
      <div class="popup-content-top">
        <a href="#cta close" class="close">&times;</a>
      </div>
      <div class="popup-content-bottom">
        <a href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v2/online-order#!/" class="cta leave-popup">Perrysburg</a>
        <a href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v2/online-order#!/" class="cta leave-popup">Sylvania</a>
      </div>
    </div>
  </div>

  </div>
);

export default Popup;
