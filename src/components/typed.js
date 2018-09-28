import React, { Component } from 'react';
import Typed from 'typed.js';
// import Proptypes from 'prop-types';

export default class Typing extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      onComplete: (self) => {
        self.startDelay = 100;
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
