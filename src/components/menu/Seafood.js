import React from 'react';

const Seafood = () => (
  <div
    data-sal="zoom-out"
    data-sal-delay="300"
    data-sal-easing="ease"
    className="menu-category"
  >
    <div className="menu-category-type">
      <h1>Seafood</h1>
      <span className="line"></span>
    </div>
    <div className="menu-category-items">
      <div className="menu-category-item">
        <h5><span>Shrimp Saganaki</span><span className="menu-category-item__price">Sm 7 Lg 13</span></h5>
        <p>Sauteed with tomatoes, garlic, white wine, fresh oregano and feta.</p>
      </div>
      <div className="menu-category-item">
        <h5>Fried Calamari Zaatar<span className="menu-category-item__price">Sm 7 Lg 13</span></h5>
        <p>Zaatar encrusted and served with spicy marinara.</p>
      </div>
      <div className="menu-category-item">
        <h5>Shrimp Asti-Spumante<span className="menu-category-item__price">Sm 7 Lg 13</span></h5>
        <p>Sauteed with garlic, asti-spumante and parsley.</p>
      </div>
      <div className="menu-category-item">
        <h5>Thai Shrimp 'Lasagna'<span className="menu-category-item__price">Sm 7 Lg 13</span></h5>
        <p>Layered with crispy wontons, spicy thai and coconut basil.</p>
      </div>
      <div className="menu-category-item">
        <h5>Blue Crab Lump Crab Cakes<span className="menu-category-item__price">Sm 9 Lg 17</span></h5>
        <p>Served with roasted red pepper cream sauce.</p>
      </div>
      <div className="menu-category-item">
        <h5>Sumac Encrusted Tuna<span className="menu-category-item__price">Sm 10 Lg 18</span></h5>
        <p>Served with tahini and diced cucumber salad.</p>
      </div>
    </div>
  </div>
);

export default Seafood;
