import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "gatsby";

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const CtaStyle = styled(props => <Link {...props} />)`
  ${mixins.animate}
  color: ${({ filled }) => (filled ? `${color.foreground}` : `${color.background}`)};
  cursor: pointer;
  background-color: ${({ filled }) => (filled ? `${color.background}` : `none`)};
  border: ${({ filled }) => (filled ? `1.2px solid ${color.background}` : `1.2px solid ${color.callout}`)};
  display: inline-block;
  padding: 0.5em 2.3em;
  position: relative;
  text-transform: uppercase;
  line-height: 1.1;
  font-size: 0.95em;
  letter-spacing: 0.085em;
  font-family: ${fonts.fontBold};

  &:hover {
    color: ${color.background};
    background-color: ${color.callout};
    border: 1.2px solid ${color.callout};
  }
`;

const CtaText = styled.span`

`;

const Cta = ({ text, light, href, filled }) => (
  <CtaStyle light={light} to={href} light={light} filled={filled}>
    {text}
  </CtaStyle>
);

Cta.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default Cta;
