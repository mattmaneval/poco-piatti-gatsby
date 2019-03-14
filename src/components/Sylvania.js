import React from 'react';

const Sylvania = () => (
  <div className="Sylvania">
    <div className="Location">
      <h1>Sylvania</h1>
      <span className="Underline"></span>
      <p>6710 W Central Ave #1<br />Toledo, Ohio</p>
      <h3>419-720-8028</h3>
    </div>
    <div className="Hours">
      <section className="Weekdays">
        <h4>Mon.</h4>
        <h4>Tue.</h4>
        <h4>Wed.</h4>
        <h4>Thu.</h4>
        <h4>Fri.</h4>
        <h4>Sat.</h4>
        <h4>Sun.</h4>
      </section>
      <section className="Weekends">
        <h4>11:30 AM - Close</h4>
        <h4>11:30 AM - Close</h4>
        <h4>11:30 AM - Close</h4>
        <h4>11:30 AM - Close</h4>
        <h4>11:30 AM - Close</h4>
        <h4>4:00 PM - Close</h4>
        <h4>Closed</h4>
      </section>
    </div>
  </div>
);

export default Sylvania;
