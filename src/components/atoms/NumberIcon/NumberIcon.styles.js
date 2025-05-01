import styled from "styled-components";

export const NumberIcon = styled.p`
color: ${({ theme }) => theme.colors.main};
font-size: 50px;
font-weight: 500;
margin: 0;
padding: 0 20px 0 0;
@media screen and (max-width: 768px) {
    font-size: 60px;
  }
`