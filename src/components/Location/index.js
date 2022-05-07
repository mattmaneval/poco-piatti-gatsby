import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styles
import theme from '../../styles/theme'
import media from '../../styles/media'

const { color, fonts } = theme

const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;

  @media ${media.secondary} {
    grid-template-columns: repeat(1, 1fr);
  }
`
const LocationContent = styled.div`
  background-color: ${color.background};
  font-family: ${fonts.fontMedium};
  grid-area: 1/1/2/3;
  clip-path: polygon(69% 0, 100% 100%, 0% 100%, 0 0%);
  min-height: 18.5em;
  position: relative;
  padding: 2.5em;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${media.secondary} {
    clip-path: none;
    padding: 1.65em;
  }

  .title {
    color: ${color.foreground};
    margin-bottom: 1em;
  }

  .address {
    color: ${color.foregroundDim};
    font-family: ${fonts.font};
    margin-bottom: 1em;
  }

  .hours {
    margin-bottom: 1em;
  }

  .map-link {
    a {
      color: ${color.callout};
      font-family: ${fonts.fontLight};
    }
  }
`

const LocationImage = styled.div`
  grid-area: 1/2/2/6;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  @media ${media.secondary} {
    height: 100%;
    width: 10em;
  }
`

const GetDirections = styled.a`
  color: ${color.background};
  clip-path: polygon(100% 0%, 100% 0%, 68% 48%, 38% 0%);
  background-color: ${color.callout};
  z-index: 2;
  grid-area: 1/2/2/3;
`

const Location = ({ data }) => {
  const { name, addLine1, addLine2, mapLink, image } = data

  return (
    <LocationContainer>
      <LocationContent>
        <div className="title">{name ? `${name}` : ''}</div>
        <div className="address">
          <div>{addLine1 ? `${addLine1}` : ''}</div>
          <div>{addLine2 ? `${addLine2}` : ''}</div>
        </div>
        {addLine2 ? (
          <div className="map-link">
            <a href={mapLink} target="_blank" rel="noreferrer">
              view on map
            </a>
          </div>
        ) : (
          ''
        )}
      </LocationContent>
      <GetDirections />
      <LocationImage imageUrl={image} />
    </LocationContainer>
  )
}

Location.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    addLine1: PropTypes.string,
    addLine2: PropTypes.string,
    mapLink: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default Location
