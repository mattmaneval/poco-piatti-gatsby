import React from 'react';
import "./_ThePocoExperience.scss";
import DSC04762 from "../images/DSC04762.jpg";
import DSC04786 from "../images/DSC04786.jpg";
import DSC04717 from "../images/DSC04717.jpg";

const ThePocoExperince = () => (
  <div className="ThePocoExperience">
    <div>
      <section>
        <h1>The Poco Experience.</h1>
        <p>Poco Piatti means "small plates."
        Here, you have the opportunity to experience
        the many flavors of the mediterranean! We strive
        to create dishes that are unique and healthy
        using only the most fresh and best quality
        ingredients.
        So share the small, or large, plates with your table and enjoy!
        </p>
      </section>
      <aside>
        <img src={DSC04762} alt="Small Plates" />
        <img src={DSC04786} alt="Small Plates" />
        <img src={DSC04717} alt="Small Plates" />
      </aside>
    </div>
  </div>
);

export default ThePocoExperince;
