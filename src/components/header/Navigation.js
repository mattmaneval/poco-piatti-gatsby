import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import Headroom from 'react-headroom';
import MobileNavigation from "./MobileNavigation"
import PocoPiattiRedLogo from "../../images/PocoPiattiRedLogo.jpg";


const Navigation = () => (
    <Headroom>
      <div className="Navigation">
      <SEO title="Poco Piatti Menu" />
        <Link to="/">Home</Link>
        <Link to="/Menu/">Menu</Link>
        <Link to="/PrivateEvents/">Private Events</Link>
        <Link to="/"><img src={PocoPiattiRedLogo} alt="Poco Piatti Logo" /></Link>
        <Link to="/Catering/">Catering</Link><Link to="/About/">About</Link>
        <Link to="/Contact/">Contact</Link>
        <MobileNavigation />
      </div>
    </Headroom>
)

export default Navigation
