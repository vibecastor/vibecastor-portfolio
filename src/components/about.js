/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

import ScrollHome from './scrollHome';

const AboutWrapper = styled.div`
  background-color: #888586;
  padding: 10px;
`;

const About = () => (
  <AboutWrapper id='about'>
    <h1>
      About me...
    </h1>
    <p>I’m a Seattle based full-stack JavaScript and Node.js developer with a passion for building elegant, bespoke, interactive applications.</p>

    <p>I have experience in all areas of the stack from building and designing responsive front-ends to coding RESTful APIs.</p>

    <p>I'm at home on any project that requires a creative, organized developer with excellent communication skills.</p>
  <ScrollHome />
  </AboutWrapper>
);

export default About;
