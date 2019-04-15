import styled from 'styled-components';

const AboutWrapper = styled.div`
  margin: 0rem 1rem 2rem 1rem;
  display: grid;
  grid-template-columns: 5% minmax(310px, 1500px) 5%;
  justify-content: center;

  button {
    background: #d32f2f;
    border-radius: 12px;
    padding: .2rem .6rem .2rem .6rem;
    width: 100%;
  }
`;

const AboutCard = styled.div`
  background: #e2e2e2;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  h1 {
    background: #000051;
    color: #ffffff;
    opacity: .9;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 1.75rem;
    height: 3rem;
    margin: 0;
    padding-top: 1rem;
    padding-left: 1rem;
  }


  .about-grid {
    display: grid;
    grid-template-rows: 1fr auto;
  }
  .image {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    img {
      border-radius: 50%;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
    }
  }

  flex-item-1 {
    flex: 1;
  }

  flex-item-3 {
    flex: 1;
  }

  .tech-intro {
    p {
      padding: 1rem;
      text-align: center;
      background: #1a237e;
      color: #ffffff;
      opacity: .6;
      border-radius: 10px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      font-size: 120%;
    }
  }

  h2 {
    background: #1a237e;
    color: #ffffff;
    padding: 1rem;
    border-radius: 10px;
    opacity: .8;
  }
`;

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25px, 100px));
  grid-gap: 1rem;
  justify-content: centered;

  li {
    list-style: none;
    background: #ff6659;
    border-radius: 5px;
    padding: .25rem;
    padding-left: .5rem;
    font-size: .8rem;
    font-weight: 100;
    opacity: .9;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

export {
  AboutWrapper,
  AboutCard,
  TechList,
};
