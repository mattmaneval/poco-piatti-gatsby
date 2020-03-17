import React from 'react';
import Covid19 from './Covid19';
import OrderingLinks from './OrderingLinks';

const LandingPage = () => (
  <div className="LandingPage">
    <div className="LandingPageWrap">
        <div className="LandingPageContent">
          <Covid19 />
          <OrderingLinks />
        </div>
    </div>
  </div>
);

export default LandingPage;
