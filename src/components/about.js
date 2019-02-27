/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { User } from 'react-feather';

import ScrollHome from './scrollHome';

const AboutWrapper = styled.div`
  margin: 0rem 1rem 2rem 1rem;
  display: grid;
  grid-template-columns: 5% minmax(310px, 1500px) 5%;
  justify-content: center;

  button {
    background: #d32f2f;
    border-radius: 12px;
    padding: .2rem .6rem .2rem .6rem;
    width: 100%;
  }
`;

const AboutHeader = styled.div`
  background: #000051;
  opacity: .8;
  height: 3rem;
  border-radius: 5px;
  h1 {
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 1.75rem;
    padding-left: 1rem;
    padding-top: .3rem;
  }
`;

const AboutCard = styled.div`

  background: #e2e2e2;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  .about-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-right: 2rem;
  }

  .icon {
    padding: 1rem;
    padding-left: 3rem;
  }

  .tech-intro {
    p {
      margin-left: 2.5rem;
    }
  }
`;

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25px, 100px));
  grid-gap: 1rem;
  justify-content: centered;

  li {
    list-style: none;
    background: #ff6659;
    border-radius: 5px;
    padding: .25rem;
    padding-left: .5rem;
    font-size: .8rem;
    font-weight: 100;
    opacity: .9;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

const About = () => (
  <AboutWrapper id='about'>
    <div />
    <AboutCard>
      <AboutHeader>
        <h1>About</h1>
      </AboutHeader>
      <div className='about-grid'>
        <div className='icon'>
          <User size={48} />
        </div>
        <p>I'm a Software Developer with a background in Full Stack JavaScript, React and Node.js.<br></br> I'm currently working on open source as well as personal projects while seeking a full-time role as a developer on a great team!</p>
      </div>
      <hr />
      <div className='tech-intro'>
        <p>Some technologies that I have experience with include:</p>
      </div>
      <TechList>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>GraphQL</li>
        <li>Apollo</li>
        <li>MongoDB</li>
        <li>CSS Grid</li>
        <li>Gatsby</li>
        <li>Wordpress API</li>
        <li>Contentful API</li>
        <li>Material UI</li>
        <li>Salesforce</li>
        <li>Tableau</li>
      </TechList>
      <ScrollHome />
    </AboutCard>
    <div />
  </AboutWrapper>
);

export default About;
