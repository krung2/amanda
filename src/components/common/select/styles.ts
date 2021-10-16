import styled from "styled-components";

export const Container = styled.div`
width: 180px;
height: 50px;
`

export const OpenContainer = styled.div`
display: flex;
position: relative;
`

export const OpenContent = styled.div`
position: absolute;
`

export const ModalContent = styled.div`
width: 182px;
height: 50px;
border: 1px solid #F3F3F3;
border-bottom: 0px;
background-color: white;
text-align: center;
vertical-align: middle;

&:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
};

&:last-child {
  border-bottom: 1px solid #F3F3F3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
};
`

export const ClosedContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
border: 1px solid #F3F3F3;
box-sizing: border-box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
border-radius: 10px;
appearance: none;
background-color: white;
align-items: center;
justify-items: center;
`

export const FlexBlank = styled.span`
-webkit-box-flex: 1;
flex: 1 1 auto;
`

export const DisplayFlex = styled.span`
display: flex;
align-items:center;
justify-items: center;
font-size: 18px;
font-size: 1.3rem;
color: #6292E7;
`

export const Triangle = styled.img`
width: .5rem;
height: .4rem;
`