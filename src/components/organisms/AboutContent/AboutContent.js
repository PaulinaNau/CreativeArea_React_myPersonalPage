import React from 'react';
import AboutImg from 'components/atoms/AboutImg/AboutImg';
import 'assets/styles/styles.css';
import { TextWrapper, ButtontWrapper } from 'assets/styles/wrappers';
import { Title, MainText } from 'assets/styles/fonts';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from 'assets/styles/wrappers';

const AboutContent = () => (
  <>
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center ps-3">
          <TextWrapper>
            <div>
              <Title isLight>Estetyka</Title>
              <Title>Kreatywność</Title>
              <Title isLight>Spójność</Title>
            </div>
          </TextWrapper>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center my-3 my-md-0">
          <AboutImg></AboutImg>
        </div>
      </div>
    </div>
    <Wrapper>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 ps-3">
            <MainText>
              W projektowaniu obowiązują trzy najważniejsze zasady. Musi być
              estetycznie, spójnie i przede wszystkim kreatywnie. To połączenie
              sprawia, że każdy projekt jest piękny, funkcjonalny i unikatowy
              dla każdej marki.
            </MainText>
          </div>
        </div>
      </div>
    </Wrapper>

    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center my-3 my-md-0">
            <AboutImg></AboutImg>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center ps-3">
            <TextWrapper>
              <div>
                <Title isLight>Pomysł</Title>
                <Title>Realizacja</Title>
                <Title isLight>Wdrożenie</Title>
              </div>
            </TextWrapper>
          </div>
          <Wrapper>
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 ps-3">
                  <MainText>
                    Pracę zaczynam od omówienia pomysłu, ustalenia potrzeb i
                    oczekiwań, a kiedy już wszystkie szczegóły są ustalone,
                    przystępuję do pracy. Zawsze podaję termin realizacji, więc
                    wszystko możemy zaplanować w odpowiednim czasie.
                  </MainText>
                  <ButtontWrapper>
                    <Button>Ustalmy termin</Button>
                  </ButtontWrapper>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;
