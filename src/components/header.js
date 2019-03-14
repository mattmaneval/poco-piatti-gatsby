import PropTypes from "prop-types"
import React from "react"
import Banner from "./Banner"
import Navigation from '../components/Navigation'

const Header = ({ siteTitle }) => (
  <header>
    <div>
    <Banner />
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
