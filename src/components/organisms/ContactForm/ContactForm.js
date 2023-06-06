import React from 'react';
import { Title, Subtitle, MainText } from 'assets/styles/fonts';
import { Form, Label, Input, TextAeria } from './ContactForm.styles';
import { Button } from 'components/atoms/Button/Button';
import ContactImg from 'assets/images/ContactImg.webp';
import Img from 'components/atoms/Img/Img';

const ContactForm = () => {
  // const [formStatus, setFormStatus] = React.useState('Wyślij');

  const onSubmit = (e) => {
    // e.preventDefault();
    // setFormStatus('Wysyłam...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container">
      <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
        <div className="col-10">
          <Title>Napisz do mnie!</Title>
        </div>
        <div className="col-10 col-md-5 d-flex justify-content-center align-items-center">
          <Form onSubmit={onSubmit} action="mailto:paulina.portfolio@gmail.com" method="post" enctype="text/plain">
            <div className="mb-1">
              <Label htmlFor="name"></Label>
              <Input type="text" id="name" placeholder="Imię" required />
            </div>
            <div className="mb-1">
              <Label htmlFor="email"></Label>
              <Input type="email" placeholder="E-mail" id="email" required />
            </div>
            <div className="mb-1">
              <Label htmlFor="message"></Label>
              <TextAeria id="message" placeholder="Napisz wiadomość" required />
            </div>
            {/* <Button value="Send" type="submit">{formStatus}</Button> */}
            <Button value="Send" type="submit">Wyślij</Button>
          </Form>
        </div>
        <div className="col-10 col-md-6 d-flex justify-content-center align-items-center">
          <Img
            src={ContactImg}
            alt="Contact with Creative Block"
            className="img-fluid"
          ></Img>
        </div>
        <div className="col-10 my-5">
          <div>
            <Subtitle>Skontaktujmy się!</Subtitle>
            <MainText>paulina.naurecka@gmail.com</MainText>
            <MainText>tel. +48 724 469 697</MainText>
          </div>
        </div>
        <div className="col-10 d-flex justify-content-start mb-5">
          <div className='col-6 mb-5'>
            <Subtitle>Do usłyszenia!</Subtitle>
            <MainText>Jeśli chciałbyś zapytać o projekt strony, wizytówki, ulotki czy innej formy graficznej, napisz do mnie, a na pewno wszystko ustalimy! Po rozmowie wyślę również szczegóły dotyczące współpracy <nobr>i całkowity</nobr> koszt projektu. I oczywiście termin realizacji!</MainText>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
