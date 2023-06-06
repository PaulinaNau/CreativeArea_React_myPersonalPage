import React from 'react';
// import 'assets/styles/styles.css';
import { ButtontWrapper } from 'assets/styles/wrappers';
import { Title, MainText } from 'assets/styles/fonts';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import Img from 'components/atoms/Img/Img';
import Img1 from 'assets/images/AboutImg1.webp';
import Img2 from 'assets/images/AboutImg2.webp';


const AboutContent = () => (
  <>
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mx-3 my-3">
            <div>
              <Title isLight>Estetyka</Title>
              <Title>Kreatywność</Title>
              <Title isLight>Spójność</Title>
            </div>
        </div>
        <div className="col-10 col-md-4 d-flex justify-content-center align-items-center my-3 my-md-0">
        <Img src={Img1} className='img-fluid' alt='About me - Creative Block'></Img>
        </div>
      </div>
    </div>
 
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10 col-md-8 my-3 my-md-5 ">
            <MainText>
              Nazywam się Paulina Naurecka, jestem graficzką i programistką. Obie dzieidziny to moja praca i pasja, która daje wiele satysfakcji. Projektuję spójną
              komunikację wizualną dla firm, od projektów digital po print.
              Tworzę strony internetowe, landingi i newslettery, przygotowyję grafiki do social media, banery,
              katalogi, e-booki. Do druku tworzę głównie wizytówki, ulotki,
              plakaty, zaproszenia,<nobr>a także</nobr> banery wielkoformatowe.
            </MainText>
          </div>
        </div>
      </div>


    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10 col-md-4 d-flex justify-content-center align-items-center my-3 my-md-0">
            <Img src={Img2} className='img-fluid' alt='About me - Creative Block'></Img>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mx-3 my-3">
              <div>
                <Title isLight>Pomysł</Title>
                <Title>Realizacja</Title>
                <Title isLight>Wdrożenie</Title>
              </div>
          </div>
          
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-8 my-2 my-md-5">
                  <MainText>
                    Pracę zaczynam od omówienia pomysłu, ustalenia potrzeb i
                    oczekiwań, a kiedy już wszystkie szczegóły są ustalone,
                    przystępuję do pracy. Zawsze podaję termin realizacji, więc
                    wszystko możemy zaplanować w odpowiednim czasie.
                  </MainText>
                  <ButtontWrapper>
                    <Link to='/kontakt' className='text-decoration-none'>
                    <Button>Ustalmy termin</Button>
                    </Link>
                  </ButtontWrapper>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;
