import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #888586;
  width: 100%;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  h4 {
    margin: 2em;
  }
  li {
    display: inline;
    padding: .5em;
    margin: .1em;
    color: #ffffff;
    background-color: #7d8e9b;
    font-size: 1.2em;
    border-radius: 50%;
    border-style: solid;
    border-width: .1em;
    width: 100%;
    height: 100%;
  }
`;

const Footer = () => (
    <FooterWrapper>
      <ul className='social'>
        <li><a href='mailto:vibecastor@gmail.com'><i className="icon-gmail"></i></a></li>
        <li><a href='https://www.linkedin.com/in/mikecastor'><i className="icon-linkedin"></i></a></li>
        <li><a href='https://github.com/vibecastor'><i className="icon-github"></i></a></li>
      </ul>
      <h4><a href='mailto:vibecastor@gmail.com'>vibecastor@gmail.com</a></h4>
    </FooterWrapper>
);

export default Footer;
