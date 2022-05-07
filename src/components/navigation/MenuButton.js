import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styles
import mixins from '../../styles/mixins'
import theme from '../../styles/theme'
import media from '../../styles/media'

const { color } = theme

const ButtonStyle = styled.button`
  display: none;
  -webkit-tap-highlight-color: transparent;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5em;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  background: none;
  z-index: 3;
  height: 0.8rem;
  width: 2rem;
  transform: translatex(1.8em);

  @media ${media.primary} {
    display: flex;
  }

  span {
    display: inline-block;
    background-color: ${color.background};
    border-radius: 5em;
    position: relative;

    &:before,
    &:after {
      ${mixins.animate};
      content: '';
      position: absolute;
      background-color: ${color.background};
      height: 0.1em;
      width: 1.65rem;
      border-radius: 5em;
    }

    &:before {
      top: ${({ menu }) => (menu ? '0' : '-6px')};
      left: 0;
      transform: ${({ menu }) => (menu ? 'rotate(45deg)' : 'rotate(0)')};
      background-color: ${({ menu }) =>
        menu ? `${color.background}` : `${color.background}`};
    }

    &:after {
      top: ${({ menu }) => (menu ? '0' : '6px')};
      left: 0;
      transform: ${({ menu }) => (menu ? 'rotate(-45deg)' : 'rotate(0)')};
      background-color: ${({ menu }) =>
        menu ? `${color.background}` : `${color.background}`};
    }
  }
`

const MenuButton = ({ menu, onClick }) => (
  <ButtonStyle menu={menu} onClick={onClick}>
    <span />
  </ButtonStyle>
)

MenuButton.propTypes = {
  menu: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuButton
