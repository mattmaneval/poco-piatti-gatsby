import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import img from "../../images/DSC04736.jpg";

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space, fonts } = theme;

const OrderModalStyle = styled.div`
  ${mixins.animate}
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  display: ${({ modal }) => (modal ? 'block' : 'none')};

  .order-modal-container {
    ${mixins.wrap}
    background-color: ${color.foreground};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media ${media.primary} {
      grid-template-columns: 1fr;
    }

    &-content {
      padding: 5em;
    }

    &-links {
      ${mixins.cta}
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      // padding: 4em 2em;
      background-image: url(${img});
      background-size: cover;
      background-repeat: no-repeat;

    }
  }

  .order-modal {

    &-content {
      color: ${color.background};
      font-size: 1.65em;
      line-height: 1.25;
      max-width: 16em;

      a {
        color: ${color.callout};
      }
    }
  }
`;

const LocationButton = styled.a`
  ${mixins.animate}
  border-bottom: 1px solid ${color.callout};
  display: inline-block;
  cursor: pointer;
  font-size: 1.65rem;
  color: ${color.foreground};
  padding: 1.15rem 2rem;
  width: 100%;
  background-color: ${color.background};
  position: relative;
  text-align: center;
  background-color: ${color.foreground};
  color: ${color.background};


  ${mixins.animate};
  font-family: ${fonts.fontBold};
  color: ${color.background};
  padding: ${space.halfSpace};
  font-size: 0.95em;
  letter-spacing: 0.085em;
  text-transform: uppercase;

  &:hover {
    color: ${color.callout};
  }

  &:hover {
    background-color: ${color.callout};
  }
`;

const GoBack = styled.a`
  background: none;
  display: inline-block;
  cursor: pointer;
  color: ${color.foregroundDim};
  font-family: ${fonts.title};
  font-size: 1em;
  text-transform: uppercase;
  position: absolute;
  top: 1.75em;
  right: 1.75em;
`;

const OrderModal = ({ modal, onClick }) => (
  <OrderModalStyle modal={modal}>
    <div className="order-modal-container">
      <div className="order-modal-container-content">
        <div class="order-modal-content">
          Choose your location for online ordering. Or call
          {' '}
          <a href="tel:4199310281">419-931-0281</a>
          {' '}
          for any location.
        </div>
      </div>
      <div className="order-modal-container-links">
        <LocationButton href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v3/?mode=fulfillment">Perrysburg</LocationButton>
        <LocationButton href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v3/?mode=fulfillment">Sylvania</LocationButton>
        <LocationButton href="https://www.toasttab.com/poco-piatti-downtown-329-n-huron-st">Downtown</LocationButton>
        <GoBack onClick={onClick}>Go Back</GoBack>
      </div>
    </div>
  </OrderModalStyle>
);

OrderModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderModal;