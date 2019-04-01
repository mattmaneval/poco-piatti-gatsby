import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/_Catering.scss"



const Catering = () => (
  <Layout>
    <SEO title="Catering" />
    <div className="Catering">
      <div className="CateringWrap">

      <div className="column-1">
      <h1>Packages</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Package 1 &mdash; 10 per person</h5>
        <p>Hummous, Markouk Chicken Wraps, Ara-yes Halabi.</p>
        <h5>Package 2 &mdash; 14 per person</h5>
        <p>Hummous, Fatoosh, Grape Leaves, Shish Tawook.</p>
        <h5>Package 3 &mdash; 19 per person</h5>
        <p>Hummous, Fatoosh, Beef Tenderloin Shish Kabob, Shish Tawook.</p>
        <h5>Package 4 &mdash; 23 per person</h5>
        <p>Hummous, Fatoosh, Grape Leaves, Ara-yes Halabi, Beef Shish Kabob, Shish Tawook.</p>
        <h5>Package 5 &mdash; 37 per person</h5>
        <p>Hummous, Feta Dip, Fatoosh, Tabouli, Grape Leaves, Ara-yes, Chicken Wraps, Beef Tenderloin Shish Kabob,
          Shish Kafta, Chicken Shish Kabob.</p>
        <h5>Package 6 &mdash; 42 per person</h5>
        <p>Hummous, Feta Dip, Fatoosh, Grape Leaves, Brussel Sprouts,
          Cauliflower, Sauteed Mushrooms, Lamb Chops, Beef Tenderloin
          Shish Kabob, Chicken Shish Kabob.</p>
        <h5>Deluxe Package &mdash; 50 per person</h5>
        <p>Hummous, Feta Dip, Vegetable Tray, Fatoosh, Greek Salad,
          Grape Leaves, Brussel Sprouts, Cauliflower, Sauteed Mushrooms,
          Greek Potatoes, Lamb Chops, Whole Beef Tenderloin Filet.</p>
        <h5>Vegetarian Package &mdash; 25 per person</h5>
        <p>Hummous, Fatoosh, Veggie Grape Leaves, Brussel Sprouts,
          Cauliflower, Mujadara, Sauteed Mushrooms, Veggie Shish Kabob.</p>
        <h5>Gluten-Free Package &mdash; 16 per person</h5>
        <p>Hummous, Gluten-Free Bread, Greek Salad, Grape Leaves, Chicken Shish Kabob.</p>
        <p>* Packages are intended to be guides. Any and all items may be substituted and
        are sugject to price changes. All packages are served with pita bread and rice.
        All regular menu items are available for pricing and other packages are available
        upon request.</p>
      </div>
    </div>

      <div className="column-2">
      <h1>A La Carte</h1>
      <span className="Line"></span>
      <div className="Outline">
        <h5>Vegetable Tray &mdash; 30</h5>
        <h5>Hummous &mdash; 35</h5>
        <h5>Roasted Garlic Feta Dip &mdash; 60</h5>
        <h5>Lebanee &mdash; 35</h5>
        <h5>Fatoosh, Greek Salad, Tabouli &mdash; 45</h5>
        <h5>Grape Leaves &mdash; 30</h5>
        <p>40 pieces.</p>
        <h5>Mujadra &mdash; 45</h5>
        <h5>Sauteed Mushrooms &mdash; 50</h5>
        <h5>Brussel Sprouts &mdash; 50</h5>
        <h5>Roasted Cauliflower &mdash; 50</h5>
        <h5>Lubia Bi Zeit &mdash; 50</h5>
        <h5>Markouk Chicken Wraps &mdash; 50</h5>
        <h5>Ara-yes Halabi &mdash; 50</h5>
        <h5>Moussaka &mdash; 75</h5>
        <h5>Kibbe Nayee (raw) &mdash; 90</h5>
        <h5>Shrimp Asti-Spumante &mdash; 130</h5>
        <p>60 pieces.</p>
        <h5>Thai Shrimp 'Lasagna' &mdash; 130</h5>
        <p>60 pieces</p>
        <h5>Shrimp Saganaki &mdash; 130</h5>
        <p>60 pieces.</p>
        <h5>Grilled Baby Lamb Chops &mdash; 140</h5>
        <p>40 pieces.</p>
        <h5>Beef Tenderloin Shish Kabob &mdash; 125</h5>
        <h5>Shish Tawook &mdash; 125 per half-pan</h5>
        <h5>Whole Beef Tenderloin Filets &mdash; 200</h5>
        <h5>Dessert Platter &mdash; 75</h5>
        <p>Baklava and Brownies</p>
        <p>* A La Carte items are for 20 - 25 people. When adding two a la carte
        items to a package a pitcher of Poco Piatti's famous Sangria will be
        included. </p>
      </div>
    </div>
      </div>
    </div>
  </Layout>
)

export default Catering
