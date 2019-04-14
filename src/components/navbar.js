import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Menu } from 'react-feather';
import NavBarWrapper from '../styledComponents/navbarStyles';

class Navbar extends Component {
  state = {
    isActive: true,
  };

  ToggleClass = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  Scroll = (event, section) => {
    event.preventDefault();
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    return (
      <NavBarWrapper>
        <div className='toggle'>
          <Menu
            className='icon'
            onClick={this.ToggleClass}
          />
        </div>
        <ul className={(this.state.isActive) ? 'non-active' : 'active'}>
          <li>
            <Link to="/#projects" onClick={event => this.Scroll(event, 'projects')}>portfolio</Link>
          </li>
          <li>
            <Link to="/#about" onClick={event => this.Scroll(event, 'about')}>about</Link>
          </li>
          <li>
            <Link to="/#contact" onClick={event => this.Scroll(event, 'contact')}>contact</Link>
          </li>
        </ul>
      </NavBarWrapper>
    );
  }
}

export default Navbar;
