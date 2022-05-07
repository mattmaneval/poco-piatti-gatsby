import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GalleryImageContainer = styled.div`
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  padding-top: 100%;
`

const GalleryImage = ({ data }) => (
  <GalleryImageContainer imageUrl={data.image} />
)

GalleryImage.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }),
}

export default GalleryImage
