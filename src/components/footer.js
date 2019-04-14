import React from 'react';
import { Mail, Linkedin, GitHub } from 'react-feather';
import FooterWrapper from '../styledComponents/footerStyles';

const Footer = () => (
  <FooterWrapper id='contact'>
    <ul className='social'>
      <li><a className='gmail' href='mailto:vibecastor@gmail.com?subject=From%20Your%20Website'>
        <Mail />
      </a></li>
      <li><a href='https://www.linkedin.com/in/mikecastor' target='_blank' rel='noreferrer'>
        <Linkedin />
      </a></li>
      <li><a href='https://github.com/vibecastor' target='_blank' rel='noreferrer'>
        <GitHub />
      </a></li>
    </ul>
    <p><a className='email' href='mailto:vibecastor@gmail.com'>vibecastor@gmail.com</a></p>
  </FooterWrapper>
);

export default Footer;
