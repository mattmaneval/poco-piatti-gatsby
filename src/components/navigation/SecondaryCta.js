import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts } = theme;

const SecondaryCtaStyle = styled.button`
  ${mixins.animate}
  display: inline-block;
  background: none;
  font-family: ${fonts.heading};
  letter-spacing: 0.1em;
  font-size: 1.35rem;
  color: ${color.foregroundDim};
  padding: 1.15rem 3.65rem;
  position: relative;

  @media ${media.secondary} {
    padding: 1.15rem 1.65rem;
  }

  &:before {
    content: "";
    position: absolute;
    width: 3.7em;
    height: 0.15rem;
    bottom: 0.7em;
    display: inline-block;
    background-color: currentColor;
  }

  &:hover {
    color: ${color.backgroundTert};

    &:before {
      background-color: currentColor;
    }
  }
`;

const SecondaryCta = ({ href, text }) => (
  <Link href={href} passHref>
    <SecondaryCtaStyle>{text}</SecondaryCtaStyle>
  </Link>
);

SecondaryCta.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SecondaryCta;
