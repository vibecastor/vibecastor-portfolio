import React, { Component } from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { Monitor, ArrowDown } from 'react-feather';
import {
  HomeContainer,
  Banner,
  Welcome,
  WelcomeWrapper,
  TitleWrapper,
} from '../styledComponents/homeStyles';

class Home extends Component {
  Scroll = (event, section) => {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    return (
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
                      <div className='icon-xs'>
                        <div />
                        <Monitor size={56} />
                        <div />
                      </div>
                      <div className='icon-s'>
                        <div />
                        <Monitor size={76} />
                        <div />
                      </div>
                      <div className='icon-m'>
                        <div />
                        <Monitor size={96} />
                        <div />
                      </div>
                      <div className='icon-l'>
                        <div />
                        <Monitor size={126} />
                        <div />
                      </div>
                      <div className='icon-xl'>
                        <div />
                        <Monitor size={166} />
                        <div />
                      </div>
                    </div>
                    <div className='two'>
                      <h3>Front-End Developer</h3>
                    </div>
                    <div className='three'>
                      <h2>Mike Castor</h2>
                    </div>
                  </TitleWrapper>
                </WelcomeWrapper>
                <br />
                <button
                  className='button'
                  type='button'
                  onClick={event => this.Scroll(event, 'projects')}>
                  <ArrowDown color='white' size={28} />
                </button>
              </Welcome>
            </Banner>
          </ HomeContainer >
        )}
      />
    );
  }
}

export default Home;
