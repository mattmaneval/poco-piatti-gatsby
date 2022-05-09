import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Locations from '../components/Locations/index'
import Hero from '../components/Hero/index'
import Review from '../components/Reviews/index'
import ThePocoExperience from '../components/ThePocoExperience/index'
import PrivateEventsCallout from '../components/PrivateEventsCallout/index'
import PhotoGallery from '../components/PhotoGallery/index'

// Images
import FoodImagesData from '../../data/images/food-images'
import GenericImagesData from '../../data/images/generic-images'

const IndexPage = () => (
  <Layout absolute>
    <SEO
      title="Home"
      keywords={[
        `Poco Piatti`,
        `Toledo`,
        `Ohio`,
        `Mediterranean`,
        `Restaurant`,
      ]}
    />
    <Hero />
    <ThePocoExperience />
    <Locations />
    <PhotoGallery imageData={GenericImagesData} />
    <Review />
    <PhotoGallery imageData={FoodImagesData} />
    <PrivateEventsCallout />
  </Layout>
)

export default IndexPage
