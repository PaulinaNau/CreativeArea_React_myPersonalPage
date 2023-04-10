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
              W projektowaniu obowiązują trzy najważniejsze zasady. Musi być
              estetycznie, spójnie i przede wszystkim kreatywnie. To połączenie
              sprawia, że każdy projekt jest piękny, funkcjonalny i unikatowy
              dla każdej marki.
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
                <div className="col-10 col-md-8 mb-3 mb-md-5 mt-0 mt-md-3">
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
