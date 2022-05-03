import React from 'react';
import styled from 'styled-components';

// Components
import GoogleMap from '../GoogleMap/index';
import Cta from '../Cta/index';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space, fonts } = theme;

const GalleryImageContainer = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  padding-top: 100%;
`;


const GalleryImage = ({ data }) => (
  <>
    <GalleryImageContainer imageUrl={data.image} />
  </>
);

export default GalleryImage;
