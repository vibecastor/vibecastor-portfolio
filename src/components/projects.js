import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { Monitor, Link2, GitHub, Smartphone } from "react-feather";
import {
  ProjectsSection,
  ProjectsHeader,
  ProjectsGrid,
  ProjectGridItem,
  ProjectContentGrid,
  TechChips,
  ProjectActions
} from "../styledComponents/projectsStyles";

const Projects = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        site {
          siteMetadata {
            title
          }
        }
        thailandImage: file(relativePath: { regex: "/Dreaming-of-Thailand.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        orcaImage: file(relativePath: { regex: "/Orcasound.png/" }) {
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
          <h1>Portfolio</h1>
        </ProjectsHeader>
        <ProjectsGrid>
          <ProjectGridItem>
            <Img
              fluid={data.orcaImage.childImageSharp.fluid}
              style={{
                backGround: "#000000",
                height: "auto",
                width: "auto",
                padding: "5px",
                borderRadius: "5px 5px 0px 0px"
              }}
            />
            <ProjectContentGrid>
              <h4 className='one'>Orcasound</h4>
              <Smartphone className='info' size={44} />
              <ul className='three'>
                <li>An open source project dedicated to Orca conservation</li>
              </ul>
              <TechChips className='four'>
                <ul>
                  <li>React</li>
                  <li>Material-UI</li>
                  <li>Apollo/GraphQL</li>
                  <li>Phoenix</li>
                </ul>
              </TechChips>
              <ProjectActions className='five'>
                <a href='http://beta.orcasound.net' target='_blank' rel='noreferrer'>
                  <button type='button'>
                    Visit Site <Link2 className='icon' size={20} />
                  </button>
                </a>
                <a
                  href='https://github.com/orcasound/orcasite/tree/v2-ui'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button type='button'>
                    Source <GitHub className='icon' size={20} />
                  </button>
                </a>
              </ProjectActions>
            </ProjectContentGrid>
          </ProjectGridItem>
          <ProjectGridItem>
            <Img
              fluid={data.thailandImage.childImageSharp.fluid}
              style={{
                height: "auto",
                width: "auto",
                padding: "5px",
                borderRadius: "5px 5px 0px 0px"
              }}
            />
            <ProjectContentGrid>
              <h4 className='one'>Dreaming of Thailand</h4>
              <Monitor className='info' size={44} />
              <ul className='three'>
                <li>Photo Blog built with Gatsby featuring fast image loading</li>
              </ul>
              <TechChips className='four'>
                <ul>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>GraphQL</li>
                  <li>CSS Grid</li>
                  <li>styled-components</li>
                  <li>PWA</li>
                </ul>
              </TechChips>
              <ProjectActions className='five'>
                <a href='https://dreamingofthailand.com/' target='_blank' rel='noreferrer'>
                  <button type='button'>
                    Visit Site <Link2 className='icon' size={20} />
                  </button>
                </a>
                <a
                  href='https://github.com/dreaming-of-thailland-blog/dreaming-of-thailand-v2'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button type='button'>
                    Source <GitHub className='icon' size={20} />
                  </button>
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
