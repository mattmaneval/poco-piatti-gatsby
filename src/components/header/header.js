import PropTypes from "prop-types"
import React from "react"
import Navigation from './Navigation';

const Header = ({ siteTitle }) => (
  <div className="Header">
      <Navigation />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Poco Piatti`,
}

export default Header
