import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Images
import stuffedPortobelloCaps from "../../images/DSC04717.jpg";
import italianSausageAndRicottaPizza from "../../images/DSC04736.jpg";
import chickenWraps from "../../images/DSC04786.jpg";
import hummus from "../../images/DSC04751.jpg";
import arayes from "../../images/DSC04757.jpg";
import beefPocoTips from "../../images/DSC04727.jpg";
import fatoosh from "../../images/DSC04768.jpg";

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const PhotoGalleryStyle = styled.section`


  padding: 0;

.FoodPhotoGallery {
  .FoodPhotoGalleryWrap {
    article {
      min-height: 700px;
      text-align: left;
      h6 {
        @include photo-caption;
      //  padding: 10px;
      }
    }
    .FoodPhotoGalleryRow {
      display: flex;
      .PortobelloCaps {
        width: calc(40% - 2.5px);
        border-top: 5px solid ${color.background};
        border-left: 5px solid ${color.background};
        border-right: 2.5px solid ${color.background};
        border-bottom: 2.5px solid ${color.background};
        background-image: url(${stuffedPortobelloCaps});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .PocoTips {
        width: calc(60% + 2.5px);
        border-top: 5px solid ${color.background};
        border-bottom: 2.5px solid ${color.background};
        border-left: 2.5px solid ${color.background};
        border-right: 5px solid ${color.background};
        background-image: url(${italianSausageAndRicottaPizza});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    .FoodPhotoGalleryRow2 {
      display: flex;
      .ChickenWraps {
        width: calc(30% - 2.5px);
        border-top: 2.5px solid ${color.background};
        border-right: 2.5px solid ${color.background};
        border-bottom: 2.5px solid ${color.background};
        border-left: 5px solid ${color.background};
        background-image: url(${chickenWraps});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .Hummus {
        width: 40%;
        border-top: 2.5px solid ${color.background};
        border-right: 2.5px solid ${color.background};
        border-bottom: 2.5px solid ${color.background};
        border-left: 2.5px solid ${color.background};
        background-image: url(${hummus});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .Arayes {
        width: calc(30% + 2.5px);
        border-top: 2.5px solid ${color.background};
        border-right: 5px solid ${color.background};
        border-bottom: 2.5px solid ${color.background};
        border-left: 2.5px solid ${color.background};
        background-image: url(${arayes});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    .FoodPhotoGalleryRow3 {
      display: flex;
      .Pizza {
        width: calc(40% - 2.5px);
        border-top: 2.5px solid ${color.background};
        border-right: 2.5px solid ${color.background};
        border-left: 5px solid ${color.background};
        border-bottom: 5px solid ${color.background};
        background-image: url(${beefPocoTips});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .Fatoosh {
        width: calc(60% + 2.5px);
        border-top: 2.5px solid ${color.background};
        border-right: 5px solid ${color.background};
        border-left: 2.5px solid ${color.background};
        border-bottom: 5px solid ${color.background};
        background-image: url(${fatoosh});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}


/*Begin Responsive Style*/

@media screen and (min-width: 768px) and (max-width: 1024px) {

}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .FoodPhotoGallery {
    .FoodPhotoGalleryWrap {
      article {
        //border: 2px solid ${color.background};
        min-height: 225px;
        max-height: 300px;
      }
    }
  }
}

`;

const PhotoGallery = () => (
  <PhotoGalleryStyle>
    <div className="FoodPhotoGallery">
      <div className="FoodPhotoGalleryWrap">
        <div className="FoodPhotoGalleryRow">
          <article className="PortobelloCaps">
            <h6>Stuffed Portobello Caps</h6>
          </article>
          <article className="PocoTips">
          <h6>Italian Sausage and Ricotta Pizza</h6>
          </article>
        </div>
        <div className="FoodPhotoGalleryRow2">
          <article className="ChickenWraps">
          <h6>Markouk Chicken Wraps</h6>
          </article>
          <article className="Hummus">
            <h6>Hummus & Roasted Beet Salad</h6>
          </article>
          <article className="Arayes">
          <h6>Ara-yes Halabi</h6>
          </article>
        </div>
        <div className="FoodPhotoGalleryRow3">
          <article className="Pizza">
            <h6>Beef Poco Tips</h6>
          </article>
          <article className="Fatoosh">
          <h6>Fatoosh</h6>
          </article>
        </div>
      </div>
    </div>
  </PhotoGalleryStyle>
);

export default PhotoGallery;
