import React from 'react';
import "./_Downtown.scss"

const Downtown = () => (
  <div className="Downtown">
    <div className="Location">
      <h1>Downtown</h1>
      <span className="Underline"></span>
      <p>329 N Huron<br />Toledo, Ohio</p>
      <h3>419-720-8028</h3>
      <h6>Carryout & Reservations</h6>
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

export default Downtown;
