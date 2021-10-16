import styled from "styled-components";

export const Header = styled.div`
padding-top: 10px;
width: 100%;
background-color: #F7F9FD;
justify-content: center;
`

export const HeaderFrame = styled.div`
width: 75vw;
top: 0;
margin-left: 12.5vw;
`

export const LogoName = styled.div`
font-size: 1.2rem;
color: #2B6BDB;
font-family: Gmarket Sans;
`

export const SiteMent = styled.div`
color: #747474;
font-size: 1.3rem;
font-family: Gmarket Sans TTF;
line-height: 39px
`

export const PointMent = styled.span`
color: #2B6BDB;
`

export const DisplayFlex = styled.div`
display: flex;
flex-wrap: wrap;
padding: 1.2rem 0 .9rem 0;
`

export const SchoolContainer = styled.div`
width: 100%;
height: 70px;
background-color: #ffffff;
border: 1px solid #F3F3F3;
box-sizing: border-box;
border-collapse: collapse;
`

export const SchoolBox = styled.div`
display: flex;
width: 75vw;
height: 100%;
margin-left: 12.5vw;
`

export const FlexBlank = styled.span`
-webkit-box-flex: 1;
flex: 1 1 auto;
`

export const SchoolName = styled(FlexBlank) <{ school: boolean }>`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
border: 1px solid ${(props) => (props.school ? '#5187E7' : '#F3F3F3')};
border-collapse: collapse;
box-sizing: border-box;
color: ${(props) => (props.school ? 'white' : '#E7E7E7')};
background-color: ${(props) => (props.school && '#5187E7')};
margin: 0 auto;
cursor: pointer;
`

export const PositionSelect = styled.div`
width: 180px;
height: 50px;
margin-top: 2.5rem;
border: 1px solid #F3F3F3;
box-sizing: border - box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
border-radius: 10px;
appearance: none;
`