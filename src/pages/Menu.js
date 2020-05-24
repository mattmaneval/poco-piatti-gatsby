import React from 'react';
import SEO from "../components/seo"
import Layout from "../components/layout"
import FullMenu from "../components/menu/FullMenu"
import "../styles/_index.scss"
import PrimaryCallout from "../components/home/PrimaryCallout";

const Menu = () => (
  <Layout>
  <SEO title="Menu" />
    <div className="Menu">
      <FullMenu />
      <PrimaryCallout />
    </div>
  </Layout>
);

export default Menu;
