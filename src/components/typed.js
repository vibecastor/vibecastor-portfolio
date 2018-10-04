import React, { Component } from 'react';
import Typed from 'typed.js';
// import Proptypes from 'prop-types';

export default class Typing extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings,
      typeSpeed: 180,
      backSpeed: 120,
      loop: true,
      onComplete: (self) => {
        self.startDelay = 150;
      },
    };

    this.typed = new Typed(this.element, options);
    // if (this.element) {
    //   setTimeout(() => {
    //     this.element.classList.remove('cursor--hidden');
    //   }, 4000);
    // }
  }

  componentWillUnmount() {
    this.typed.destroy();
    clearTimeout(); // this.classTimeout
  }


  render() {
    return (
      <span
        className='wrap'
        ref={(element) => {
          this.element = element;
        }}
      />
    );
  }
}
