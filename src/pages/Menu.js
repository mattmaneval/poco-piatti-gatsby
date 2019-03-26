import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/_Menu.scss"
import Banner from "../components/Banner"

class Menu extends Component {
  render() {
    return (
      <Layout>
      <Banner />

    <div className="menu">
      <div className="menu-wrap">
        <div className="column-one">
          <section className="column-wrap">
          <div className="title">
            <h1>seafood</h1>
            <span className="underline"></span>
          </div>
        <div className="food-item">
          <div className="food">
            <h3>shrimp saganaki</h3>
            <p>Sauteed with tomatoes, garlic, white wine, fresh oregano and feta.</p>
          </div>
          <div className="size">
            <h3>sm</h3>
            <h3>7</h3>
            <h3>lg</h3>
            <h3>13</h3>
          </div>
        </div>
        <div className="food-item">
          <div className="food">
            <h3>fried calamari zaatar</h3>
            <p>Zaatar encrusted and served with spicy marinara.</p>
          </div>
          <div className="size">
            <h3>sm</h3>
            <h3>6</h3>
            <h3>lg</h3>
            <h3>11</h3>
          </div>
        </div>
        <div className="food-item">
          <div className="food">
            <h3>shrimp asti-spumante</h3>
            <p>Sauteed with garlic, asti-spumante and parsley.</p>
          </div>
          <div className="size">
            <h3>sm</h3>
            <h3>7</h3>
            <h3>lg</h3>
            <h3>13</h3>
          </div>
        </div>
        <div className="food-item">
          <div className="food">
            <h3>thai shrimp 'lasagna'</h3>
            <p>Layered with crispy wontons, spicy thai and coconut basil.</p>
          </div>
          <div className="size">
            <h3>sm</h3>
            <h3>7</h3>
            <h3>lg</h3>
            <h3>13</h3>
          </div>
        </div>
        <div className="food-item">
          <div className="food">
            <h3>blue crab lump crab cakes</h3>
            <p>Served with roasted red pepper cream sauce.</p>
          </div>
          <div className="size">
            <h3>sm</h3>
            <h3>9</h3>
            <h3>lg</h3>
            <h3>17</h3>
          </div>
        </div>
        <div className="food-item">
          <div className="food">
            <h3>sumac encrusted tuna</h3>
            <p>Served with tahini and diced cucumber salad.</p>
          </div>
          <div className="size">
            <h3>sm</h3>
            <h3>9</h3>
            <h3>lg</h3>
            <h3>17</h3>
          </div>
        </div>

        <div className="title">
          <h1>vegetarian</h1>
          <span className="underline"></span>
        </div>

      <div className="food-item">
        <div className="food">
          <h3>riad's hummous b tahini</h3>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>8</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>roasted garlic feta dip</h3>
          <p>Served warm with diced tomato.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>6</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>lebanee</h3>
          <p>Yogurt with cucumbers, mint and drizzled with olive oil.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>4</h3>
          <h3>lg</h3>
          <h3>7</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>saganaki kasseri</h3>
          <p>Greek kasseri cheese flamed tableside.</p>
        </div>
        <div className="size">
          <h3>6</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>sauteed mushrooms</h3>
        </div>
        <div className="size">
          <h3>8</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>mujadara</h3>
          <p>Green lentils and rice with caramelized onions and pickles.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>8</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>lubia bi zeit</h3>
          <p>Sauteed green beans with garlic and onions in a tomato sauce.</p>
        </div>
        <div className="size">
          <h3>8</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>veggie grape leaves</h3>
          <p>Stuffed with chick peas, tomatoes, rice, onion and lemon.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>8</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>poco brussel sprouts</h3>
          <p>Covered in fig jam, mint yogurt, grapes and toasted pecans.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>roasted cauliflower</h3>
          <p>Tossed in garlic oil, tahini and fresh dill.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
      </div>
      <div className="food-item">
        <div className="food">
          <h3>stuffed portabella caps</h3>
          <p>Mushroom stuffed with a broccoli pesto and topped with pepperjack<br /> cheese and tomato.</p>
        </div>
        <div className="size">
          <h3>sm</h3>
          <h3>6</h3>
          <h3>lg</h3>
          <h3>10</h3>
        </div>
      </div>


      <div class="title">
            <h1>salads</h1>
            <span className="underline"></span>
          </div>

        <div class="food-item">
        <div class="food">
          <h3>greek salad</h3>
            <p>Tomatoes. Lettuce. Cucumber. Onions. Peppers. Olives. Feta.</p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>fatoosh</h3>
            <p>Tomatoes. Cucumbers. Peppers. Onions. Pita Chips. Sumac.<br /> Lemon and Olive Oil. </p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>Mashghara Tabouli</h3>
            <p>Parsley. Tomato. Cucumbers. Onion. Mint. Cracked Wheat.<br /> Lemon and Olive Oil.</p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>falafel salad</h3>
            <p>Falafel Patties. Tomato. Cucumber. Radish. Pickle. Onion. Tahini<br /> Sauce.</p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>6</h3>
          <h3>lg</h3>
          <h3>10</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>artichoke salad</h3>
            <p>Artichoke Hearts. Hearts of Palm. Radish. Grape Tomato. Spring Mix.<br /> Lemon Feta Vinaigrette.</p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>7</h3>
          <h3>lg</h3>
          <h3>11</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>Poco House Salad</h3>
            <p>Spring Mix. Red Onions. Candied Pecans. Grape Tomatoes. Raspberry Vinaigrette.</p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>5</h3>
          <h3>lg</h3>
          <h3>9</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>Roaseted Beet Salad</h3>
            <p>Spring Mix. Roasted Beets. Carrots. Red Peppers. Red Onions. Goat Cheese.<br /> Candied Pecans. Balsamic Dressing. </p>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>7</h3>
          <h3>lg</h3>
          <h3>11</h3>
        </div>
        </div>

        <div class="title">
            <h1>Sides</h1>
            <span className="underline"></span>
          </div>

        <div class="food-item">
        <div class="food">
          <h3>Hand-Cut French Fries</h3>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>2</h3>
          <h3>lg</h3>
          <h3>4</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>rice pilaf</h3>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>2</h3>
          <h3>lg</h3>
          <h3>4</h3>
        </div>
        </div>
        <div class="food-item">
        <div class="food">
          <h3>greek potatoes</h3>
        </div>
        <div class="size">
          <h3>sm</h3>
          <h3>3</h3>
          <h3>lg</h3>
          <h3>6</h3>
        </div>
        </div>
      </section>
    </div>

        <div className="column-two">
          <section className="column-wrap-2">
          <div class="title">
            <h1>carne</h1>
            <span className="underline"></span>
          </div>

    <div class="food-item">
    <div class="food">
      <h3>poco tips</h3>
        <p>Beef or chicken sauteed with lemon and garlic. Served with hummous.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>9</h3>
      <h3>lg</h3>
      <h3>17</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>grilled baby lamb chops</h3>
        <p>Marinated in balsamic, fresh herbs and garlic, grilled to perfection.</p>
    </div>
    <div class="size">
      <h3>14</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>ara-yes halabi</h3>
        <p>Lamb, parsley and onion baked in pita. Served with hummous.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>6</h3>
      <h3>lg</h3>
      <h3>10</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>kibbee nayee (raw)</h3>
        <p>Mixed with cracked wheat and spices. Served with onion, cucumbers and radish.</p>
    </div>
    <div class="size">
      <h3>beef</h3>
      <h3>10</h3>
      <h3>lamb</h3>
      <h3>13</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>cabbage rolls</h3>
        <p>Cabbage stuffed with lamb and rice. Cooked with tomato, garlic and mint.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>6</h3>
      <h3>lg</h3>
      <h3>10</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>eggplant rolotini</h3>
        <p>Baked eggplant stuffed with ricotta and salami. Topped with marinara and our three cheese blend.</p>
    </div>
    <div class="size">
      <h3>7</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>markouk chicken wraps</h3>
        <p>Roasted chicken baked in markouk bread with garlic sauce and pickles.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>6</h3>
      <h3>lg</h3>
      <h3>10</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>meat grape leaves</h3>
        <p>Stuffed with ground beef, lamb and rice. Cooked with lemon juice and mint.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>5</h3>
      <h3>lg</h3>
      <h3>9</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>chicken parmesan sliders</h3>
        <p>Spicy chicken meatballs made with homemade seasoned bread crumbs and served atop our brioche buns.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>7</h3>
      <h3>lg</h3>
      <h3>13</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>lamb sliders</h3>
        <p>Grilled lamb sliders with a caramelized onion cream cheese and fresh arugula on brioche.</p>
    </div>
    <div class="size">
      <h3>sm</h3>
      <h3>9</h3>
      <h3>lg</h3>
      <h3>15</h3>
    </div>
    </div>
    <div class="food-item">
    <div class="food">
      <h3>chorizo and beans</h3>
        <p>Chorizo with white beans in a spicy tomato sauce.</p>
    </div>
    <div class="size">
      <h3>8</h3>
    </div>


  <div className="title">
    <h1>big plates</h1>
    <span className="underline"></span>
  </div>
</div>
  <div className="food-item">
  <div className="food">
  <h3>poco piatti kabobs</h3>
    <p>Pick any combination of kabobs. Served over rice pilaf.</p>
  </div>
  <div className="size">
  <h3>2 for 14</h3>
  <h3>3 for 19</h3>
  <h3>4 for 25</h3>
  </div>
  <div className="food">
  <h3>beef tenderloin shish kabobs</h3>
    <p>Beef tenderloin filet butchered in house and skewered with peppers, mushrooms, tomato and onion.</p>
  </div>
  <div className="food">
  <h3>shish tawook</h3>
    <p>Chicken breast marinated and skewered with peppers and onions.</p>
  </div>
  <div className="food">
  <h3>shish kafta</h3>
    <p>Ground lamb and beef mixed with chopped parsley and onion. Charbroiled.</p>
  </div>
  <div className="food">
  <h3>vegetable kabob</h3>
    <p>Seasonal vegetables</p>
  </div>
  </div>
  <div className="food-item">
  <div className="food">
  <h3>grilled baby lamb chops</h3>
    <p>New Zealand rack marinated and charbroiled. Served over rice pilaf.</p>
  </div>
  <div className="size">
  <h3>24</h3>
  </div>
  </div>
  <div className="food-item">
  <div className="food">
  <h3>poco piatti filet</h3>
    <p>Charbroiled filet served with rice over a bed of peppers, onions and mushrooms.</p>
  </div>
  <div className="size">
  <h3>23</h3>
  </div>
  </div>
  <div className="food-item">
  <div className="food">
  <h3>lamb shank osso buco</h3>
    <p>Poco specialty served over rice pilaf with carrots, celery and tomato sauce.</p>
  </div>
  <div className="size">
  <h3>23</h3>
  </div>
  </div>
  <div className="food-item">
  <div className="food">
  <h3>mousakka</h3>
    <p>Layered eggplant, beef, bechamel,<br /> provolone and three cheese blend.</p>
  </div>
  <div className="size">
  <h3>12</h3>
  </div>
  </div>
  <div className="food-item">
  <div className="food">
  <h3>beef marsala</h3>
    <p>Tender beef tips, bell peppers, onions and mushrooms served over rice pilaf.</p>
  </div>
  <div className="size">
  <h3>14</h3>
</div>
</div>


<div class="title">
      <h1>pizza</h1>
      <span className="underline"></span>
    </div>

  <div class="food-item">
  <div class="food">
    <h3>caprese</h3>
      <p>Fresh Mozzarella. Tomato. Fresh Basil. Olive Oil.</p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
  </div>
  <div class="food-item">
  <div class="food">
    <h3>chorizo and pepperoncini</h3>
      <p>Roasted Tomato Sauce. Chorizo Sausage. Hot Peppers. Onions and<br /> Three Cheese Blend. </p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
  </div>
  <div class="food-item">
  <div class="food">
    <h3>mediterranean shrimp</h3>
      <p>Feta Cream. Sauteed Shrimp. Tomato. Roasted Peppers. Onions.<br /> Kalamata Olives. Feta.</p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
  </div>
  <div class="food-item">
  <div class="food">
    <h3>the poco piatti</h3>
      <p>Garlic Sauce. Tomato. Roasted Peppers. Onions. Kalamata Olives.<br /> Feta.</p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
  </div>
  <div class="food-item">
  <div class="food">
    <h3>italian sausage and ricotta</h3>
      <p>Spicy Italian Sausage with Ricotta Cheese and Roasted<br /> Red Peppers topped with Fresh Basil. </p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
  </div>
  <div class="food-item">
  <div class="food">
    <h3>portabella and artichoke</h3>
      <p>Goat Cheese Pesto. Caramelized Onion. Parmesan.</p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
  </div>
  <div class="food-item">
  <div class="food">
    <h3>Spinach Artichoke</h3>
      <p>Homemade Alfredo Sauce. Artichoke. Fresh Spinach. Tomato.<br /> Three Cheese Blend.</p>
  </div>
  <div class="size">
    <h3>12</h3>
  </div>
</div>
</section>

      </div>
      </div>
    </div>
  </Layout>
    );
  }
}

export default Menu;
