import imgAbout from 'assets/images/AboutImg-1.webp';
import { ImgStyled } from 'assets/styles/wrappers';

const AboutImg = () => (
    <>
    <ImgStyled>
    <img src={imgAbout} alt="Creative Block" className='img-fluid' />
    </ImgStyled>
    </>
);

export default AboutImg;
