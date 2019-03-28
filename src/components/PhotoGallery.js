import React from 'react';
import "./_PhotoGallery.scss";

const PhotoGallery = () => (
  <div className="PhotoGallery">
    <div className="PhotoGalleryWrap">
      <div className="PhotoGalleryRow">
        <article className="PortobelloCaps">
          <h6>Stuffed Portobello Caps</h6>
        </article>
        <article className="PocoTips">
        <h6>Beef Poco Tips</h6>
        </article>
      </div>
      <div className="PhotoGalleryRow2">
        <article className="ChickenWraps">
        <h6>Markouk Chicken Wraps</h6>
        </article>
        <article className="Arayes">
        <h6>Ara-yes Halabi</h6>
        </article>
      </div>
      <div className="PhotoGalleryRow3">
        <article className="Pizza">
          <h6>Italian Sausage and Ricotta Pizza</h6>
        </article>
        <article className="Fatoosh">
        <h6>Fatoosh</h6>
        </article>
      </div>
    </div>
  </div>
);

export default PhotoGallery;
