import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Link2, GitHub } from 'react-feather';

import ScrollHome from './scrollHome';

const ProjectsSection = styled.div`
  //background: #534bae;
`;

const ProjectsHeader = styled.div`
  background: #534bae;
  opacity: .8;
  height: 3rem;
  border-radius: 0% 0% 5px 5px;
  h1 {
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 1.75rem;
    padding-left: 2rem;
    margin: 0;
    padding-top: .3rem;
    

  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem 2rem;
  margin: 2rem;
`;

const ProjectGridItem = styled.article`
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  background: #e2e2e2;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TechChips = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: .5rem;
    padding-left: .5rem;
    padding-right: .5rem;
    
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
  }
`;

const ProjectActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: .75rem;

  button {
    display: flex;
    flex-direction: row;
    //justify-content: center;
    background: #d32f2f;
    color: #ffffff;
    border-radius: 8px;
    padding: .5rem;
    opacity: .8;

    .icon {
      padding-left: .5rem;
    }
  }

  button:hover {opacity: 1}

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
            fluid(maxWidth: 699) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { regex: "/phrasecraze-image.png/" }) {
          childImageSharp {
            fluid(maxWidth: 699) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { regex: "/plenty-of-dogs-image.png/" }) {
          childImageSharp {
            fluid(maxWidth: 699) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageFour: file(relativePath: { regex: "/Dreaming-of-Thailand.png/" }) {
          childImageSharp {
            fluid(maxWidth: 699) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageFive: file(relativePath: { regex: "/Orcasound.png/" }) {
          childImageSharp {
            fluid(maxWidth: 699) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ProjectsSection>
        <ProjectsHeader>
          <h1>Projects</h1>
        </ProjectsHeader>
        <ProjectsGrid>
          <ProjectGridItem>
            <Img
              fluid={data.imageFive.childImageSharp.fluid}
              style={{
                height: 'auto',
                width: 'auto',
                bottom: '.5em',
                padding: '5px',
                borderRadius: '5px',
              }}
            />
            <div className='project-content'>
              <h2>Orcasound</h2>
              <ul>
                <li>An open source project dedicated to Orca conservation</li>
                <li></li>
              </ul>
              <TechChips>
                <ul>
                  <li>React</li>
                  <li>Material-ui</li>
                  <li>Apollo/GraphQL</li>
                  <li>Phoenix</li>
                </ul>
              </TechChips>
              <ProjectActions>
                <button>Visit Site <Link2 className='icon' /></button>
                <button>View Source <GitHub className='icon' /></button>
              </ProjectActions>
            </div>
          </ProjectGridItem>
          <ProjectGridItem>
            <Img
              fluid={data.imageFour.childImageSharp.fluid}
              style={{
                height: 'auto',
                width: 'auto',
                bottom: '.5em',
                padding: '5px',
                borderRadius: '5px',
              }}
            />
            <div>
              <h2>Dreaming of Thailand</h2>
              <ul>
                <li>An extremely fast travel photography blog</li>
                <li></li>
              </ul>
              <TechChips>
                <ul>
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>Gatsby.js</li>
                  <li>CSS Grid</li>
                </ul>
              </TechChips>
              <ProjectActions>
                <button>Visit Site  <Link2 className='icon' /></button>
                <button>View Source  <GitHub className='icon' /></button>
              </ProjectActions>
            </div>
          </ProjectGridItem>
        </ProjectsGrid>
      </ProjectsSection>
    )}
  />
);

export default Projects;
