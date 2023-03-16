import imgIcon from 'assets/images/ImgIconGirl.svg';
import { HomeIconStyled } from './img.styles';

const HomeImgIcon = () => (
    <HomeIconStyled>
    <img src={imgIcon} alt="Creative Block" className='img-fluid' />
    </HomeIconStyled>
);

export default HomeImgIcon;
