import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import OrderModal from '../OnlineOrderModal/index';
import Cta from '../Cta/index';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space, fonts } = theme;

const MoreInfoCalloutContent = styled.div`
  background-color: ${color.background};
  padding: 2em;
  position: relative;
  z-index: 1;

  @media ${media.secondary} {
    padding: 1em;
  }

  .border {
    border: 0.5px solid ${color.callout};
    padding: 2em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${media.secondary} {
      padding: 1em;
    }
  }

  h2, .cta {
    color: ${color.foreground};
    display: block;
  }

  h2 {
    max-width: 17em;

    a {
      color: ${color.callout};
      display: inline-block;
    }
  }


`;

const MoreInfoCallout = ({ titleText, pText, ctaText, ctaHref, reverse}) => (
  <section className="">
    <div class="inner-wrap">
        <MoreInfoCalloutContent>
      <div className="border">
        <div className="title dark">Contact us</div>
          <h2>If you'd like more information about your private event, please call <a href="tel:4199310281">419-931-0281</a> or email and we can assist you.</h2>
          <Cta text={ctaText} href={ctaHref}/>
        </div>
      </MoreInfoCalloutContent>
    </div>
  </section>
);

export default MoreInfoCallout;
