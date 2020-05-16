import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import MobileNavigation from "./MobileNavigation"
import PocoPiattiRedLogo from "../../images/PocoPiattiRedLogo.jpg";


const Navigation = () => (
      <div className="Navigation">
        <div><Link to="/"><img src={PocoPiattiRedLogo} alt="Poco Piatti Logo" /></Link></div>

      </div>
)

export default Navigation
