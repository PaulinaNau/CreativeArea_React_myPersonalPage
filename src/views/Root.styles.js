import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: ${({ theme }) => theme.colors.light};
  
`;

export const ViewWrapper = styled.div`
width: 80%;
height: auto;
background-color: ${({ theme }) => theme.colors.lightGr};
display: flex;
justify-content: center;
align-items: center;
  
`;