import styled from 'styled-components';

export const ImgBasicStyled = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: auto;
    box-shadow: -10px 10px 0 #c60089;
    transition: box-shadow .4s ease-in-out;
    :hover {
        box-shadow: 10px -10px 0 #c60089;
    }
    @media screen and (max-width: 768px) {
        width: 300px;
        height: auto;
        box-shadow: -8px 8px 0 #c60089;
        :hover {
            box-shadow: 8px -8px 0 #c60089;
        }
    }
`;
