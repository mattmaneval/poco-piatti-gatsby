import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Styles
import mixins from '../../styles/mixins'
import theme from '../../styles/theme'

const { color, fonts } = theme

const CtaStyle = styled((props) => <Link {...props} />)`
  ${mixins.animate}
  color: ${({ filled }) =>
    filled ? `${color.background}` : `${color.background}`};
  cursor: pointer;
  background-color: ${({ filled }) => (filled ? `${color.callout}` : `none`)};
  border: ${({ filled }) =>
    filled ? `1.2px solid ${color.callout}` : `1.2px solid ${color.callout}`};
  display: inline-block;
  padding: 0.5em 2.3em;
  position: relative;
  text-transform: uppercase;
  line-height: 1.1;
  font-size: 0.95em;
  letter-spacing: 0.085em;
  font-family: ${fonts.fontBold};
  width: fit-content;

  &:hover {
    color: ${({ filled }) =>
      filled ? `${color.foreground}` : `${color.background}`};
    background-color: ${({ filled }) =>
      filled ? `${color.background}` : `${color.callout}`};
    border: 1.2px solid ${color.callout};
  }
`

const Cta = ({ text, light, href, filled }) => (
  <CtaStyle className="cta" to={href} light={light} filled={filled}>
    {text}
  </CtaStyle>
)

Cta.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  filled: PropTypes.bool,
}

export default Cta
