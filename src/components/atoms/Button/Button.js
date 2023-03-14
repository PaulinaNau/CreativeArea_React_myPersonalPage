import styled from 'styled-components';

export const Button = styled.div`
  width: 100px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 25px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
`;
