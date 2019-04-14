import styled from 'styled-components';


const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 0;
  text-align: center;
  margin-bottom: 0;
  background: #534bae; 
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #E8E7E7;
  width: 90%;
`;

const Welcome = styled.div`
  font-size: 80%;
  color: #ffffff;
  margin: auto; 
  
  button {
    color: white;
    opacity: 0.8;
    background: #d32f2f;
    margin: 1rem 1rem 0rem 1rem;
    padding: .8rem;
    line-height: .75;
    border-radius: 10px;
  }

  button:hover {opacity: 1}
    
  @media screen and (min-width: 600px) {
    font-size: 90%;
    button {
      margin-top: 4rem;
      padding: 1rem;
    }
  }
  
  @media screen and (min-width: 900px) {
    font-size: 100%;
    button {
      margin-top: 4rem;
      padding: 1.25rem;
    }
  }
  
  @media screen and (min-width: 1200px) {
    font-size: 150%;
    button {
      margin-top: 4rem;
      padding: 1.4rem;
    }
  }
  
  @media screen and (min-width: 1800px) {
    font-size: 200%;
    button {
      margin-top: 6rem;
      padding: 1.5rem;
    }
  }
`;

const WelcomeWrapper = styled.span`
  display: inline-block;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: linear-gradient(to bottom right, #000051, #d32f2f);
  border-radius: 10px;
  opacity: .83;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
  width: 65vw;
  
  .one {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-top: 1rem;
    margin-bottom: 1rem;

    .icon-xs {
      display: block;
    }
    .icon-s {
     display: none;
    }
    .icon-m {
     display: none;
    }
    .icon-l {
     display: none;
    }
    .icon-xl {
     display: none;
     }
  }

  .two { 
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    text-align: left;
    height: .5rem;
    padding-bottom: 1rem;
  }

  .three {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    text-align: left;
    height: .5rem;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 600px) {
    width: 57vw;
    font-size: 1.1rem;
    
    .one {
      margin-top: 2rem;
      margin-bottom: 1rem;

    .icon-xs {
        display: none;
      }
     .icon-s {
       display: block;
     }
     .icon-m {
       display: none;
     }
     .icon-l {
       display: none;
     }
     .icon-xl {
       display: none;
     }
    }
  
    .two { 
      padding-bottom: 1.5rem;
    }
  
    .three {
      padding-bottom: 3.2rem;
    }
  }
  
  @media screen and (min-width: 900px) {
    width: 60vw;
    font-size: 1.8rem;
    
    .one {
      margin-top: 2.5rem;
      margin-bottom: 2rem;

      .icon-xs {
        display: none;
      }
      .icon-s {
       display: none;
      }
      .icon-m {
       display: block;
      }
      .icon-l {
       display: none;
      }
      .icon-xl {
       display: none;
      }
    }
  
    .two { 
      padding-bottom: 2rem;
    }
  
    .three {
      padding-bottom: 4.5rem;
    }
  }
  
  @media screen and (min-width: 1200px) {
    width: 60vw;
    font-size: 2.3rem;
    
    .one {
      margin-top: 5.5rem;
      margin-bottom: 3rem;

      .icon-xs {
        display: none;
      }
      .icon-s {
       display: none;
      }
      .icon-m {
       display: none;
      }
      .icon-l {
       display: block;
      }
      .icon-xl {
       display: none;
      }
    }
  
    .two { 
      padding-bottom: 4rem;
    }
  
    .three {
      padding-bottom: 7.5rem;
    }
  }
  
  @media screen and (min-width: 1800px) {
    width: 65vw;
    font-size: 3.5rem;
    
    .one {
      margin-top: 7.5rem;
      margin-bottom: 4rem;

      .icon-xs {
        display: none;
      }
      .icon-s {
       display: none;
      }
      .icon-m {
       display: none;
      }
      .icon-l {
       display: none;
      }
      .icon-xl {
       display: block;
      }  
    }
  
    .two { 
      padding-bottom: 5rem;
    }
  
    .three {
      padding-bottom: 12rem;
    }
  }
`;

export {
  HomeContainer,
  Banner,
  Welcome,
  WelcomeWrapper,
  TitleWrapper,
};
