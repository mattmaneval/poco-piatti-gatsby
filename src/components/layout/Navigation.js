import React from "react"
import { Link } from "gatsby"
import MobileNavigation from "./MobileNavigation"
import PocoPiattiRedLogo from "../../images/PocoPiattiRedLogo.jpg";



const Navigation = () => (
  <div className="navigation wrap">
    <div class="navigation-desktop-link"><Link  to="/">Home</Link></div>
    <div class="navigation-desktop-link"><Link  to="/Menu/">Menu</Link></div>
    <div class="navigation-desktop-link"><Link  to="/PrivateEvents/">Private Events</Link></div>
    <div class="navigation-desktop-link"><Link  to="/Catering/">Catering</Link></div>
    <div class="navigation-desktop-link"><Link to="/About/">About</Link></div>
    <div class="navigation-desktop-link"><Link  to="/Contact/">Contact</Link></div>
    <MobileNavigation />
  </div>
)

export default Navigation
