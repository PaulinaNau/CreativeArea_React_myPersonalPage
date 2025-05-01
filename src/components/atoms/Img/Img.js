import React from 'react';
import { ImgBasicStyled } from './Img.styles';

const Img = (props) => (
  <>
    <ImgBasicStyled>
      <img src={props.src} className={props.className} alt={props.alt} />
    </ImgBasicStyled>
  </>
);

export default Img;
