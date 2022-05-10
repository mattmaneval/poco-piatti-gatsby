import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Components
import SectionHeading from '../SectionHeading/index'
import GalleryImage from './GalleryImage'

// Styles
import mixins from '../../styles/mixins'
import media from '../../styles/media'

const PhotoGalleryContainer = styled.div`
  ${mixins.wrap}
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);

  @media ${media.primary} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PhotoGallery = ({ imageData }) => (
  <>
    <SectionHeading text="Gallery" wrap light />
    <PhotoGalleryContainer>
      {Object.keys(imageData).map((key) => (
        <GalleryImage data={imageData[key]} />
      ))}
    </PhotoGalleryContainer>
  </>
)

PhotoGallery.propTypes = {
  imageData: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }),
}

export default PhotoGallery
