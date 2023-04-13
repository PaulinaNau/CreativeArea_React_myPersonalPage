import { StyledLink } from './Nav.styles';

const NavLinks = () => {
  return (
    <>
      <StyledLink to="/omnie">O mnie</StyledLink>
      <StyledLink to="/portfolio">Realizacje</StyledLink>
      <StyledLink to="/uslugi">Usługi</StyledLink>
      <StyledLink to="/kontakt">Kontakt</StyledLink>
    </>
  );
};

export default NavLinks;
