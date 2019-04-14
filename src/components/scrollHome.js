import React from 'react';
import { ChevronUp } from 'react-feather';

const homeScroller = (event, section) => {
  event.preventDefault();
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const ScrollHome = () => (
  <button href='#home' onClick={event => homeScroller(event, 'home')}>
    <ChevronUp color='#ffffff' size={34} />
  </button>
);

export default ScrollHome;
