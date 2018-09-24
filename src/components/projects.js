/* eslint-disable max-len */
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ScrollHome from './scrollHome';

const ProjectsWrapper = styled.div`
  background-color: #888586;
  padding: 10px;
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
        <h2>Event Us</h2>
      <Img
        fluid={data.imageOne.childImageSharp.fluid}
        style={{
          width: '70%',
        }}
      />
        <h2>Phrasecraze</h2>
        <Img
          fluid={data.imageTwo.childImageSharp.fluid}
          style={{
            width: '70%',
          }}
        />
        <h2>Plenty of Dogs</h2>
        <Img
          fluid={data.imageThree.childImageSharp.fluid}
          style={{
            width: '70%',
          }}
        />
        <ScrollHome />
      </ProjectsWrapper>
    )}
  />
);

export default Projects;
