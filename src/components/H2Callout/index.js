import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Cta from '../Cta/index';

// Styles
import media from '../../styles/media';

// const { color, fonts } = theme;

const H2CalloutContainer = styled.section`
  .inner-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${media.secondary} {
      display: block;
    }
  }

  .title {
    margin-bottom: 1em;
  }

  h2 {
    text-align: center;

    @media ${media.secondary} {
      text-align: left;
    }
  }
`;

const H2Callout = ({ titleText, h2Text, ctaText, ctaHref}) => (
  <H2CalloutContainer>
    <div className="inner-wrap">
      <div className="title light">{titleText}</div>
      <h2>{h2Text}</h2>
      <Cta text={ctaText} href={ctaHref} />
    </div>
  </H2CalloutContainer>
);

H2Callout.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default H2Callout;
