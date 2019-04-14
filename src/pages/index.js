import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import styled from 'styled-components';
import Header from '../components/header';
import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';
import GlobalStyles from '../styledComponents/globalStyles';

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
        content='Front End Web Developer based in Seattle, WA.'
      />
      <meta name='referrer' content='origin' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='http://www.mikecastor.io' />
      <meta property='og:title' content='Mike Castor - Front End Developer' />
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
