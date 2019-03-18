import React from 'react';
import "./_Perrysburg.scss";

const Perrysburg = () => (
  <div className="Perrysburg">
    <div className="Location">
      <h1>Perrysburg</h1>
      <span className="Underline"></span>
      <p>3155 Chappel Dr.<br />Perrysburg, Ohio</p>
      <h3>419-931-0281</h3>
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
        <p>11:30 AM - 9:00 PM</p>
        <p>11:30 AM - 9:30 PM</p>
        <p>11:30 AM - 9:30 PM</p>
        <p>11:30 AM - 9:30 PM</p>
        <p>11:30 AM - 10:30 PM</p>
        <p>11:30 AM - 10:30PM</p>
        <p>12:00 PM - 9:00PM</p>
      </section>
    </div>
  </div>
);

export default Perrysburg;
