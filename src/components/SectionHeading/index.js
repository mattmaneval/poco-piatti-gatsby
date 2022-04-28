import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const SectionHeadingStyle = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 4em;

  &:after {
    content: "";
    height: 3px;
    flex: 1 1 0%;
    background-color: ${({ light }) => (light ? `${color.background}` : `${color.foreground}`)};
  }
`;

const SectionHeadingText = styled.span`
  color: ${({ light }) => (light ? `${color.background}` : `${color.foreground}`)};
  font-family: ${fonts.heading};
  font-size: 2.25em;
  letter-spacing: 0.05em;
  margin-right: 1em;

  @media ${media.secondary} {
    font-size: 1.35em;
  }
`;

const SectionHeading = ({ text, light }) => (
  <SectionHeadingStyle light={light}>
    <SectionHeadingText light={light}>{text}</SectionHeadingText>
  </SectionHeadingStyle>
);

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default SectionHeading;
