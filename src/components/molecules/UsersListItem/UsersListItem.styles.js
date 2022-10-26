import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgrey;
    display: block;
  }
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;