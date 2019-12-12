import PropTypes from "prop-types"
import React from "react"
import Navigation from './Navigation';


const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Poco Piatti`,
}

export default Header
