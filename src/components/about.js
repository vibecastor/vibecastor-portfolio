/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

import ScrollHome from './scrollHome';

const AboutWrapper = styled.div`
  background: #F9F7F2;
  color: #2F4C54;
  padding: 25px;
`;

const AboutCard = styled.div`
  border-radius: 1%;
  background: #ABB6BA;
  color: #2F4C54;
  padding: 25px;
`;

const About = () => (
  <AboutWrapper id='about'>
    <AboutCard>
    <h1>
      About me...
    </h1>
    <p>I’m a Seattle based full-stack JavaScript and Node.js developer with a passion for building elegant, bespoke, interactive applications.</p>

    <p>I have experience in all areas of the stack from building and designing responsive front-ends to coding RESTful APIs.</p>

    <p>I'm at home on any project that requires a creative, organized developer with excellent communication skills.</p>
  <ScrollHome />
    </AboutCard>
  </AboutWrapper>
);

export default About;
