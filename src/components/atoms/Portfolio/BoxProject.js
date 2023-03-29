import React from 'react';
import { BoxProjectStyled } from './BoxProject.styles';
import { Subtitle } from 'assets/styles/fonts';

const BoxProject = () => (
  <>
    <div className="container">
      <div className="row">
      <div className="d-flex flex-wrap justify-content-around align-items-center p-3">
        <div className="col-12 col-md-3">
          <BoxProjectStyled><Subtitle isWhite>DIGITAL</Subtitle></BoxProjectStyled>
        </div>
        <div className="col-12 col-md-3">
          <BoxProjectStyled><div><Subtitle isWhite>PRINT</Subtitle></div></BoxProjectStyled>
        </div>
        <div className="col-12 col-md-3">
          <BoxProjectStyled><Subtitle isWhite>WEBSITE</Subtitle></BoxProjectStyled>
        </div>
        </div>
      </div>
    </div>
  </>
);

export default BoxProject;
