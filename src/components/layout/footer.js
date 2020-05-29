import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <section className="footer">
    <div className="footer-navigation wrap">
      <div className="footer-link"><Link  to="/">Home</Link></div>
      <div className="footer-link"><Link  to="/Menu/">Menu</Link></div>
      <div className="footer-link"><Link  to="/PrivateEvents/">Private Events</Link></div>
      <div className="footer-link"><Link  to="/Catering/">Catering</Link></div>
      <div className="footer-link"><Link to="/About/">About</Link></div>
      <div className="footer-link"><Link  to="/Contact/">Contact</Link></div>
    </div>
  </section>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Poco Piatti`,
}

export default Footer;
