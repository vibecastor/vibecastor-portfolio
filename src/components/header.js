import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import NavBar from './navbar';
import HeaderWrapper from '../styledComponents/headerStyles';


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
