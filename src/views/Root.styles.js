import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: ${({ theme }) => theme.colors.light};
`;

export const ViewWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: ${({ theme }) => theme.colors.light};
display: flex;
justify-content: space-between;
align-items: center;
margin: 100px 0 0 0;
`;