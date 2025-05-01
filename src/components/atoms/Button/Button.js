import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 25px;
  padding: 10px;
  margin: 40px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.light};
  font-weight: 400;
  box-shadow: -3px 3px ${({theme}) => theme.colors.main};
  transition: border 0.4s ease-in-out, background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out, color 0.4s ease-in-out;
  &:hover {
    border: none;
    background-color: ${({theme}) => theme.colors.main};
    box-shadow: none;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
  }
`;
