import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import NavBar from './navbar';


const HeaderWrapper = styled.header`
  background: #ABB6BA;
  color: #2F4C54;
  width: 100%;
  height: 5em;
  a {
    color: #AD662A;
  }
      h3 {
          border-style: dashed;
          border-color: green;
          display: inline;           
      }
`;

export default () => (
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
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            padding: '30px',
            margin: '5px',
            borderRadius: '50%',
            float: 'left',
            marginTop: '10px',

          }}
        />
        {/*<h3>{data.site.siteMetadata.title}</h3>*/}
          <NavBar/>
      </HeaderWrapper>
    )}
  />
);
