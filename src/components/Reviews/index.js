import React from 'react'
import styled from 'styled-components'

// Components
import SectionHeading from '../SectionHeading/index'

// Styles

import theme from '../../styles/theme'
import media from '../../styles/media'

const { color } = theme

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
  }
`

const Reviews = () => (
  <ReviewsStyle>
    <div className="wrap">
      <SectionHeading text="Reviews" light />
      <div className="review">
        &quot;The Mediterranean food at this restaurant (with heavy Lebanese and
        Italian influences) is so beautifully prepared that it seems like a more
        elite spot, but you can certainly find great values.&quot;
      </div>
      <div className="title light">&mdash; The Blade</div>
      <div className="review">
        Dining Guide Award Winner for Best Appetizers & Runner-Up for Best Staff
      </div>
      <div className="title light">&mdash; Toledo City Paper</div>
      <div className="review">
        Dining Guide Award Winner for Best Restaurateur
      </div>
      <div className="title light">&mdash; Toledo City Paper</div>
    </div>
  </ReviewsStyle>
)

export default Reviews
