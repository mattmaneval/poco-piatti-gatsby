import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Components
import ArrowCta from '../ArrowCta'

// Styles
import theme from '../../styles/theme'
import media from '../../styles/media'

const { color, fonts, responsive } = theme

const SectionHeadingStyle = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 3em;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  width: ${({ wrap }) => (wrap ? `${responsive.wrap}` : `100%`)};

  @media ${media.secondary} {
    width: ${({ wrap }) => (wrap ? `${responsive.wrapMobile}` : `100%`)};
  }

  &:after {
    content: '';
    height: 0.5px;
    flex: 1 1 0%;
    background-color: ${({ light }) =>
      light ? `${color.background}` : `${color.foreground}`};
  }
`

const SectionHeadingText = styled.span`
  color: ${({ light }) =>
    light ? `${color.background}` : `${color.foreground}`};
  font-family: ${fonts.fontBold};
  font-size: 0.95em;
  letter-spacing: 0.085em;
  margin-right: 1em;
  text-transform: uppercase;
`

const SectionHeading = ({ text, light, wrap }) => (
  <SectionHeadingStyle wrap={wrap} light={light}>
    <SectionHeadingText light={light}>{text}</SectionHeadingText>
  </SectionHeadingStyle>
)

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  wrap: PropTypes.bool,
}

export default SectionHeading
