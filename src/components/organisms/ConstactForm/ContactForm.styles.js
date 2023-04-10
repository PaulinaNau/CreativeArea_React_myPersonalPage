import styled from "styled-components";

export const Form = styled.form`
height: auto;
width: 100%; 
`

export const Label = styled.label`
height: 15px;
width: 100%; 
`

export const Input = styled.input`
background-color: transparent;
border: none;
border-bottom: 1px solid grey;
height: 40px;
width: 100%; 
padding: 10px 20px;
font-size: ${({ theme }) => theme.fontSize.m};
color: ${({ theme }) => theme.colors.grey};
font-weight: 300;
&:focus {
    outline: none;
    border-bottom: 1px solid #c60089;
    color: black;
}
`
export const TextAeria = styled.textarea`
background-color: transparent;
border: 1px solid grey;
height: 200px;
width: 100%; 
border-radius: 0;
padding: 20px;
font-size: ${({ theme }) => theme.fontSize.m};
color: ${({ theme }) => theme.colors.grey};
font-weight: 300;
&:focus {
    outline: none;
    border: 1px solid #c60089;
    color: black;
}
@media screen and (max-width: 768px) {
    height: 150px;
}
`