import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin, GitHub } from 'react-feather';

const FooterWrapper = styled.div`
  background: #1a237e;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;

  ul {
    text-align: center;
    padding-inline-start: 0;
    padding-bottom: .5em;
    margin: 0;
  }

  li {
    text-align: center;
    display: inline;
    padding: 1em;
    margin: .1em;    
    font-size: 1.2em;
    width: 100%;
    height: 100%;
    
    &:hover {
      background: #AD662A;
    }
    
    &:touch {
      background: #AD662A;
    }     
  }
  
  p {
    margin: 1em;
    padding: .5em;
    text-align: center;
  }
  
  .email {
    text-align: center;
    color: #d32f2f;
    
    &:hover {
      color: #9a0007;
    }
  }
  
  .gmail {
    color: #9a0007;
  }
  
`;

const Footer = () => (
  <FooterWrapper id='contact'>
    <ul className='social'>
      <li><a className='gmail' href='mailto:vibecastor@gmail.com'>
        <Mail />
      </a></li>
      <li><a href='https://www.linkedin.com/in/mikecastor'>
        <Linkedin />
      </a></li>
      <li><a href='https://github.com/vibecastor'>
        <GitHub />
      </a></li>
    </ul>
    <p><a className='email' href='mailto:vibecastor@gmail.com'>vibecastor@gmail.com</a></p>
  </FooterWrapper>
);

export default Footer;
