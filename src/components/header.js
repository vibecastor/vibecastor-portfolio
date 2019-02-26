import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import NavBar from './navbar';

const HeaderWrapper = styled.header`
  background: #1a237e;
  width: 100%;

  .bar {
    background: #000051;
  }
`;

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/profile-small-180x170.jpeg/" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper id='home'>
        <div className='bar'><br /></div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            padding: '20px',
            margin: '5px',
            borderRadius: '50%',
            float: 'left',
            marginTop: '10px',

          }}
        />
        <NavBar />
      </HeaderWrapper>
    )}
  />
);

export default Header;
