import React from 'react';
import SEO from "../components/seo"
import Layout from "../components/layout"
import FullMenu from "../components/menu/FullMenu"
import PrivateEventsCallout from "../components/PrivateEventsCallout/index";
// import "../styles/_index.scss"

const Menu = () => (
  <Layout>
  <SEO title="Menu" />
    <div className="Menu">
      <FullMenu />
      <PrivateEventsCallout />
    </div>
  </Layout>
);

export default Menu;
