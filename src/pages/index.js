import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Locations from '../components/Locations/index'
import Hero from '../components/Hero/index'
import Review from '../components/Reviews/index'
import PhotoGallery from '../components/home/PhotoGallery'
import PhotoGalleryTwo from '../components/home/PhotoGalleryTwo'
import PhotoGalleryThree from '../components/home/PhotoGalleryThree'
import ThePocoExperience from '../components/ThePocoExperience/index'
import PrivateEventsCallout from '../components/PrivateEventsCallout/index'

const IndexPage = ({ props, absolute }) => (
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
    <PhotoGalleryTwo />
    <Review />
    <PhotoGallery />
    <PhotoGalleryThree />
    <PrivateEventsCallout />
  </Layout>
)

export default IndexPage
