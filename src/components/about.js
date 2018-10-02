/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

import ScrollHome from './scrollHome';

const AboutWrapper = styled.div`
  

    h1 { 
      color: #AD662A;
      text-shadow: 7px 20px #2F4C54;
      margin-left: .5em;
    }
    
    button {
      margin: 10px 10px 0px 1px;
    }
  
    @media screen and (max-width: 599px) {
      padding: 10px;
      font-size: 125%;
    }
  
     @media screen and (min-width: 600px) {
      font-size: 140%;
      padding: 12px;
    }
    
    @media screen and (min-width:  900px) {
    font-size: 155%;
    padding: 15px;
  }
  
    @media screen and (min-width:     1200px) {
    font-size: 170%;
    padding: 15px;
  }
  
   @media screen and (min-width:     1800px) {
    font-size: 200%;
    padding: 15px;
  }
`;

const AboutCard = styled.div`
  border-radius: 1%;
  // background: #ABB6BA;
  background: #AD662A;
  color: #2F4C54;
  padding: 25px;
`;

const About = () => (
  <AboutWrapper id='about'>
    <h1>
      About me...
    </h1>
    <AboutCard>
    <p>I’m a Seattle based full-stack JavaScript and Node.js developer with a passion for building elegant, bespoke, interactive applications.</p>

    <p>I have experience in all areas of the stack from building and designing responsive front-ends to coding RESTful APIs.</p>

    <p>I'm at home on any project that requires a creative, organized developer with excellent communication skills.</p>
    </AboutCard>
    <ScrollHome />
  </AboutWrapper>
);

export default About;
