import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ScrollHome from './scrollHome';

const ProjectsWrapper = styled.div`
  background-color: #F9F7F2;
  padding: 12px;
  
    @media screen and (max-width: 599px) {
      padding: 10px;
      font-size: 75%;
       h1 {
        margin: 5px;
    }
    
    @media screen and (min-width: 600px) {
      padding: 12px;
      font-size: 90%;
       h1 {
        margin: 5px;
    }
  }

    @media screen and (min-width: 900px) {
      padding: 15px;
      font-size: 100%;
       h1 {
        margin: 12px;
    }
  }

    @media screen and (min-width: 1200px) {
      font-size: 125%;
      h1 {
        margin: 12px;
      }
    }
    
`;

const ProjectsCard = styled.div`
  border-radius: 1%;
  background-color: #ABB6BA;
  color: #2F4C54;
  h2 {
    padding: 12px;
    margin: 0px;
  }
  p {
    float: left;
    padding: 2px;
  }
  
  @media screen and (min-width: 600px) {
     font-size: 90%;
     p {
      margin: 8px; 
     }
  }

  @media screen and (min-width: 900px) {
    font-size: 100%;
    p {
      margin: 10px; 
    }
  }

  @media screen and (min-width: 1200px) {
    font-size: 125%;
    p {
      margin: 15px; 
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        site {
          siteMetadata {
            title
          }
        }
        imageOne: file(relativePath: { regex: "/eventus-image.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { regex: "/phrasecraze-image.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { regex: "/plenty-of-dogs-image.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ProjectsWrapper id='projects'>
        <h1>Projects</h1>
        <ProjectsCard>
        <h2>Event Us</h2>
          <p>EventUs is a social event creation and discovery application. A user can sign up, create a               profile, create an event and view a list of events in an event feed on the main page view.               This application was built for a social running club called Hash House Harriers.  The      application is built using the MERN Stack (MongoDB, Express, React/Redux and Node).</p>
          <a href='http://eventus.site'>
      <Img
        fluid={data.imageOne.childImageSharp.fluid}
        style={{
          height: 'auto',
          width: 'auto',
          bottom: '.5em',
          padding: '5px',
          margin: '10px',
        }}
      />
          </a>
        </ProjectsCard>

        <ProjectsCard>
        <h2>Phrasecraze</h2>
          <p>PhaseCraze is a word game REST API that consists of both a TCP server and HTTP server.  The              TCP server is hosted on a Digital Ocean Droplet and the HTTP server is hosted on Heroku.        This project only runs on the command line.  Phrasecraze was built with Node.js, Express and MongoDB.</p>
          <a href='https://github.com/spinaltaper/phrasecraze'>
        <Img
          fluid={data.imageTwo.childImageSharp.fluid}
          style={{
            height: 'auto',
            width: 'auto',
            bottom: '.5em',
            padding: '5px',
            margin: '10px',
          }}
        />
          </a>
        </ProjectsCard>

        <ProjectsCard>
        <h2>Plenty of Dogs</h2>
            <p>Plenty of Dogs is a client side application where a user can take a quiz to discover their               preferred dog for adoption.  The quiz utilizes data from an API request to dog.ceo which is               a public API of dog images.  The application then takes the results of the users quiz and                makes a call to the Petfinder API which contains data on dogs that are currently available               for adoption.  Plenty of Dogs was built with vanilla ES5 javascript, jQuery, Express and  PostgreSQL.</p>
          <a href='http://plenty-of-dogs.site'>
          <Img
          fluid={data.imageThree.childImageSharp.fluid}
          style={{
            height: 'auto',
            width: 'auto',
            bottom: '.5em',
            padding: '5px',
            margin: '10px',
          }}
        />
          </a>
          </ProjectsCard>
        <ScrollHome />
      </ProjectsWrapper>
    )}
  />
);

export default Projects;
