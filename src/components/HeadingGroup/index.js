import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const HeadingGroupStyle = styled.div`

`;

const HeadingGroupText = styled.span`

`;

const HeadingGroup = ({ h1Text, h4Text, light }) => (
  <HeadingGroupStyle light={light}>
    <h1 light={light}>{h1Text}</h1>
    <h4 light={light}>{h4Text}</h4>
  </HeadingGroupStyle>
);

HeadingGroup.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default HeadingGroup;
