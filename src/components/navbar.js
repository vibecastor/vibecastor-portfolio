import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  border-style: dashed;
  border-color: orange;
  float: right;
  height: 90px;
  ul {
    padding-top: 28px;
    border-style: dashed;
    border-color: green;
    li {
      display: inline;
      margin: .3em;
      padding: .3em;
    }
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
  <ul>
    <li><a href="#about" onClick={event => scroll(event, "about")}>about</a></li>
    <li><a href="#projects" onClick={event => scroll(event, "projects")}>projects</a></li>
    <li><a href="#contact" onClick={event => scroll(event, "contact")}>contact</a></li>
  </ul>
  </NavWrapper>
);

export default Navbar;
