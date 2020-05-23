import PropTypes from "prop-types";
import React from "react";
import Locations from "../modules/locations";

const Footer = ({ siteTitle }) => (
  <section className="footer">
    <Locations />
  </section>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Poco Piatti`,
}

export default Footer;
