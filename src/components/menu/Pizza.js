import React from 'react';

const Pizza = () => (
  <div className="menu-category">
    <div className="menu-category-type">
      <h1>Pizza</h1>
      <span className="line"></span>
    </div>
    <div className="menu-category-items">
      <div className="menu-category-item">
        <h5>Caprese<span className="menu-category-item__price">12</span></h5>
        <p>Fresh Mozzarella. Tomato. Fresh Basil. Olive Oil.</p>
      </div>
      <div className="menu-category-item">
        <h5>Chorizo and Pepperoncini<span className="menu-category-item__price">12</span></h5>
        <p>Roasted tomato sauce, chorizo sausage, hot peppers, onions and three cheese blend.</p>
      </div>
      <div className="menu-category-item">
        <h5>Mediterranean Shrimp<span className="menu-category-item__price">12</span></h5>
        <p>Feta cream, sauteed shrimp, tomato, feta.</p>
      </div>
      <div className="menu-category-item">
        <h5>The Poco Piatti<span className="menu-category-item__price">12</span></h5>
        <p>Garlic sauce, tomato, roasted peppers, onion, kalamata olives, feta.</p>
      </div>
      <div className="menu-category-item">
        <h5>Italian Sausage and Ricotta<span className="menu-category-item__price">12</span></h5>
        <p>Spicy Italian Sausage with ricotta, roasted red peppers, topped with fresh basil.</p>
      </div>
      <div className="menu-category-item">
        <h5>Spinach Artichoke<span className="menu-category-item__price">12</span></h5>
        <p>Homemade alfredo sauce, artichoke, spinach, tomato, three cheese blend.</p>
      </div>
      <div className="menu-category-item">
        <h5>Portabella and Artichoke<span className="menu-category-item__price">12</span></h5>
        <p>Goat cheese pesto, portabella mushroom, artichoke, caramelized onion, three cheese blend.</p>
      </div>
    </div>
  </div>
);

export default Pizza;
