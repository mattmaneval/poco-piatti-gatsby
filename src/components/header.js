import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header>
    <div>

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
