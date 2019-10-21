import React from 'react';
import "../sass/_OnlineOrdering.scss";

const OnlineOrdering = () => (
  <div className="OnlineOrdering">
    <div className="OnlineOrderingWrap">
      <div className="OnlineOrderingLinks">
        <button>
          <a href="tel:419-931-0281">Reservations & Carryout <br />419-931-0281</a></button>
        <button><a href="https://red-fork.com/PocoPiattiPerrysburg">Online Ordering Perrysburg</a></button>
        <button><a href="https://red-fork.com/PocoPiattiCentral">Online Ordering Sylvania</a></button>
        <button><a href="https://red-fork.com/PocoPiattiDowntown">Online Ordering Downtown</a></button>
      </div>
    </div>
  </div>
);

export default OnlineOrdering;
