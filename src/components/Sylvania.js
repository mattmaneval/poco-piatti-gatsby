import React from 'react';
import "./_Sylvania.scss";

const Sylvania = () => (
  <div className="Sylvania">
    <div className="Location">
      <h1>Sylvania</h1>
      <span className="Underline"></span>
      <p>6710 W Central Ave #1<br />Toledo, Ohio</p>
      <a href="tel:419-720-8028"><h3>419-720-8028</h3></a>
    </div>
    <div className="Hours">
      <section className="Weekdays">
        <p>Mon - Fri, 11:30 am - Close</p>
        <p>Sat, 4 pm - Close</p>
        <p>Sun, Closed</p>
      </section>
    </div>
  </div>
);

export default Sylvania;
