import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 0;
  text-align: center;
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
      color: yellow; 
  }
  h2 {
      color: yellow;
     }
`;

const scrollDown = (event, section) => {
  event.preventDefault();
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const Home = () => (
 <StaticQuery
   query={graphql`
      query HomeQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/beach.jpeg/" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HomeContainer>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{
          width: '100%',
        }}
      />
        <Banner>
          <h1>Hello, I'm Mike,</h1>
          <h2>a creative, full-stack dev in Seattle!</h2>

        <button href='#about' onClick={event => scrollDown(event, 'about')}>click me!</button>
        </Banner>
      </HomeContainer>
    )}
 />
);

export default Home;
