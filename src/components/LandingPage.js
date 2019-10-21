import React from 'react';
import '../sass/_LandingPage.scss';
import OnlineOrdering from './OnlineOrdering';
import ThePocoExperience from './ThePocoExperience';

const LandingPage = () => (
  <div className="LandingPage">
    <div className="LandingPageWrap">
        <section className="LandingImage">
            
        </section>
        <aside className="LandingLinks">
            <OnlineOrdering />
        </aside>
    </div>
  </div>
);

export default LandingPage;
