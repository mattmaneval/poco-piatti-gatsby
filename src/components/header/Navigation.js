import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import MobileNavigation from "./MobileNavigation"
import PocoPiattiRedLogo from "../../images/PocoPiattiRedLogo.jpg";


const Navigation = () => (
      <div className="Navigation">
        <div><Link to="/"><img src={PocoPiattiRedLogo} alt="Poco Piatti Logo" /></Link></div>
        <div className="NavigationWrap">
          <SEO title="Poco Piatti Menu" />
          <div><Link to="/Menu/">Menu</Link></div>
          <div><Link to="/PrivateEvents/">Private Events</Link></div>
          <div><Link to="/Catering/">Catering</Link><Link to="/About/">About</Link></div>
          <div><Link to="/Contact/">Contact</Link></div>
          <div className="Order"><a href="tel:419-931-0281">419-931-0281</a></div>
        </div>
          <MobileNavigation />
      </div>
)

export default Navigation
