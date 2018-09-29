import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import Header from '../components/header';
import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';
import GlobalStyles from '../styledComponents/globalStyles';

export default () => (
  <Fragment>
    <Helmet>
      <html lang='en' />
      <title>Mike Castor - Software Developer</title>
      <meta
        name='description'
        content='Javascript Developer based in Seattle, WA.  I love Javascript, Node.js, Front-end Development and being creative.'
      />
      <meta name='referrer' content='origin'/>
      <meta property='og:type' content='website' />
      <meta property='og:url' content='http://www.mikecastor.io' />
      <meta property='og:title' content='Mike Castor - Software Developer' />
      {/* <meta property='og:image' content='' /> */}
    </Helmet>
    <GlobalStyles/>
    <Header/>
    <Home />
    <About/>
    <Projects/>
    <Footer/>
  </Fragment>
);
