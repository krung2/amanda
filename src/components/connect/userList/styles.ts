import styled from "styled-components";
import { CardsContainer } from '../../user/styles';

export const Container = styled.div`
width: 77vw;
margin-left: 11.5vw;
`

export const ConnectContainer = styled(CardsContainer)`
width: 77vw;
flex-wrap: nowrap;
align-items: center;
gap: 5px !important;
padding-top: 0px;
flex: auto;
`

export const PlusCircle = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
display: flex;
align-items: center;
justify-content: center;
`

export const DisplayFlex = styled.div`
margin-top: 5vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const NoContentMent = styled.span`
font-size: 24px;
line-height: 40px;
text-align: center;
color: #494949;
font-weight: 100;
`