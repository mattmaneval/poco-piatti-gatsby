import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const HeadingGroupImage = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.65);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;


`;

const HeadingGroupStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100vw;

`;

const HeadingGroupText = styled.span`
  position: relative;
  // z-index: 1000;
`;

const GradientOverlay = styled.div `
  bottom: 0;
  height: 40em;
  left: 0;
  -webkit-mask-image: linear-gradient(180deg,rgba(2,2,10,0), ${color.foreground});
  mask-image: linear-gradient(180deg,rgba(2,2,10,0), ${color.foreground});
  overflow-x: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;

  &:before {
    background-color: #02020a;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const HeadingGroup = ({ h1Text, h4Text, imageUrl, light }) => (
  <HeadingGroupStyle light={light}>
    <HeadingGroupImage imageUrl={imageUrl} />
    <HeadingGroupText className="wrap">
      <h1 light={light}>{h1Text}</h1>
      <h4 light={light}>{h4Text}</h4>
    </HeadingGroupText>
    <GradientOverlay />
  </HeadingGroupStyle>
);

HeadingGroup.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default HeadingGroup;
