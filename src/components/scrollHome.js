import React from 'react';
// import styled from 'styled-components';

// const styledHomeButton = styled.button`
//   background-color: #575358;
//   margin: 5px;
//   padding: 5px;
//   border: 1 rem solid;
// `;

const homeScroller = (event, section) => {
  event.preventDefault();
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const ScrollHome = () => (
  <button href='#home' onClick={event => homeScroller(event, 'home')}>scroll home</button>
);

export default ScrollHome;
