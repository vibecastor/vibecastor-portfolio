import styled from 'styled-components';

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
    color: #ffffff;
  }
  
  a:hover {
    color: #d32f2f;
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

export default NavBarWrapper;
