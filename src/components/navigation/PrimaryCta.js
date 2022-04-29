import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const PrimaryCtaStyle = styled.button`
  ${mixins.animate}
  background-color: ${color.background};
  border: 1.5px solid ${color.callout};
  border-radius: 1.95em;
  cursor: pointer;
  display: inline-block;
  color: ${color.callout};
  font-family: ${fonts.heading};
  font-size: 0.95em;
  padding: 0.45rem 1.25rem;
  text-transform: uppercase;

  @media ${media.secondary} {

  }

  &:hover {
    background-color: ${color.callout};
    color: ${color.background};
  }
`;

const PrimaryCta = ({ onClick, text }) => (
  <PrimaryCtaStyle onClick={onClick}>{text}</PrimaryCtaStyle>
);

PrimaryCta.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default PrimaryCta;
