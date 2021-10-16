import styled from "styled-components";

export const CardContainer = styled.div`
width: 24.5vw;
max-width: 450px;
height: 268px; 
border: 1px solid #F3F3F3;
box-sizing: border-box;
filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
border-radius: 10px;
`

export const UserInfoContainer = styled.div`
display: flex;
height: 152px;
border-bottom: 1px solid #F3F3F3;
`

export const UserInfoBox = styled.div`
display: flex;
width: 100%;
align-items: center;
flex-direction: column;
border-right: 1px solid #F3F3F3;

`

export const UserInfo = styled.div`
display: flex;
justify-content: center;
justify-items: center;
align-items: center;
flex-direction: column;
width: 50%;
`

export const UserPosition = styled.span`
line-height: 24px;
font-size: 1rem;
color: #2B6BDB;
`

export const UserName = styled.span`
font-size: 24px;
line-height: 36px;
color: #191919;
`

export const UserGithub = styled.span`
font-size: 14px;
line-height: 21px;
color: #8D8D8D;
cursor: pointer;
`

