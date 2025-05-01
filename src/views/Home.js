import React from 'react';
import HomeContent from 'components/organisms/HomeContent/HomeContent';
import Parallax from 'components/organisms/Paralax/Parallax';
import HomeContentBottom from 'components/organisms/HomeContentBottom/HomeContentBottom';

const Home = () => {
  window.scrollTo(0, 0)
  return (
    <>
    <HomeContent></HomeContent>
    <Parallax></Parallax>
    <HomeContentBottom></HomeContentBottom>
    </>
  );
};

export default Home;