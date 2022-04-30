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
  ${({ wrap }) => (wrap ? `${mixins.wrap}` : null)};
  ${mixins.animate}
  color: ${color.background};
  border: 1.2px solid ${color.callout};
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
  }
`;

const CtaText = styled.span`

`;

const Cta = ({ text, light, href }) => (
  <CtaStyle light={light} to={href} light={light}>
    {text}
  </CtaStyle>
);

Cta.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default Cta;
