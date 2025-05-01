import { StyledLink } from './Nav.styles';

const NavLinks = () => {
  return (
    <>
      <StyledLink to="/omnie" className='color-grey'>O mnie</StyledLink>
      <StyledLink to="/portfolio" className='color-grey'>Realizacje</StyledLink>
      <StyledLink to="/uslugi" className='color-grey'>Usługi</StyledLink>
      <StyledLink to="/kontakt" className='color-grey'>Kontakt</StyledLink>
    </>
  );
};

export default NavLinks;
