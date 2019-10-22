import React from "react"
import "../sass/_Faq.scss"

const Faq = () => (
    <div className="Faq">
    <div className="FaqWrap">
      <h1>Frequently Asked Questions</h1>
      <span className="line"></span>
        <h5>Dietary Restrictions?</h5>
          <p>We accommodate most dietary needs like gluten free, vegetarian, and vegan. Ask for our gluten free menu. </p>
          <p>Our meat is Halal.</p>
        <h5>Locations?</h5>
          <p>We have three locations: Levis Commons in Perrysburg, Central Avenue in Sylvania, and Downtown Toledo on 
            Huron near Adams.</p>
        <h5>Reservations and Carryout?</h5>
          <p>For reservations at Perrysburg location call: <a href="tel:419-931-0281">419-931-0281</a></p>
          <p>For reservations at Sylvania location call: <a href="tel:419-931-0281">419-931-0281</a></p>
          <p>For reservations at Downtown location call: <a href="tel:419-931-0281">419-931-0281</a></p>
          <p>Automatic gratuity may be applied to groups of 5 or more.</p>
        <h5>Bar Options?</h5>
          <p>We serve beer, wine, cocktails, and our famous sangria!</p>
        <h5>Wifi?</h5>
          <p>Complimentary wifi is available.</p>
        <h5>Gift Certificates?</h5>
          <p>We offer gift certificates in-store at all our locations.</p>
      </div>
    </div>
)

export default Faq;
