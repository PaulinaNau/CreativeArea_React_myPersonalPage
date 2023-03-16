import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { MainWrapper } from './MainTemplates.styles';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <Navigation />
        {children}
        <Footer />
      </MainWrapper>
    </>
  );
};

export default MainTemplate;
