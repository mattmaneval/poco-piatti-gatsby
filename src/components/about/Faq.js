import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space } = theme;

const Faq = () => (
  <section className="Faq">
    <div className="wrap">
      <SectionHeading text="Faq" />
      <h5>Dietary Restrictions?</h5>
        <p>We accommodate most dietary needs like gluten free, vegetarian, and vegan. Ask for our gluten free menu. Our meat is Halal.</p>
      <h5>Locations?</h5>
        <p>We have three locations: Levis Commons in Perrysburg, Central Avenue in Sylvania, and Downtown Toledo on
      Huron near Adams.</p>
      <h5>Reservations and Carryout?</h5>
        <p>For reservations and carryout orders call <a href="tel:419-931-0281">419-931-0281</a> - Perrysburg
        ext #1, Sylvania ext #2, Downtown ext #3. Or order online for easy online ordering.
        When visiting us in house, automatic gratuity may be applied to groups of 5 or more.
      </p>
      <h5>Bar Options?</h5>
        <p>We serve beer, wine, cocktails, and our famous sangria!</p>
      <h5>Kids Menu?</h5>
        <p>Ask for a cheese or pepperoni pizza.</p>
      <h5>Wifi?</h5>
        <p>Complimentary wifi is available.</p>
      <h5>Gift Certificates?</h5>
        <p>We offer gift certificates in-store at all our locations.</p>
    </div>
  </section>
)

export default Faq;
