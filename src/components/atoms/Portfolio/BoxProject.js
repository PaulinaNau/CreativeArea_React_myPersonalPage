import React from 'react';
import { BoxProjectStyled } from './BoxProject.styles';
import { Subtitle } from 'assets/styles/fonts';

const BoxProject = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <BoxProjectStyled><Subtitle isWhite>Banery digital</Subtitle></BoxProjectStyled>
        </div>
        <div className="col-12 col-md-3">
          <BoxProjectStyled><Subtitle isWhite>Grafiki do druku</Subtitle></BoxProjectStyled>
        </div>
        <div className="col-12 col-md-3">
          <BoxProjectStyled><Subtitle isWhite>Strony i aplikacje</Subtitle></BoxProjectStyled>
        </div>
      </div>
    </div>
  </>
);

export default BoxProject;
