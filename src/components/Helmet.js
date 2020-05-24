import React from "react";
import {Helmet} from "react-helmet";

class Helmet extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
            <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

            </Helmet>
            ...
        </div>
    );
  }
};

export default Helmet
