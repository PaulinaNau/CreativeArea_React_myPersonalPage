import { Wrapper } from './HomeContentBottom.styles';
import { Title, MainText } from 'assets/styles/fonts';
import HomeIcon from 'components/atoms/HomeImg/HomeImgIcon';

import React from 'react';

const HomeContentBottom = () => (
  <>
    <Wrapper>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <Title isLight>Paulina Naurecka</Title>
            <MainText>
              Jestem grafikiem-programistą z pasji i z zawodu. Tworzę spójną
              komunikację wizualna dla firm, od projektów digital po print.
              Projektuję strony internetowe, grafiki do social media, banery,
              katalogi i e-booki. Do druku przygotowuję wizytówki, ulotki,
              plakaty, <nobr>a także</nobr> banery wielkoformatowe.
            </MainText>
            <MainText>
              Uwielbiam kreatywne wyzwania, więc jeśli potrzebujesz projektu,
              którego tutaj nie wymieniłam, smiało się ze mną skontaktuj,{' '}
              <nobr>a na pewno</nobr> wszystko sprawnie zrealizujemy{' '}
            </MainText>
          </div>
          <div className="col-12 col-md-6 p-5">
            <HomeIcon></HomeIcon>
          </div>
        </div>
      </div>
    </Wrapper>
  </>
);

export default HomeContentBottom;
