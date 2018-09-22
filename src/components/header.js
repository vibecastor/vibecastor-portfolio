import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import NavBar from './navbar';

// import profile from '../assets/profile-small-180x170.jpeg';


const HeaderWrapper = styled.div`
  background: #575358;
  border-style: dashed;
  border-color: blue;
  width: 100%;
  height: 100px;
  div {
       border-style: dashed;
       border-color: yellow; 
       float: left;
       display: inline-block;
       margin-right: 15px;
      h4 {
          border-style: dashed;
          border-color: green;
          float: left;
          margin-left: 10px;
          padding-top: 25px;
      }
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
        <div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            padding: '20px',
            borderRadius: '50%',
            borderStyle: 'dashed',
            borderColor: 'red',
            display: 'inline-block',
            marginTop: '10px',
          }}
        />
        <h4>{data.site.siteMetadata.title}</h4>
          <NavBar/>
        </div>

      </HeaderWrapper>
    )}
  />
);
