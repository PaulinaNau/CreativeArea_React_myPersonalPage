import styled from "styled-components";

export const BoxProjectStyled = styled.div`
width: 100%;
height: 100px;
background-color: ${({ theme }) => theme.colors.darkGrey};
display: flex;
justify-content: center;
align-items: center;
color: white;
padding: 0;
margin: 20px;
cursor: pointer;
position: relative;
@media screen and (max-width: 768px) {
    height: 100px;
    width: 200px;
}
:hover {
    background-color: ${({ theme }) => theme.colors.main};
    ::before {
        top: 5px;
        left: -5px;
    }
}
&::before {
    content: '';
    border: 1px solid #242020;
    position: absolute;
    top: -5px;
    left: 5px;
    width: 100%;
    height: 100%;
    transition: all .8s ease-in-out;    
}

`