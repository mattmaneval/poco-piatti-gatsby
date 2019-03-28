import React from 'react';
import './_Video.scss';

const Video = () => (
  <div className="Video">
    <div className="VideoWrap">
      <section>
        <h2>"The Mediterranean food at this restaurant (with heavy
        Leganese and Italian influences) is so beautifully prepared
        that it seems like a more elite spot, but you can certainly find
        great values."
        </h2>
        <p>- The Blade</p>
      </section>
      <aside>
        <iframe title="Poco Piatti" src="https://player.vimeo.com/video/325445778"
        width="640" height="360" frameborder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </aside>
    </div>
  </div>
);

export default Video;
