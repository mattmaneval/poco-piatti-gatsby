import React from 'react';

const Popup = () => (
  <div className="popup" id="popup">
    <div className="popup-content">
      <a href="#cta close" className="close">&times;</a>
      <h6>Choose your pickup location for online ordering.</h6>
      <div className="popup-content-bottom">
        <a href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v2/online-order#!/" className="cta leave-popup">Perrysburg</a>
        <a href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v2/online-order#!/" className="cta leave-popup">Sylvania</a>
      </div>
      <h6>Or call <a href="tel:419-931-0281" className="phone" id="cta">419-931-0281</a> for any location.</h6>
    </div>
  </div>
);

export default Popup;
