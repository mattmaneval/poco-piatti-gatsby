import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import FullMenu from '../components/menu/index'
import PrivateEventsCallout from '../components/PrivateEventsCallout/index'

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <div className="Menu">
      <FullMenu />
      <PrivateEventsCallout />
    </div>
  </Layout>
)

export default Menu
