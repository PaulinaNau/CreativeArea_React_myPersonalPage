import { Wrapper } from 'assets/styles/wrappers';
import { Title, MainText } from 'assets/styles/fonts';
import HomeIcon from 'components/atoms/HomeImg/HomeImgIcon';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

import React from 'react';

const HomeContentBottom = () => (
  <>
    <Wrapper>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <Title isLight>Paulina Naurecka</Title>
            <MainText>
              Na co dzień tworzę grafikę i programuję - to moja praca, ale też pasja, która daje wiele satysfakcji. Projektuję spójną
              komunikację wizualną dla firm, od projektów digital po print.
              Tworzę strony internetowe, przygotowyję grafiki do social media, banery,
              katalogi, e-booki. Do druku tworzę głównie wizytówki, ulotki,
              plakaty, zaproszenia,<nobr>a także</nobr> banery wielkoformatowe.
            </MainText>
            <MainText>
              Uwielbiam kreatywne wyzwania, więc jeśli potrzebujesz projektu,
              którego tutaj nie wymieniłam, śmiało się ze mną skontaktuj,{' '}
              <nobr>a na pewno</nobr> wszystko sprawnie zrealizujemy{' '}
            </MainText>
            <Link to='/omnie' className='text-decoration-none'><Button>Poznajmy się lepiej</Button></Link>
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
