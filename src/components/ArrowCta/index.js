import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Components
import ArrowRight from '../ArrowRight'

// Styles
import mixins from '../../styles/mixins'
import theme from '../../styles/theme'

const { color } = theme

const ArrowCtaStyle = styled((props) => <Link {...props} />)`
  ${mixins.animate}
  display: flex;
  align-items: center;
  color: ${color.callout};
  cursor: pointer;
  padding: 1em 0;
  position: relative;
  width: fit-content;

  span {
    font-size: 1.15em;
    margin-right: 1em;
  }

  svg {
    ${mixins.animate}
    fill: none;
    stroke: ${color.callout};
    stroke-width: 4;
    stroke-miterlimit: 10;
    overflow: visible;
    width: 3.5em;
  }

  &:before {
    ${mixins.animate}
    content: '';
    position: absolute;
    bottom: 0.4em;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${color.callout};
  }

  &:hover {
    svg {
      transform: translateX(0.5em);
    }

    &:before {
      width: 100%;
      opacity: 1;
    }
  }
`

const ArrowCta = ({ text, light, href, filled }) => (
  <ArrowCtaStyle className="Arrowcta" to={href} light={light} filled={filled}>
    <span>{text}</span>
    <ArrowRight />
  </ArrowCtaStyle>
)

ArrowCta.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  filled: PropTypes.bool,
}

export default ArrowCta
