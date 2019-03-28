import React from 'react';
import Layout from "../components/layout"
import "../components/_Menu.scss"

const Menu = () => (
  <Layout>
  <div className="Menu">
    <div className="MenuWrap">
      <h1>Seafood</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Shrimp Saganaki &mdash; Sm 7 Lg 13</h5>
        <p>Sauteed with tomatoes, garlic, white wine, fresh oregano and feta.</p>
        <h5>Fried Calamari Zaatar &mdash; Sm 6 Lg 11</h5>
        <p>Zaatar encrusted and served with spicy marinara.</p>
        <h5>Shrimp Asti-Spumante &mdash; Sm 7 Lg 13</h5>
        <p>Sauteed with garlic, asti-spumante and parsley.</p>
        <h5>Thai Shrimp 'Lasagna' &mdash; Sm 7 Lg 13</h5>
        <p>Layered with crispy wontons, spicy thai and coconut basil.</p>
        <h5>Blue Crab Lump Crab Cakes<br /> &mdash; Sm 9 Lg 17</h5>
        <p>Served with roasted red pepper cream sauce.</p>
        <h5>Sumac Encrusted Tuna &mdash; Sm 9 Lg 17</h5>
        <p>Served with tahini and diced cucumber salad.</p>
      </div>

      <h1>Vegetarian</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Riad's Hummuos B Tahini &mdash; Sm 5 Lg 9</h5>
        <p>Served with Pita.</p>
        <h5>Roasted Garlic Feta Dip &mdash; Sm 6 Lg 9</h5>
        <p>Served warm with diced tomato.</p>
        <h5>Lebanee &mdash; Sm 4 Lg 7</h5>
        <p>Yogurt with cucumber, mint and drizzled with olive oil.</p>
        <h5>Saganaki Kasseri &mdash; 6</h5>
        <p>Greek kasseri cheese flamed tableside.</p>
        <h5>Sauteed Mushrooms &mdash; 8</h5>
        <h5>Mujadra &mdash; Sm 5 Lg 8</h5>
        <p>Green lentils and rice with caramelized onions and pickles.</p>
        <h5>Lubia Bi Zeit &mdash; 8</h5>
        <p>Sauteed green beans with garlic and onions in a tomato sauce.</p>
        <h5>Veggie Grape Leaves &mdash; Sm 5 Lg 8</h5>
        <p>Stuffed with chick peas, tomatoes, rice, onion and lemon.</p>
        <h5>Poco Brussel Sprouts &mdash; Sm 5 Lg 9</h5>
        <p>Covered in fig jam, mint yogurt, grapes and toasted pecans.</p>
        <h5>Roasted Cauliflower &mdash; Sm 5 Lg 9</h5>
        <p>Tossed in garlic oil, tahini and fresh dill.</p>
        <h5>Stuffed Portabella Caps &mdash; Sm 6 Lg 10</h5>
        <p>Mushroom stuffed with a broccoli pesto and topped with pepperjack cheese and tomato.</p>
      </div>

      <h1>Carne</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Poco Tips &mdash; Sm 9 Lg 17</h5>
        <p>Beef or chicken sauteed with lemon and garlic. Served with hummous.</p>
        <h5>Grilled Baby Lamb Chops &mdash; 14</h5>
        <p>Marinated in balsamic, fresh herbs and garlic, grilled to perfection.</p>
        <h5>Ara-yes Halabi &mdash; Sm 6 Lg 10</h5>
        <p>Lamb, parsley and onion baked in pita. Served with hummous.</p>
        <h5>Kibbe Nayee (raw) &mdash; Beef 10  Lamb 13</h5>
        <p>Mixed with cracked wheat and spices. Served with onion, cucumbers and radish.</p>
        <h5>Stuffed Cabbage Rolls &mdash; Sm 6 Lg 10</h5>
        <p>Cabbage stuffed with lamb and rice. Cooked with tomato, garlic and mint.</p>
        <h5>Eggplant Rolotini &mdash; 7</h5>
        <p>Baked eggplant stuffed with ricotta and salami. Topped with marinara and our three cheese blend.</p>
        <h5>Markouk Chicken Wraps &mdash; Sm 6 Lg 10</h5>
        <p>Roasted chicken baked in markouk bread with garlic sauce and pickles.</p>
        <h5>Meat Grape Leaves &mdash; Sm 5 Lg 9</h5>
        <p>Stuffed with ground beef, lamb and rice. Cooked with lemon juice and mint.</p>
        <h5>Chicken Parmesan Sliders &mdash; Sm 7 Lg 13</h5>
        <p>Spicy chicken meatballs made with homemade seasoned bread crumbs and served atop our brioche buns.</p>
        <h5>Lamb Sliders &mdash; Sm 9 Lg 15</h5>
        <p>Grilled lamb sliders with a caramelized onion cream cheese and fresh arugula on brioche.</p>
        <h5>Chorizo and Beans &mdash; 8 </h5>
        <p>Chorizo with white beans in a spicy tomato sauce.</p>
      </div>

      <h1>Big Plates</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Poco Piatti Kabobs</h5>
        <p>2 for 14, 3 for 19, 4 for 25</p>
        <h5>Beef Tenderloin Shish Kabobs</h5>
        <p>Beef tenderloin filet butchered in house and skewered with peppers, mushrooms, tomato and onion.</p>
        <h5>Shish Tawook</h5>
        <p>Chicken breast marinated and skewered with peppers and onions.</p>
        <h5>Shish Kafta</h5>
        <p>Ground lamb and beef mixed with chopped parsley and onion. Charbroiled.</p>
        <h5>Vegetable Kabob</h5>
        <p>Seasonl Vegetables</p>
        <h5>Grilled Baby Lamb Chops &mdash; 24</h5>
        <p>New Zealand rack marinated and charbroiled. Served over rice pilaf.</p>
        <h5>Poco Piatti Filet &mdash; 23</h5>
        <p>Charbroiled filet served with rice over a bed of peppers, onions and mushrooms.</p>
        <h5>Lamb Shank Ossu Buco &mdash; 23 </h5>
        <p>Poco specialty served over rice pilaf with carrots, celery and tomato sauce.</p>
        <h5>Mousakka &mdash; 12</h5>
        <p>Layered eggplant, beef, bechamel, provolone and three cheese blend.</p>
        <h5>Beef Marsala &mdash; 14</h5>
        <p>Tender beef tips, bell peppers, onions and mushrooms served over rice pilaf.</p>
      </div>

      <h1>Pizza</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Caprese &mdash; 12</h5>
        <p>Fresh Mozzarella. Tomato. Fresh Basil. Olive Oil.</p>
        <h5>Chorizo and Pepperoncini &mdash; 12</h5>
        <p>Roasted tomato sauce, chorizo sausage, hot peppers, onions and three cheese blend.</p>
        <h5>Mediterranean Shrimp &mdash; 12</h5>
        <p>Feta cream, sauteed shrimp, tomato, feta.</p>
        <h5>The Poco Piatti &mdash; 12</h5>
        <p>Garlic sauce, tomato, roasted peppers, onion, kalamata olives, feta.</p>
        <h5>Italian Sausage and Ricotta &mdash; 12</h5>
        <p>Spicy Italian Sausage with ricotta, roasted red peppers, topped with fresh basil.</p>
        <h5>Portabella and Artichoke &mdash; 12</h5>
        <p>Homemade alfredo sauce, artichoke, spinach, tomato, three cheese blend.</p>
      </div>

      <h1>Salads</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Greek Salad &mdash; Sm 5 Lg 9</h5>
        <p>Lettuce, tomato, cucumber, onion, peppers, olives, feta.</p>
        <h5>Fatoosh &mdash; Sm 5 Lg 9</h5>
        <p>Tomato, cucumber, peppers, onion, pita chips, sumac, lemon and olive oil.</p>
        <h5>Mashgara Tabouli &mdash; Sm 5 Lg 9</h5>
        <p>Parsley, tomato, cucumber, onion, mint, cracked wheat, lemon and olive oil.</p>
        <h5>Falafel Salad &mdash; Sm 6 Lg 10</h5>
        <p>Falafel patties, tomato, cucumber, radish, pickle, onion, tahini sauce.</p>
        <h5>Artichoke Salad &mdash; Sm 7 Lg 11</h5>
        <p>Artichoke hearts, hearts of palm, radish, grape tomato, spring mix, lemon feta vinaigrette.</p>
        <h5>Poco House Salad &mdash; Sm 5 Lg 9</h5>
        <p>Spring mix, red onion, candied pecans, grape tomato, raspberry vinaigrette.</p>
        <h5>Roasted Beet Salad &mdash; Sm 7 Lg 11</h5>
        <p>Spring mix, roasted beets, carrots, red pepper, red onion, goat cheese, candied pecans, balsamic dressing.</p>
      </div>

      <h1>Accompaniments</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Hand-Cut French Fries &mdash; Sm 2 Lg 4</h5>
        <h5>Rice Pilaf &mdash; Sm 2 Lg 4</h5>
        <h5>Greek Potatoes &mdash; Sm 3 Lg 6</h5>
      </div>

    </div>
  </div>
  </Layout>
);

export default Menu;
