import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';
import Typed from './typed';


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
  color: #E8E7E7;
  width: 90%;
`;

const Welcome = styled.h1`
  margin: auto;
  button {
    opacity: 0.6;
  }
  
  button:hover {opacity: 1}
  
  @media screen and (max-width: 599px) {
    font-size: 80%;
    button {
      padding: .7em;
      margin-bottom: 1.2em;
    }
  }
  
  @media screen and (min-width:  600px) {
    font-size: 90%;
  }
  
  @media screen and (min-width:  900px) {
    font-size: 100%;
  }
  
  @media screen and (min-width:  1200px) {
    font-size: 150%;
  }
  
  @media screen and (min-width:  1800px) {
    font-size: 200%;
  }
  
`;

const WelcomeWrapper = styled.span`
  display: inline-block;
`;

const scrollDown = (event, section) => {
  event.preventDefault();
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

// console.log('ChevronDown', ChevronDown);

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
          opacity: '.90',
          filter: 'grayscale(80%)',
        }}
      />
        <Banner>
          <Welcome>
          <WelcomeWrapper>
          <h2>Hello, I'm Mike,</h2>
          <h2>a Seattle based software developer who loves<br />
            <Typed
            strings={['Javascript.', 'Node.js', 'Data.']}
            />
          </h2>
          </WelcomeWrapper>
            <br />
            <button href='#about' onClick={event => scrollDown(event, 'about')}>
              <ChevronDown color='white' size={28} />
            </button>
          </Welcome>
        </Banner>
      </HomeContainer>
    )}
 />
);

export default Home;
