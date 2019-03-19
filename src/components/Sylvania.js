import React from 'react';
import "./_Sylvania.scss";

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
        <p>Mon.</p>
        <p>Tue.</p>
        <p>Wed.</p>
        <p>Thu.</p>
        <p>Fri.</p>
        <p>Sat.</p>
        <p>Sun.</p>
      </section>
      <section className="Weekends">
        <p>11:30 am - Close</p>
        <p>11:30 am - Close</p>
        <p>11:30 am - Close</p>
        <p>11:30 am - Close</p>
        <p>11:30 am - Close</p>
        <p>4:00 pm - Close</p>
        <p>Closed</p>
      </section>
    </div>
  </div>
);

export default Sylvania;
