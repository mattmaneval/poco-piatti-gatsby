import React from 'react';

const Salads = () => (
  <div className="menu-category">
    <div className="menu-category-type">
      <h1>Salads</h1>
      <span className="line"></span>
    </div>
    <div className="menu-category-items">
      <div className="menu-category-item">
        <h5>Greek Salad<span className="menu-category-item__price">Sm 6 Lg 11</span></h5>
        <p>Lettuce, tomato, cucumber, onion, peppers, olives, feta.</p>
      </div>
      <div className="menu-category-item">
        <h5>Fatoosh<span className="menu-category-item__price">Sm 7 Lg 12</span></h5>
        <p>Tomato, cucumber, peppers, onion, pita chips, sumac, lemon and olive oil.</p>
      </div>
      <div className="menu-category-item">
        <h5>Mashgara Tabouli<span className="menu-category-item__price">Sm 6 Lg 10</span></h5>
        <p>Parsley, tomato, cucumber, onion, mint, cracked wheat, lemon and olive oil.</p>
      </div>
      <div className="menu-category-item">
        <h5>Falafel Salad<span className="menu-category-item__price">Sm 6 Lg 11</span></h5>
        <p>Falafel patties, tomato, cucumber, radish, pickle, onion, tahini sauce.</p>
      </div>
      <div className="menu-category-item">
        <h5>Artichoke Salad<span className="menu-category-item__price">Sm 7 Lg 12</span></h5>
        <p>Artichoke hearts, hearts of palm, radish, grape tomato, spring mix, lemon feta vinaigrette.</p>
      </div>
      <div className="menu-category-item">
        <h5>Poco House Salad<span className="menu-category-item__price">Sm 5 Lg 9</span></h5>
        <p>Spring mix, red onion, candied pecans, grape tomato, raspberry vinaigrette.</p>
      </div>
      <div className="menu-category-item">
        <h5>Roasted Beet Salad<span className="menu-category-item__price">Sm 7 Lg 12</span></h5>
        <p>Spring mix, roasted beets, carrots, red pepper, red onion, goat cheese, candied pecans, balsamic dressing.</p>
      </div>
    </div>
  </div>
);

export default Salads;
