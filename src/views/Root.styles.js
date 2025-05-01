import styled from "styled-components";

export const Wrapper = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
width: 100%;
min-height: auto;
background-color: ${({ theme }) => theme.colors.light};
`;

export const ViewWrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${({ theme }) => theme.colors.light};
padding: 50px 0 0 0;
@media screen and (max-width: 768px) {
    padding: 70px 0 0 0;
}
`;