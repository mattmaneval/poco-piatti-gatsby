import React from 'react';
import "../sass/_Downtown.scss"

const Downtown = () => (
  <div className="Downtown">
    <div className="Location">
      <h1>Downtown</h1>
      <span className="Underline"></span>
      <article></article>
      <p>329 N Huron<br />Toledo, Ohio</p>
    </div>
    <div className="Hours">
      <section className="Weekdays">
        <p>Mon - Thu, 11:00 am - 9 pm</p>
        <p>Fri, 11:00 am - 10 pm</p>
      <p>Sat, 4 pm - 10 pm</p>
        <p>Sun, Closed</p>
      </section>
    </div>
  </div>
);

export default Downtown;
