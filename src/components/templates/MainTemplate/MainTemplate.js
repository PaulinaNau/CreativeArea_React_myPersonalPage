import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { MainWrapper, TopWrapper } from './MainTemplates.styles';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <Navigation />
        <TopWrapper />
        {children}
        <Footer />
      </MainWrapper>
    </>
  );
};

export default MainTemplate;
