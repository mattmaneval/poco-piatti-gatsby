import React from 'react';
import "./_Perrysburg.scss";

const Perrysburg = () => (
  <div className="Perrysburg">
    <div className="Location">
      <h1>Perrysburg</h1>
      <span className="Underline"></span>
      <p>3155 Chappel Dr.<br />Perrysburg, Ohio</p>
      <h6>Carryout & Reservations</h6>
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
        <p>11:30 am - 9:00 pm</p>
        <p>11:30 am - 9:30 pm</p>
        <p>11:30 am - 9:30 pm</p>
        <p>11:30 am - 9:30 pm</p>
        <p>11:30 am - 10:30 pm</p>
        <p>11:30 am - 10:30 pm</p>
        <p>12:00 am - 9:00 pm</p>
      </section>
    </div>
  </div>
);

export default Perrysburg;
