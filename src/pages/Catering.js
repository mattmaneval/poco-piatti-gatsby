import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/_index.scss"

const Catering = () => (
  <Layout>
    <SEO title="Catering" />
    <div className="Catering">
      <div className="wrap">
      <div className="column-1">
      <h1>Packages</h1>
        <div>
          <h5>Poco Wraps &mdash; 10 per person</h5>
          <p>Hummous, Markouk Chicken Wraps, Ara-yes Halabi.</p>
        </div>
        <div>
          <h5>Poco Signature &mdash; 14 per person</h5>
          <p>Hummous, Fatoosh, Grape Leaves, Shish Tawook, Poco Rice.</p>
        </div>
        <div>
          <h5>Poco Kabobs &mdash; 19 per person</h5>
          <p>Hummous, Fatoosh, Beef Tenderloin Shish Kabob, Shish Tawook, Poco Rice.</p>
        </div>
        <div>
          <h5>Poco Mix &mdash; 23 per person</h5>
          <p>Hummous, Fatoosh, Grape Leaves, Ara-yes Halabi, Beef Shish Kabob, Shish Tawook, Poco Rice.</p>
        </div>
        <div>
          <h5>Poco Mezza &mdash; 37 per person</h5>
          <p>Hummous, Feta Dip, Fatoosh, Tabouli, Grape Leaves, Ara-yes, Chicken Wraps, Beef Tenderloin Shish Kabob,
          Shish Kafta, Chicken Shish Kabob, Poco Rice.</p>
        </div>
        <div>
          <h5>Poco Experience &mdash; 42 per person</h5>
          <p>Hummous, Feta Dip, Fatoosh, Grape Leaves, Brussel Sprouts,
          Cauliflower, Sauteed Mushrooms, Lamb Chops, Beef Tenderloin
          Shish Kabob, Chicken Shish Kabob, Poco Rice.</p>
        </div>
        <div>
          <h5>Deluxe Package &mdash; 50 per person</h5>
          <p>Hummous, Feta Dip, Vegetable Tray, Fatoosh, Greek Salad,
          Grape Leaves, Brussel Sprouts, Cauliflower, Sauteed Mushrooms,
          Greek Potatoes, Lamb Chops, Whole Beef Tenderloin Filet.</p>
        </div>
        <div>
          <h5>Vegetarian Package &mdash; 25 per person</h5>
          <p>Hummous, Fatoosh, Veggie Grape Leaves, Brussel Sprouts,
          Cauliflower, Mujadara, Sauteed Mushrooms, Veggie Shish Kabob.</p>
        </div>
        <div>
          <h5>Gluten-Free Package &mdash; 16 per person</h5>
          <p>Hummous, Gluten-Free Bread, Greek Salad, Grape Leaves, Chicken Shish Kabob.</p>
        </div>
        <div>
          <h5>Slider Package &mdash; 16 per person</h5>
          <p>Grilled Lamb Sliders, Chicken Parmesan Sliders, Hummus, Fattoush, Fresh Pita Bread.</p>
        </div>
        <div>
          <p>* Packages are intended to be guides. Any and all items may be substituted and
          are sugject to price changes. All packages are served with pita bread and rice.
          All regular menu items are available for pricing and other packages are available
          upon request.</p>
        </div>
    </div>

    <div class="column-2">
    <h1>Bar Packages</h1>
      <div>
        <h5>Poco Experience  &mdash; 2 Hours/45 per person. 3 Hours/55 per person</h5>
        <p>Top shelf liquor, 3 draft beer options, 2 domestic bottle beer options, sangria bar.</p>
      </div>
      <div>
        <h5>Poco Mediterranean  &mdash; 2 Hours/30 per person. 3 Hours/40 per person</h5>
        <p>Premium liquor, 3 draft beer options, 2 import bottle beer options, sangria bar.</p>
      </div>
      <div>
        <h5>Sangria Bar  &mdash; 2 Hours/15 per person. 3 Hours/25 per person</h5>
        <p>White sangria, red sangria, mixed sangria.</p>
      </div>
      <div>
        <h5>Poco Brew  &mdash; 2 Hours/45 per person. 3 Hours/55 per person</h5>
        <p>3 draft beer options, 2 import bottle beer options, 2 domestic beer options.</p>
      </div>
    </div>

      <div className="column-3">
      <h1>A La Carte</h1>

      <h5>Hummus</h5>
      <p>10 - 15 people &mdash; 20</p>
      <p>20 - 25 people &mdash; 40</p>
      <p>45 - 50 people &mdash; 80</p>
      <h5>Feta Dip</h5>
      <p>10 - 15 people &mdash; 30</p>
      <p>20 - 25 people &mdash; 60</p>
      <p>45 - 50 people &mdash; 120</p>
      <h5>Fatoosh Salad</h5>
      <p>10 - 15 people &mdash; 25</p>
      <p>20 - 25 people &mdash; 45</p>
      <p>45 - 50 people &mdash; 85</p>
      <h5>Greek Salad</h5>
      <p>10 - 15 people &mdash; 25</p>
      <p>20 - 25 people &mdash; 45</p>
      <p>45 - 50 people &mdash; 85</p>
      <h5>Poco House Salad</h5>
      <p>10 - 15 people &mdash; 25</p>
      <p>20 - 25 people &mdash; 45</p>
      <p>45 - 50 people &mdash; 85</p>
      <h5>Artichoke Salad</h5>
      <p>10 - 15 people &mdash; 30</p>
      <p>20 - 25 people &mdash; 50</p>
      <p>45 - 50 people &mdash; 90</p>
      <h5>Tabouli</h5>
      <p>10 - 15 people &mdash; 30</p>
      <p>20 - 25 people &mdash; 50</p>
      <p>45 - 50 people &mdash; 90</p>
      <h5>Sauteed Mushrooms</h5>
      <p>10 - 15 people &mdash; 30</p>
      <p>20 - 25 people &mdash; 50</p>
      <p>45 - 50 people &mdash; 90</p>
      <h5>Brussel Sprouts</h5>
      <p>10 - 15 people &mdash; 35</p>
      <p>20 - 25 people &mdash; 55</p>
      <p>45 - 50 people &mdash; 95</p>
      <h5>Roasted Cauliflower</h5>
      <p>10 - 15 people &mdash; 35</p>
      <p>20 - 25 people &mdash; 55</p>
      <p>45 - 50 people &mdash; 95</p>
      <h5>Mujadara</h5>
      <p>10 - 15 people &mdash; 25</p>
      <p>20 - 25 people &mdash; 45</p>
      <p>45 - 50 people &mdash; 85</p>
      <h5>Poco Rice</h5>
      <p>10 - 15 people &mdash; 25</p>
      <p>20 - 25 people &mdash; 45</p>
      <p>45 - 50 people &mdash; 85</p>
      <h5>Greek Potatoes</h5>
      <p>10 - 15 people &mdash; 25</p>
      <p>20 - 25 people &mdash; 45</p>
      <p>45 - 50 people &mdash; 85</p>
      <h5>Shish Tawook</h5>
        <p>10 skewers &mdash; 70</p>
        <p>20 skewers &mdash; 140</p>
        <p>30 skewers &mdash; 200</p>
      <h5>Beef Tenderloin Kabob</h5>
        <p>10 skewers &mdash; 100</p>
        <p>20 skewers &mdash; 200</p>
        <p>30 skewers &mdash; 300</p>
      <h5>Shish Kafta</h5>
        <p>10 skewers &mdash; 100</p>
        <p>20 skewers &mdash; 200</p>
        <p>30 skewers &mdash; 300</p>
      <h5>Veggie Kabob</h5>
        <p>10 skewers &mdash; 100</p>
        <p>20 skewers &mdash; 200</p>
        <p>30 skewers &mdash; 300</p>
      <h5>Shrimp Asti-Spumante</h5>
        <p>30 pieces &mdash; 65</p>
        <p>80 pieces &mdash; 170</p>
        <p>140 pieces &mdash; 300</p>
      <h5>Thai Shrimp Lasagna</h5>
        <p>30 pieces &mdash; 65</p>
        <p>80 pieces &mdash; 170</p>
        <p>140 pieces &mdash; 300</p>
      <h5>Shrimp Saganaki</h5>
        <p>30 pieces &mdash; 65</p>
        <p>80 pieces &mdash; 170</p>
        <p>140 pieces &mdash; 300</p>
      <h5>Lamb Chops</h5>
        <p>20 &mdash; 70</p>
        <p>30 &mdash; 105</p>
        <p>40 &mdash; 140</p>
      <h5>Chicken Wraps</h5>
        <p>10 wraps &mdash; 30</p>
        <p>15 wraps &mdash; 45</p>
        <p>30 wraps &mdash; 90</p>
      <h5>Chicken Sliders</h5>
        <p>10 &mdash; 30</p>
        <p>15 &mdash; 45</p>
        <p>30 &mdash; 90</p>
      <h5>Lamb Sliders</h5>
        <p>10 &mdash; 30</p>
        <p>15 &mdash; 45</p>
        <p>30 &mdash; 90</p>
      <h5>Grape Leaves</h5>
        <p>40 &mdash; 30</p>
        <p>90 &mdash; 90</p>
        <p>150 &mdash; 150</p>
      <h5>Poco Filets</h5>
        <p>20 people &mdash; 200</p>

      <h5>Dessert Platter</h5>
        <p>10 people &mdash; 30</p>
        <p>20 people &mdash; 20</p>
        <p>30 people &mdash; 30</p>

    </div>
      </div>
    </div>
  </Layout>
)

export default Catering;
