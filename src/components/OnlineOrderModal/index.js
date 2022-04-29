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
      background-color: ${color.background};
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: ${space.space};
      min-height: 20em;
    }

    &-links {
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: ${space.space};
      background-image: url(${img});
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  p {
    margin-bottom: 4rem;
    color: ${color.foreground};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const LocationButton = styled.a`
  ${mixins.animate}
  display: inline-block;
  cursor: pointer;
  font-family: ${fonts.heading};
  letter-spacing: 0.1em;
  font-size: 1.65rem;
  color: ${color.foreground};
  padding: 1.15rem 2rem;
  width: 100%;
  background-color: ${color.background};
  margin-bottom: ${space.space};
  position: relative;
  text-align: center;

  &:hover {
    background-color: ${color.backgroundTert};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const GoBack = styled.a`
  background: none;
  display: inline-block;
  cursor: pointer;
  color: ${color.foregroundDim};
  font-family: ${fonts.title};
  font-size: 1em;
  /* margin-bottom: ${space.space}; */
  text-transform: uppercase;
  position: absolute;
  top: 1.75em;
  right: 1.75em;
`;

const OrderModal = ({ modal, onClick }) => (
  <OrderModalStyle modal={modal}>
    <div className="order-modal-container">
      <div className="order-modal-container-content">
        <p>
          Choose your location for online ordering. Or call
          {' '}
          <a href="tel:4199310281">419-931-0281</a>
          {' '}
          for any location.
        </p>
      </div>
      <div className="order-modal-container-links">
        <LocationButton
          href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v3/?mode=fulfillment"
        >
          Perrysburg
        </LocationButton>
        <LocationButton
          href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v3/?mode=fulfillment"
        >
          Sylvania
        </LocationButton>
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
