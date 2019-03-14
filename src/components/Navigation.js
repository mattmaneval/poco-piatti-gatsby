import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./_Navigation.scss"
import MobileNavigation from "../components/MobileNavigation"

const Navigation = () => (
  <div>
    <SEO title="Poco Piatti Menu" />
    <div className="Navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu/">Menu</Link></li>
        <li><Link to="/Catering/">Catering</Link></li>
        <li><Link to="/PrivateEvents/">Private Events</Link></li>
        <li><Link to="/About/">About</Link></li>
        <li><Link to="/Contact/">Contact</Link></li>
      </ul>
    </div>
    <MobileNavigation />
  </div>
)

export default Navigation
