import React from 'react';
import '../sass/_LandingPage.scss';
import OnlineOrdering from './OnlineOrdering';

const LandingPage = () => (
  <div className="LandingPage">
    <div className="LandingPageWrap">
        <section>
          <OnlineOrdering />
        </section>
    </div>
  </div>
);

export default LandingPage;