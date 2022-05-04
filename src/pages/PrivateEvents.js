import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import HeadingGroup from "../components/HeadingGroup/index";
import H2Callout from "../components/H2Callout/index";
import PrivateRoomCallout from "../components/PrivateRoomCallout/index";
import PhotoGallery from "../components/PhotoGallery/index";
import MoreInfoCallout from "../components/MoreInfoCallout/index";

// Images
import PrivateEventsImage from "../images/private-events-image.jpg";

// Styles
import theme from '../styles/theme';
import media from '../styles/media';

const { color } = theme;


const PrivateEventsImagesData = [
  {
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg',
  },
  {
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg',
  },
  {
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg',
  },
  {
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg',
  },
];

const BackgroundImageContainer = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(${PrivateEventsImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 130%;
  filter: blur(4em);
  height: 100%;
  left: -15%;
  mask-image: linear-gradient(180deg, ${color.foreground}, rgba(${color.foreground}, 0));
  -webkit-mask-image: linear-gradient(180deg,${color.foreground}, rgba(${color.foreground}, 0));
  opacity: 0.5;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;

`;


const GradientOverlayBottom = styled.div `
  bottom: 0;
  height: 40em;
  left: 0;
  -webkit-mask-image: linear-gradient(180deg,rgba(2,2,10,0), ${color.foreground});
  mask-image: linear-gradient(180deg,rgba(2,2,10,0), ${color.foreground});
  overflow-x: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;

  &:before {
    background-color: #02020a;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;


const PrivateEvents = () => (
  <Layout absolute>
    <SEO title="Private Events" />
    <HeadingGroup
      h1Text={[<span>Experience</span>,<br />,  "Private Events"]}
      imageUrl={PrivateEventsImage}
      light
    />
    <H2Callout
      titleText="Plan your event"
      h2Text="Book your next private party or event at Poco Piatti. We offer flexible packages and personal attention to your party planning needs with each event customized to fit your criteria."
      ctaText="Book your event"
      ctaHref="tel:419-931-0281"
    />
    <PrivateRoomCallout
      titleText="Perrysburg Private Room"
      pText="We have a wide variety of menu options to satisfy any request. With space to accommodate six to fifty people, it is the perfect room for your next birthday, wedding rehearsal, graduation, business meeting or Saturday night out with your friends."
      ctaText="Book Now"
      ctaHref="tel:419-931-0281"
    />
    <PrivateRoomCallout
      titleText="Downtown Private Room"
      pText="Our stylish, elegant upstairs can accommodate ten to one-hundred people. Accompanied with a bar area, two private restrooms, and an elevator, you and your guests will feel exclusive and comfortable in our space. With such a large space, our layout can adapt for mingling, all seated (up to sixty) or a combination of both. Perfect for business gatherings, celebratory events or a special evening with friends, we guarantee you will be pleased dining with us."
      ctaText="Book Now"
      ctaHref="tel:419-931-0281"
      reverse
    />
    <BackgroundImageContainer>
      <BackgroundImage />
      <PhotoGallery imageData={PrivateEventsImagesData} />
      <MoreInfoCallout
        ctaText="Email"
        ctaHref="tel:419-931-0281"
      />
      <GradientOverlayBottom />
    </BackgroundImageContainer>
  </Layout>
)

export default PrivateEvents
