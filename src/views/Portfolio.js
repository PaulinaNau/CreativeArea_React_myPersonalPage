import React from 'react';
import { Title } from 'assets/styles/fonts';
import { Wrapper } from 'assets/styles/wrappers';
import BoxProject from 'components/atoms/Portfolio/BoxProject';


const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <Title>Zobacz moje najnowsze realizacje</Title>
        <BoxProject></BoxProject>
      </Wrapper>
    </>
  );
};

export default Portfolio;
