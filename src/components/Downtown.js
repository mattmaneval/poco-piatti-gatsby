import React from 'react';
import "./_Downtown.scss"

const Downtown = () => (
  <div className="Downtown">
    <div className="Location">
      <h1>Downtown</h1>
      <span className="Underline"></span>
      <p>329 N Huron<br />Toledo, Ohio</p>
      <h3>419-720-8028</h3>
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

export default Downtown;
