import React from 'react';
import './_Video.scss';

const Video = () => (
  <div className="Map">
    <div className="MapWrap">
      <iframe src="https://player.vimeo.com/video/325445778"
      width="640" height="360" frameborder="0"
      webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>
    </div>
  </div>
);

export default Video;
