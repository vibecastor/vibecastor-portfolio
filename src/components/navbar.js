import React from 'react';
import styled from 'styled-components';
import { Menu } from 'react-feather';

// const NavWrapper = styled.ul`
//   display: inline;
//   float: right;
//   margin-top: 2em;
//   margin-right: 1em;
//     li {
//       display: inline;
//       margin: .5em;
//       padding: .5em;
//       font-size: 125%;
//     }
//     a {
//       &:hover {
//         color: #2F4C54;
//       }
//     }
//
//   @media screen and (max-width: 599px) {
//     display: none;
//   }
// `;

const NavBarWrapper = styled.nav`
  width: 100%;

  ul {
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }  
  
  li {
      list-style: none;
      display: inline-block;
      padding: .8em;
  }
  
  a {
    text-decoration: none;
    color: #AD662A;
  }
  
  a:hover {
    color: #2F4C54;
  } 
  
  .toggle {
    width: 100%;
    padding: 10px 20px;
    text-align: right;
    box-sizing: border-box;
    color: #fff;
    font-size: 30px;
    display: none;
    li {
      background: #001f44;
    }
  }
  
  @media (max-width: 599px)
  {
    .toggle {
      display: block;
    }
    ul {
      width: 100%;
      display: none;
    }
    li {
      display: block;
      text-align: center;
      font-size: 180%;
    }
    .active {
      display: block;
    }
  }
  
   @media screen and (min-width: 600px) {
      li {
        font-size: 140%;
      }
    }
    
    @media screen and (min-width:  900px) {
       li {
        font-size: 155%;
       }
    }
  
    @media screen and (min-width:     1200px) {
       li {
        font-size: 170;
       }
  }
  
   @media screen and (min-width:     1800px) {
       li {
        font-size: 200%;
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




export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
    };
  }

  ToggleClass = (event) => {
    this.setState({ isActive: !this.state.isActive });
  }

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
          <li><a href="#about" onClick={event => scroll(event, 'about')}>about</a></li>
          <li><a href="#projects" onClick={event => scroll(event, 'projects')}>projects</a></li>
          <li>resume</li>
          <li><a href="#contact" onClick={event => scroll(event, 'contact')}>contact</a></li>
        </ul>
      </NavBarWrapper>
    );
  }
}
