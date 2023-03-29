import React from 'react';
import { Title } from 'assets/styles/fonts';
import { Wrapper } from 'assets/styles/wrappers';
import BoxProject from 'components/atoms/Portfolio/BoxProject';

const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <div className="d-flex justify-content-center align-items-center mb-5 p-0">
          <Title>Zobacz moje najnowsze realizacje</Title>
        </div>
          <BoxProject></BoxProject>
      </Wrapper>
    </>
  );
};

export default Portfolio;
