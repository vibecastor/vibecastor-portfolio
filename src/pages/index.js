import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import Header from '../components/header';
import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';
import GlobalStyles from '../styledComponents/globalStyles';
import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <html lang='en' />
      <title>Mike Castor - Software Developer</title>
      <meta
        name='description'
        content='Javascript Developer based in Seattle, WA.'
      />
      <meta
        name='keywords'
        content='web developer, software developer, front-end developer, javascript developer, react'
      />
      <meta name='referrer' content='origin' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='http://www.mikecastor.io' />
      <meta property='og:title' content='Mike Castor - Software Developer' />
      {/* <meta property='og:image' content='' /> */}
    </Helmet>
    <GlobalStyles />
    <Header />
    <Home />
    <GridLayout>
      <Projects />
      <About />
    </GridLayout>
    <Footer />
  </Fragment>
);

export default IndexPage;
