/* eslint-disable max-len */
import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ScrollHome from './scrollHome';

import {
  AboutWrapper,
  AboutCard,
  TechList,
} from '../styledComponents/aboutStyles';

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        mikeCabin: file(relativePath: {regex: "/Mike-Cabin.jpg/"}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AboutWrapper id='about'>
        <div />
        <AboutCard>
          <h1>About</h1>
          <div className='about-grid'>
            <div className='image'>
              <div className='flex-item-1' />
              <Img
                fluid={data.mikeCabin.childImageSharp.fluid}
                style={{
                  flex: 1,
                  height: 'auto',
                  maxWidth: '25%',
                  borderRadius: '50%',
                }}
              />
              <div className='flex-item-3' />
            </div>
            <div className='tech-intro' >
              <p>
                I'm a Front-End Web Developer with a passion for building useful and creative applications.<br />  I'm open to full-time, contract and freelance opportunities in the Seattle area or remote.<br />  Let's build something great!
                </p>
            </div>
          </div>
          <hr />
          <h2>Technology/Skills</h2>
          <TechList>
            <li>JavaScript</li>
            <li>ES6+</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>MERN Stack</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>CSS Grid</li>
            <li>Material-UI</li>
            <li>Apollo</li>
            <li>GraphQL</li>
            <li>Gatsby</li>
            <li>MongoDB</li>
            <li>Contentful</li>
            <li>Wordpress API</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>Salesforce</li>
            <li>Tableau</li>
          </TechList>
          <ScrollHome />
        </AboutCard>
        <div />
      </AboutWrapper >
    )}
  />
);

export default About;
