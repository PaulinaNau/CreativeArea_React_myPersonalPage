import styled from "styled-components";

export const TextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const ButtontWrapper = styled.div`
display: flex;
justify-content: left;
align-items: center;
@media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const Wrapper = styled.div`
width: 100%;
min-height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
padding: 60px 50px;
`
export const ImgStyled = styled.div`
width: 400px;
height: auto;
position: relative;
cursor: pointer;
&::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10px;
  left: -10px;
}
`