import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const SectionHeadingStyle = styled.div`
  ${({ wrap }) => (wrap ? `${mixins.wrap}` : null)}
  align-items: center;
  display: flex;
  margin-bottom: 4em;

  &:after {
    content: "";
    height: 0.5px;
    flex: 1 1 0%;
    background-color: ${({ light }) => (light ? `${color.background}` : `${color.foreground}`)};
  }
`;

const SectionHeadingText = styled.span`
  color: ${({ light }) => (light ? `${color.background}` : `${color.foreground}`)};
  font-family: ${fonts.fontBold};
  font-size: 0.95em;
  letter-spacing: 0.085em;
  margin-right: 1em;
  text-transform: uppercase;
`;

const SectionHeading = ({ text, light, wrap }) => (
  <SectionHeadingStyle wrap={wrap} light={light}>
    <SectionHeadingText light={light}>{text}</SectionHeadingText>
  </SectionHeadingStyle>
);

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default SectionHeading;
