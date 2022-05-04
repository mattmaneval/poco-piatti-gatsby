import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import HeadingGroup from "../components/HeadingGroup/index";
import SectionHeading from "../components/SectionHeading/index";
import Cta from "../components/Cta/index";
import H2Callout from "../components/H2Callout/index";

// Images
import CateringImage from "../images/catering-image.jpg";

// Styles
import mixins from '../styles/mixins';
import theme from '../styles/theme';
import media from '../styles/media';

const { color, space, fonts } = theme;


const CateringPackage = styled.div`
  margin-bottom: ${space.space};
`;

const Catering = () => (
  <Layout absolute>
    <SEO title="Catering" />
    <main>
      <HeadingGroup
        h1Text={[<span>The Poco Experience</span>,<br />,  "Catering"]}

        imageUrl={CateringImage}
        light
      />
      <H2Callout
        titleText="Plan your event"
        h2Text={["Full service catering for ", <span>memorable</span>, " food ", <span>experiences.</span>]}
        ctaText="Order Catering"
        ctaHref="tel:419-931-0281"
      />
      <section>
        <SectionHeading text="Packages" wrap light />
        <div class="wrap">
          <CateringPackage>
            <h5>Poco Signature &mdash; 15 per person</h5>
            <p>Hummous, Fresh Pita Bread, Fatoosh, Grape Leaves, Shish Tawook, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Kabobs &mdash; 20 per person</h5>
            <p>Hummous, Fresh Pita Bread, Fatoosh, Beef Tenderloin Shish Kabob, Shish Tawook, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Mix &mdash; 25 per person</h5>
            <p>Hummous, Fresh Pita Bread, Fatoosh, Grape Leaves, Ara-yes Halabi, Beef Tenderloin Shish Kabob, Shish Tawook, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Mezza &mdash; 40 per person</h5>
            <p>Hummous, Fresh Pita Bread, Feta Dip, Fatoosh, Tabouli, Grape Leaves, Ara-yes, Chicken Wraps, Beef Tenderloin Shish Kabob, Shish Kafta, Shish Tawook, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Experience &mdash; 45 per person</h5>
            <p>Hummous, Fresh Pita Bread, Feta Dip, Fatoosh, Grape Leaves, Brussel Sprouts, Cauliflower, Sauteed  Mushrooms, Lamb Chops, Beef Tenderloin Shish Kabob, Shish Tawook, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Deluxe Package &mdash; 55 per person</h5>
            <p>Hummous, Fresh Pita Bread, Feta Dip, Vegetable Tray, Fatoosh, Greek Salad, Grape Leaves, Brussel Sprouts, Cauliflower, Sauteed Mushrooms, Greek Potatoes, Lamb Chops, Whole Beef Tenderloin Filet, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Vegetarian Package &mdash; 25 per person</h5>
            <p>Hummous, Fatoosh, Veggie Grape Leaves, Brussel Sprouts, Cauliflower, Mujadara, Sauteed Mushrooms, Veggie Shish Kabob, and Poco Rice.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Gluten-Free Package &mdash; 18 per person</h5>
            <p>Hummous, Gluten-Free Bread, Greek Salad, Grape Leaves, and Shish Tawook.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Slider Package &mdash; 18 per person</h5>
            <p>Grilled Lamb Sliders, Chicken Parmesan Sliders, Hummous, Fresh Pita Bread, and Fatoosh.</p>
          </CateringPackage>
          <CateringPackage>
            <p>* Packages are intended to be guides. Any and all items may be substituted and
            are sugject to price changes. All packages are served with pita bread and rice.
            All regular menu items are available for pricing and other packages are available
            upon request.</p>
          </CateringPackage>
        </div>
      </section>
      <section class="no-padding-top">
        <SectionHeading text="Bar Packages" wrap light />
        <div class="wrap">
          <CateringPackage>
            <h5>Poco Experience  &mdash; 2 Hours/45 per person. 3 Hours/55 per person</h5>
            <p>Top shelf liquor, 3 draft beer options, 2 domestic bottle beer options, sangria bar.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Mediterranean  &mdash; 2 Hours/30 per person. 3 Hours/40 per person</h5>
            <p>Premium liquor, 3 draft beer options, 2 import bottle beer options, sangria bar.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Sangria Bar  &mdash; 2 Hours/15 per person. 3 Hours/25 per person</h5>
            <p>White sangria, red sangria, mixed sangria.</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Brew  &mdash; 2 Hours/15 per person. 3 Hours/25 per person</h5>
            <p>3 draft beer options, 2 import bottle beer options, 2 domestic beer options.</p>
          </CateringPackage>
        </div>
      </section>
      <section class="no-padding-top">
        <SectionHeading text="A La Carte" wrap light />
        <div class="wrap">
          <CateringPackage>
            <h5>Hummous</h5>
            <p>1/2 Pan &mdash; 35 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 65 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Feta Dip</h5>
            <p>1/2 Pan &mdash; 45 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 85 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Fatoosh Salad</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Greek Salad</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco House Salad</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Artichoke Salad</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Tabouli</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Sauteed Mushrooms</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Brussel Sprouts</h5>
            <p>1/2 Pan &mdash; 50 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 90 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Roasted Cauliflower</h5>
            <p>1/2 Pan &mdash; 50 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 90 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Mujadara</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Rice</h5>
            <p>1/2 Pan &mdash; 30 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 55 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Greek Potatoes</h5>
            <p>1/2 Pan &mdash; 40 (10 - 15 ppl.)</p>
            <p>Full Pan &mdash; 75 (30 - 40 ppl.)</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Shish Tawook</h5>
            <p>10 skewers &mdash; 80</p>
            <p>20 skewers &mdash; 155</p>
            <p>30 skewers &mdash; 225</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Beef Tenderloin Kabob</h5>
            <p>10 skewers &mdash; 100</p>
            <p>20 skewers &mdash; 200</p>
            <p>30 skewers &mdash; 300</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Shish Kafta</h5>
            <p>10 skewers &mdash; 100</p>
            <p>20 skewers &mdash; 200</p>
            <p>30 skewers &mdash; 300</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Veggie Kabob</h5>
            <p>10 skewers &mdash; 70</p>
            <p>20 skewers &mdash; 140</p>
            <p>30 skewers &mdash; 210</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Shrimp Asti-Spumante</h5>
            <p>30 pieces &mdash; 75</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Thai Shrimp Lasagna</h5>
            <p>30 pieces &mdash; 75</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Shrimp Saganaki</h5>
            <p>30 pieces &mdash; 75</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Lamb Chops</h5>
            <p>20 &mdash; 90</p>
            <p>40 &mdash; 160</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Chicken Wraps</h5>
            <p>10 wraps &mdash; 40</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Ara-yes Halabi</h5>
            <p>24 pcs. &mdash; 40</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Chicken Sliders</h5>
            <p>10 &mdash; 35</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Lamb Sliders</h5>
            <p>10 &mdash; 35</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Grape Leaves</h5>
            <p>40 &mdash; 35</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Poco Filets</h5>
            <p>20 people &mdash; 250</p>
          </CateringPackage>
          <CateringPackage>
            <h5>Dessert Platter</h5>
            <p>10 people &mdash; 30</p>
            <p>20 people &mdash; 60</p>
            <p>30 people &mdash; 90</p>
          </CateringPackage>
        </div>
      </section>
    </main>
  </Layout>
)

export default Catering;
