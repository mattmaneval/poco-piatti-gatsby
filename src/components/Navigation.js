import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./_Navigation.scss"
import MobileNavigation from "../components/MobileNavigation"

const Navigation = () => (
    <div className="Navigation">
    <SEO title="Poco Piatti Menu" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu/">Menu</Link></li>
        <li><Link to="/Catering/">Catering</Link></li>
        <li><Link to="/PrivateEvents/">Private Events</Link></li>
        <li><Link to="/About/">About</Link></li>
        <li><Link to="/Contact/">Contact</Link></li>
      </ul>
      <MobileNavigation />
    </div>
)

export default Navigation
