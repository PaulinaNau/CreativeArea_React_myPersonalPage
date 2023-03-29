import React from 'react';
import { Title, MainText } from 'assets/styles/fonts';
import { Wrapper } from 'assets/styles/wrappers';

const OfferContent = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Title>Strony internetowe</Title>
              <MainText>projekt graficzny interfesju</MainText>
              <MainText>kodowanie projektu</MainText>
              <MainText>udostępnienie strony w sieci</MainText>
            </div>
            <div className="col-12 col-md-4">
              <Title>Grafika Digital</Title>
              <MainText>banery</MainText>
              <MainText>posty social media</MainText>
              <MainText>reklama Google Ads</MainText>
            </div>
            <div className="col-12 col-md-4">
              <Title>Grafika Print</Title>
              <MainText>ulotki</MainText>
              <MainText>plakaty</MainText>
              <MainText>banery</MainText>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OfferContent;
