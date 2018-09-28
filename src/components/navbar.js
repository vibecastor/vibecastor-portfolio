import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.ul`
  display: inline;
  float: right;
  margin-top: 35px; 
    li {
      display: inline;
      margin: .5em;
      padding: .5em;
    }
`;

const scroll = (event, section) => {
  event.preventDefault();
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const Navbar = () => (
  <NavWrapper>
    <li><a href="#about" onClick={event => scroll(event, 'about')}>about</a></li>
    <li><a href="#projects" onClick={event => scroll(event, 'projects')}>projects</a></li>
    <li>resume</li>
    <li><a href="#contact" onClick={event => scroll(event, 'contact')}>contact</a></li>
  </NavWrapper>
);

export default Navbar;
