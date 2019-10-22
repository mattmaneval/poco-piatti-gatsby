import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../sass/_Navigation.scss"
import MobileNavigation from "../components/MobileNavigation"
import PocoPiattiRedLogo from "../images/PocoPiattiRedLogo.jpg";

const Navigation = () => (
    <div className="Navigation">
    <SEO title="Poco Piatti Menu" />
    <div className="NavigationWrap">
      <div className="left-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu/">Menu</Link></li>
          <li><Link to="/PrivateEvents/">Private Events</Link></li>
        </ul>
      </div>
      <div className="logo">
          <img src={PocoPiattiRedLogo} alt="Poco Piatti Logo" />
      </div>
      <div className="right-links">
        <ul>
          <li><Link to="/Catering/">Catering</Link></li>
          <li><Link to="/About/">About</Link></li>
          <li><Link to="/Contact/">Contact</Link></li>
        </ul>
      </div>
      <MobileNavigation />
      </div>
    </div>
)

export default Navigation
