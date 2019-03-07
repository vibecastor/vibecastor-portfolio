import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { SmartPhone, Monitor, Link2, GitHub, Smartphone } from 'react-feather';

import ScrollHome from './scrollHome';

const ProjectsSection = styled.div`
  //background: #534bae;
`;

const ProjectsHeader = styled.div`
  background: #534bae;
  opacity: .8;
  height: 3rem;
  border-radius: 0% 0% 5px 5px;
  margin: 0;
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
  grid-template-columns: repeat(auto-fill, minmax(310px, 400px));
  grid-gap: 2rem 2rem;
  margin: 2rem;
  justify-content: center;
`;

const ProjectGridItem = styled.article`
  max-width: 1000px;
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

  h4 {
    background: #9a0007;
    opacity: .8;
    border-radius: 0px 0px 5px 5px;
    color: #ffff;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 0;
    padding: .5rem;
    padding-left: 1rem;
  }
  }
`;

const ProjectContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 30% auto auto auto 50%;

  .one {
    grid-column: 1 / 9;
    grid-row: 1 / 2;
  }

  .info {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    justify-content: centered;
    padding-top: 1rem;
    padding-left: 2rem;
  }

  .three {
    grid-column: 2 / 9;
    grid-row: 2 / 3;
    list-style: none;
  }

  .four {
    grid-column: 1 / 9;
    grid-row: 3 / 4;
  }

  .five {
    grid-column: 1 / 9;
    grid-row: 4 / 5;    
  }

  .six {
    grid-column: 1 / 9;
    grid-row: 5 / 6;
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
  padding-bottom: 1rem;

  a {
    text-decoration: none;
  } 
  
  button {
    font-size: .85rem;
    //height: 3rem;
    //flex-direction: row;
    margin: 1rem;
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
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageFive: file(relativePath: { regex: "/Orcasound.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ProjectsSection id='projects'>
        <ProjectsHeader>
          <h1>Projects</h1>
        </ProjectsHeader>
        <ProjectsGrid>
          <ProjectGridItem>
            <Img
              fluid={data.imageFive.childImageSharp.fluid}
              style={{
                backGround: '#000000',
                height: 'auto',
                width: 'auto',
                padding: '5px',
                borderRadius: '5px 5px 0px 0px',
              }}
            />
            <ProjectContentGrid>
              <h4 className='one'>Orcasound</h4>
              <Smartphone className='info' size={44} />
              <ul className='three'>
                <li>Listen live to underwater sound in Orca habitat</li>
              </ul>
              <TechChips className='four'>
                <ul>
                  <li>React</li>
                  <li>Material-ui</li>
                  <li>Apollo/GraphQL</li>
                  <li>Phoenix</li>
                </ul>
              </TechChips>
              <ProjectActions className='five'>
                <a href='http://beta.orcasound.net/v2' target='_blank' rel='noreferrer'>
                  <button type='button'>Visit Site <Link2 className='icon' size={20} /></button>
                </a>
                <a href='https://github.com/orcasound/orcasite/tree/v2-ui' target='_blank' rel='noreferrer'>
                  <button type='button'>Source <GitHub className='icon' size={20} /></button>
                </a>
              </ProjectActions>
            </ProjectContentGrid>
          </ProjectGridItem>
          <ProjectGridItem>
            <Img
              fluid={data.imageFour.childImageSharp.fluid}
              style={{
                height: 'auto',
                width: 'auto',
                padding: '5px',
                borderRadius: '5px 5px 0px 0px',
              }}
            />
            <ProjectContentGrid>
              <h4 className='one'>Dreaming of Thailand</h4>
              <Monitor className='info' size={44} />
              <ul className='three'>
                <li>A photography blog optimized for high performance image processing</li>
              </ul>
              <TechChips className='four'>
                <ul>
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>Gatsby.js</li>
                  <li>CSS Grid</li>
                </ul>
              </TechChips>
              <ProjectActions className='five'>
                <a href='https://dreamingofthailand.com/' target='_blank' rel='noreferrer'>
                  <button type='button'>Visit Site  <Link2 className='icon' size={20} /></button>
                </a>
                <a href='https://github.com/dreaming-of-thailland-blog/dreaming-of-thailand-v2' target='_blank' rel='noreferrer'>
                  <button type='button'>Source  <GitHub className='icon' size={20} /></button>
                </a>
              </ProjectActions>
            </ProjectContentGrid>
          </ProjectGridItem>
        </ProjectsGrid>
      </ProjectsSection>
    )}
  />
);

export default Projects;
