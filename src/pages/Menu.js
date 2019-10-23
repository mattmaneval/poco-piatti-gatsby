import React from 'react';
import SEO from "../components/seo"
import Layout from "../components/layout"
import FullMenu from "../components/FullMenu"
import "../sass/_Menu.scss"

const Menu = () => (
  <Layout>
  <SEO title="Menu" />
    <div className="Menu">
      <FullMenu />
    </div>
  </Layout>
);

export default Menu;
