import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import Location from '../Location/index';
import GalleryImage from './GalleryImage';

// Images
import stuffedPortobelloCaps from "../../images/DSC04717.jpg";
import italianSausageAndRicottaPizza from "../../images/DSC04736.jpg";
import chickenWraps from "../../images/DSC04786.jpg";
import hummus from "../../images/DSC04751.jpg";
import arayes from "../../images/DSC04757.jpg";
import beefPocoTips from "../../images/DSC04727.jpg";
import fatoosh from "../../images/DSC04768.jpg";

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';
import mixins from '../../../styles/mixins';

const { color, space } = theme;



const PhotoGalleryContainer = styled.div`
  ${mixins.wrap}
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);

  @media ${media.primary} {
    grid-template-columns: repeat(1, 1fr);
  }
`;


const PhotoGallery = ({ imageData}) => (
  <>
    <SectionHeading text="Gallery" wrap light />
    <PhotoGalleryContainer>
      {Object.keys(imageData).map((key) => (
        <GalleryImage data={imageData[key]} />
      ))}
    </PhotoGalleryContainer>
  </>
);

export default PhotoGallery;
