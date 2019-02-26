import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Monitor, ArrowDown } from 'react-feather';
import Typed from './typed';

const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 0;
  text-align: center;
  margin-bottom: 0;
  background: #534bae; 
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #E8E7E7;
  width: 90%;
`;

const Welcome = styled.div`
  font-size: 80%;
  color: #ffffff;
  margin: auto; 
  
  button {
    opacity: 0.8;
    background: #d32f2f;
    margin: 1rem 1rem 0rem 1rem;
    padding: .8rem;
    line-height: .75;
    border-radius: 10px;
  }
  
  button:hover {opacity: 1}
    
  @media screen and (min-width:  600px) {
    font-size: 90%;
    button {
      margin-top: 4rem;
      padding: 1rem;
    }
  }
  
  @media screen and (min-width:  900px) {
    font-size: 100%;
    button {
      margin-top: 4rem;
      padding: 1.25rem;
    }
  }
  
  @media screen and (min-width:  1200px) {
    font-size: 150%;
    button {
      margin-top: 4rem;
      padding: 1.4rem;
    }
  }
  
  @media screen and (min-width:  1800px) {
    font-size: 200%;
    button {
      margin-top: 6rem;
      padding: 1.5rem;
    }
  }
`;

const WelcomeWrapper = styled.span`
  display: inline-block;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: linear-gradient(to bottom right, #000051, #d32f2f);
  border-radius: 10px;
  opacity: .83;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
  width: 30vh;
  
  .one {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .two { 
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    text-align: left;
    height: .5rem;
    padding-bottom: 1rem;
  }

  .three {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    text-align: left;
    height: .5rem;
    padding-bottom: 2rem;
  }

  @media screen and (min-width:  600px) {
    width: 40vh;
    font-size: 1.2rem;
    
    .one {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  
    .two { 
    
     
      padding-bottom: 1.5rem;
    }
  
    .three {
      
      padding-bottom: 3.2rem;
    }
    
  }
  
  @media screen and (min-width:  900px) {
    width: 45vh;
    font-size: 1.5rem;
    
    .one {
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }
  
    .two { 
      padding-bottom: 2rem;
    }
  
    .three {
      padding-bottom: 4.5rem;
    }
  }
  
  @media screen and (min-width:  1200px) {
    width: 70vh;
    font-size: 2.5rem;
    
    .one {
      margin-top: 5.5rem;
      margin-bottom: 1rem;
    }
  
    .two { 
      padding-bottom: 4rem;
    }
  
    .three {
      padding-bottom: 7.5rem;
    }
  }
  
  @media screen and (min-width:  1800px) {
    width: 100vh;
    font-size: 3.5rem;
    
    .one {
      margin-top: 7.5rem;
      margin-bottom: 1rem;
    }
  
    .two { 
      padding-bottom: 5rem;
    }
  
    .three {
      padding-bottom: 12rem;
    }
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
      <HomeContainer href='home'>
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
              <TitleWrapper>
                <div className='one' >
                  <div className='icon'>
                    <div />
                    <Monitor size={56} />
                    <div />
                  </div>
                </div>
                <div className='two'>
                  <h4>Software Developer</h4>
                </div>
                <div className='three'>
                  <h3>Mike Castor</h3>
                </div>
              </TitleWrapper>
            </WelcomeWrapper>
            <br />
            <button className='button'
              onClick={event => scrollDown(event, 'about')}>
              <ArrowDown color='white' size={28} />
            </button>
          </Welcome>
        </Banner>
      </HomeContainer >
    )}
  />
);

export default Home;
