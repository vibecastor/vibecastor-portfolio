/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Typed from './typed';

import ScrollHome from './scrollHome';

const AboutWrapper = styled.div`
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
  h1 {
    background: #b03b3c;
    color: #000000;
  }
  border-radius: 1%;
  // background: #ABB6BA;
  background: #e2e2e2;
  color: #2F4C54;
  padding: 25px;
`;

const About = () => (
  <AboutWrapper id='about'>
    <AboutCard>
      <h1>
        About me...
      </h1>
      <p>A Software Developer with a background in Full Stack JavaScript, React and Node.js. I'm currently working on open source and personal projects while seeking a full time role as a developer on a great team!</p>

      <p>Thanks to the many partnerships I built during my career I have a good understanding of what it takes to be successful as a software developer. I'm a self starter with a voracious appetite to learn new technologies and concepts. I thrive best in highly interactive team environments and I'm a skilled communicator. Further, I can add a unique perspective to any team on the cusp or in the midst of large scale growth having helped grow Facebook Seattle from approximatley 150 engineers to over 2000 over a five year period.</p>

      <p>Some technologies that I have experience with include:
      Javascript (ES6+), React, Node.js, HTML5, CSS3, MongoDB, Apollo, GraphQL, Gatsby.js, Headless Wordpress, Contentful CMS, Netlify CMS, Babel, Webpack, Styled Components, SaSS, Salesforce, Tableau, Git, Object Oriented Design in Javascript, Data Structures and Algorithms</p>
    </AboutCard>
    <ScrollHome />
  </AboutWrapper>
);

export default About;
