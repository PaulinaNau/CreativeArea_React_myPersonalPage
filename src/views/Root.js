import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/themes';
import { Wrapper, ViewWrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from 'views/Home';
import About from 'views/About';
import Portfolio from './Portfolio';
import Offer from 'views/Offer';
import Contact from 'views/Contact';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
            <Wrapper>
              <ViewWrapper>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/omnie" element={<About />}></Route>
                  <Route path="/portfolio" element={<Portfolio />}></Route>
                  <Route path="/uslugi" element={<Offer />}></Route>
                  <Route path="/kontakt" element={<Contact />}></Route>
                </Routes>
              </ViewWrapper>
            </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
