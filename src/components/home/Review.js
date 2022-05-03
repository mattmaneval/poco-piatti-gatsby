import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';

// Images
import DowntownWindows from "../../images/IMG_0046.jpg";

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color } = theme;

const ReviewsStyle = styled.section`
  background-color: ${color.foreground};

  .review {
    color: ${color.background};
    font-size: 1.85em;
    line-height: 1.25em;
    margin-bottom: 1em;
    max-width: 20em;

    @media ${media.secondary} {
      font-size: 2.05em;
    }
  }

  .title {
    margin-bottom: 1.85em;
    color: ${color.callout};
  }
`;

const ReviewsBackgroundImage = styled.div`
  background-image: url(${DowntownWindows});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 130%;
  filter: blur(4em);
  height: 130%;
  left: -15%;
  mask-image: linear-gradient(180deg, ${color.foreground}, rgba(${color.foreground}, 0));
  -webkit-mask-image: linear-gradient(180deg,${color.foreground}, rgba(${color.foreground}, 0));
  opacity: 0.5;
  overflow: hidden;
  position: absolute;
  top: -15%;
  width: 130%;
`;

const Reviews = () => (
  <ReviewsStyle>
    <ReviewsBackgroundImage />
    <div className="wrap">
      <SectionHeading text="Reviews" light />
      <div className="review">
        &quot;The Mediterranean food at this restaurant (with heavy Lebanese and
        Italian influences) is so beautifully prepared that it seems like a more
        elite spot, but you can certainly find great values.&quot;
      </div>
      <div className="title light">&mdash; The Blade</div>
      <div className="review">Dining Guide Award Winner for Best Appetizers & Runner-Up for Best Staff</div>
      <div className="title light">&mdash; Toledo City Paper</div>
      <div className="review">Dining Guide Award Winner for Best Restaurateur</div>
      <div className="title light">&mdash; Toledo City Paper</div>
    </div>
  </ReviewsStyle>
);

export default Reviews;
