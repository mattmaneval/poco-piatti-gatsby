import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/_index.scss"

const Catering = () => (
  <Layout>
    <SEO title="Catering" />
    <div className="all-catering wrap">
    <div className="menu-category">
      <div className="menu-category-type">
        <h1>Packages</h1>
      </div>
      <div className="menu-category-items">
        <div className="menu-category-item">
          <h5><span>Package 1</span><span className="menu-category-item__price">10 per person</span></h5>
          <p>Hummous, Markouk Chicken Wraps, Ara-yes Halabi.</p>
        </div>
        <div className="menu-category-item">
          <h5>Package 2<span className="menu-category-item__price">14 per person</span></h5>
          <p>Hummous, Fatoosh, Grape Leaves, Shish Tawook.</p>
        </div>
        <div className="menu-category-item">
          <h5>Package 3<span className="menu-category-item__price">19 per person</span></h5>
          <p>Hummous, Fatoosh, Beef Tenderloin Shish Kabob, Shish Tawook.</p>
        </div>
        <div className="menu-category-item">
          <h5>Package 4<span className="menu-category-item__price">23 per person</span></h5>
          <p>Hummous, Fatoosh, Grape Leaves, Ara-yes Halabi, Beef Shish Kabob, Shish Tawook.</p>
        </div>
        <div className="menu-category-item">
          <h5>Package 5<span className="menu-category-item__price">37 per person</span></h5>
          <p>Hummous, Feta Dip, Fatoosh, Tabouli, Grape Leaves, Ara-yes, Chicken Wraps, Beef Tenderloin Shish Kabob,
            Shish Kafta, Chicken Shish Kabob.</p>
        </div>
        <div className="menu-category-item">
          <h5>Package 6<span className="menu-category-item__price">42 per person</span></h5>
          <p>Hummous, Feta Dip, Fatoosh, Grape Leaves, Brussel Sprouts,
            Cauliflower, Sauteed Mushrooms, Lamb Chops, Beef Tenderloin
            Shish Kabob, Chicken Shish Kabob.</p>
        </div>
        <div className="menu-category-item">
          <h5>Deluxe Package<span className="menu-category-item__price">50 per person</span></h5>
          <p>Hummous, Feta Dip, Vegetable Tray, Fatoosh, Greek Salad,
            Grape Leaves, Brussel Sprouts, Cauliflower, Sauteed Mushrooms,
            Greek Potatoes, Lamb Chops, Whole Beef Tenderloin Filet.</p>
        </div>
        <div className="menu-category-item">
          <h5>Vegetarian Package<span className="menu-category-item__price">25 per person</span></h5>
          <p>Hummous, Fatoosh, Veggie Grape Leaves, Brussel Sprouts,
            Cauliflower, Mujadara, Sauteed Mushrooms, Veggie Shish Kabob.</p>
        </div>
        <div className="menu-category-item">
          <h5>Gluten-Free Package<span className="menu-category-item__price">16 per person</span></h5>
          <p>Hummous, Gluten-Free Bread, Greek Salad, Grape Leaves, Chicken Shish Kabob.</p>
        </div>
        <div className="menu-category-item">
          <p>* Packages are intended to be guides. Any and all items may be substituted and
          are sugject to price changes. All packages are served with pita bread and rice.
          All regular menu items are available for pricing and other packages are available
          upon request.</p>
        </div>
      </div>
    </div>


    <div className="menu-category">
      <div className="menu-category-type">
        <h1>A La Carte</h1>
      </div>
      <div className="menu-category-items">
        <div className="menu-category-item">
          <h5><span>Vegetable Tray</span><span className="menu-category-item__price">30</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Hummous</span><span className="menu-category-item__price">35</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Roasted Garlic Feta Dip</span><span className="menu-category-item__price">60</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Lebanee</span><span className="menu-category-item__price">35</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Fatoosh, Greek Salad, Tabouli</span><span className="menu-category-item__price">45</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Grape Leaves</span><span className="menu-category-item__price">30</span></h5>
          <p>40 pieces</p>
        </div>
        <div className="menu-category-item">
          <h5><span>Mujadra</span><span className="menu-category-item__price">45</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Sauteed Mushrooms</span><span className="menu-category-item__price">50</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Brussel Sprouts</span><span className="menu-category-item__price">50</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Roasted Cauliflower</span><span className="menu-category-item__price">50</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Lubia Bi Zeit</span><span className="menu-category-item__price">50</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Markouk Chicken Wraps</span><span className="menu-category-item__price">50</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Ara-yes Halabi</span><span className="menu-category-item__price">50</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Moussaka</span><span className="menu-category-item__price">75</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Kibbe Nayee (raw)</span><span className="menu-category-item__price">90</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Shrimp Asti-Spumante</span><span className="menu-category-item__price">130</span></h5>
          <p>60 pieces.</p>
        </div>
        <div className="menu-category-item">
          <h5><span>Thai Shrimp 'Lasagna'</span><span className="menu-category-item__price">130</span></h5>
          <p>60 pieces</p>
        </div>
        <div className="menu-category-item">
          <h5><span>Shrimp Saganaki</span><span className="menu-category-item__price">130</span></h5>
          <p>60 pieces</p>
        </div>
        <div className="menu-category-item">
          <h5><span>Grilled Baby Lamb Chops</span><span className="menu-category-item__price">140</span></h5>
          <p>40 pieces.</p>
        </div>
        <div className="menu-category-item">
          <h5><span>Beef Tenderloin Shish Kabob</span><span className="menu-category-item__price">175</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Shish Tawook</span><span className="menu-category-item__price">125</span></h5>
          <p>Half pan</p>
        </div>
        <div className="menu-category-item">
          <h5><span>Whole Beef Tenderloin Filets</span><span className="menu-category-item__price">200</span></h5>
          <p></p>
        </div>
        <div className="menu-category-item">
          <h5><span>Dessert Platter </span><span className="menu-category-item__price">75</span></h5>
          <p>Baklava and Brownies</p>
        </div>
        <div className="menu-category-item">
          <p>* A La Carte items are for 20 - 25 people. When adding two a la carte
          items to a package a pitcher of Poco Piatti's famous Sangria will be
          included.</p>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default Catering
