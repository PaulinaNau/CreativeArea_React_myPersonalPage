import React from 'react';
import { Title, MainText } from 'assets/styles/fonts';
import { Wrapper, BoxBorder } from 'assets/styles/wrappers';
import { NumberIcon } from 'components/atoms/NumberIcon/NumberIcon.styles';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const OfferContent = () => {
  return (
    <>
      <Wrapper>
        <div className="container mb-5">
          <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-12 mb-5">
              <Title className="text-center">Sprawdź dostępne usługi</Title>
            </div>
            <div className="col-12 col-md-3 text-center border border-dark p-3 m-1">
              <BoxBorder>
                <div>
                <Title className="text-center">WWW</Title>
                <MainText>graficzny interfejs strony</MainText>
                <MainText>strony wizytówki</MainText>
                <MainText>blogi</MainText>
                </div>
              </BoxBorder>
            </div>
            <div className="col-12 col-md-3 text-center border border-dark p-3 m-1">
              <BoxBorder>
                <div>
                <Title className="text-center">Digital</Title>
                <MainText>banery an stronę</MainText>
                <MainText>posty social media</MainText>
                <MainText>reklama Google Ads</MainText>
                </div>
              </BoxBorder>
            </div>
            <div className="col-12 col-md-3 text-center border border-dark p-3 m-1">
              <BoxBorder>
                <div>
                <Title className="text-center">Print</Title>
                <MainText>banery i plakaty</MainText>
                <MainText>ulotki</MainText>
                <MainText>wizytówki</MainText>
                </div>
              </BoxBorder>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12">
              <Title className="text-center">Jak wygląda współpraca</Title>
            </div>

            <div className="col-12 col-md-5 p-2 p-md-5">
              <div className="d-flex justify-content-start align-items-center">
                <NumberIcon>1</NumberIcon>
                <MainText>
                  Omawiamy potrzeby i oczekiwania mailowo lub telefonicznie,
                  ustalamy wstępny plan działania.
                </MainText>
              </div>
            </div>
            <div className="col-12 col-md-5 p-2 p-md-5">
              <div className="d-flex justify-content-start align-items-center">
                <NumberIcon>2</NumberIcon>
                <MainText>
                  Podaję termin realizacji oraz cenę projektów i zaliczki, a
                  nastepnie popisujemy umowę.
                </MainText>
              </div>
            </div>

            <div className="col-12 col-md-5 p-2 p-md-5">
              <div className="d-flex justify-content-start align-items-center">
                <NumberIcon>3</NumberIcon>
                <MainText>
                  Po otrzymaniu zaliczki, przystępuję do pracy, jesteśmy w
                  stałym kontakcie.
                </MainText>
              </div>
            </div>
            <div className="col-12 col-md-5 p-2 p-md-5">
              <div className="d-flex justify-content-start align-items-center">
                <NumberIcon>4</NumberIcon>
                <MainText>
                  Wysyłam projekty przed upływem terminu, aby był czas na
                  ewentualne zmiany.
                </MainText>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center py-5">
              <Link to="/kontakt" className="text-decoration-none">
                <Button>Skontaktujmy się</Button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OfferContent;
