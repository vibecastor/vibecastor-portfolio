import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin, Github } from 'react-feather';

import ScrollHome from './scrollHome';

const FooterWrapper = styled.div`
  border-radius: 1%;

  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  h4 {
    margin: 2em;
  }
  ul {
    padding-inline-start: 0;
    padding-bottom: .5em;
  }

  li {
    display: inline;
    padding: 1em;
    margin: .1em;    
    font-size: 1.2em;
    border-radius: 50%;
    border-style: solid;
    border-width: .1em;
    width: 100%;
    height: 100%;
    
    &:hover {
      background: #AD662A;
    }
    
    &:touch {
      background: #AD662A;
    }     
  }
  
  .email {
    color: #AD662A;
    
    &:hover {
      color: rgb(0, 0, 238);
    }
  }
  
  .gmail {
    color: #C45445;
  }
  
  
`;

const Footer = () => (
    <FooterWrapper id='contact'>
      <ul className='social'>
        <li><a className='gmail' href='mailto:vibecastor@gmail.com'>
          <Mail/>
        </a></li>
        <li><a href='https://www.linkedin.com/in/mikecastor'>
          <Linkedin/>
        </a></li>
        <li><a href='https://github.com/vibecastor'>
          <Github/>
        </a></li>
      </ul>
      <p><a className='email' href='mailto:vibecastor@gmail.com'>vibecastor@gmail.com</a></p>
      <ScrollHome />
    </FooterWrapper>
);

export default Footer;
