import styled from "styled-components";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { checkSchoolContact, checkSchoolFont } from "../../../utils/CheckSchool";

export const CardContainer = styled.div`
width: 24.5vw;
min-width: 281px;
max-width: 450px;
height: 268px; 
border: 1px solid #F3F3F3;
box-sizing: border-box;
filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
border-radius: 10px;
z-index: -1;
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

export const UserPosition = styled.span<{ school: SchoolConstant }>`
line-height: 24px;
font-size: 1rem;
color: ${(props) => (checkSchoolFont(props.school))};
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

export const TeamContainer = styled.div`
padding-top: 13px;
display: flex;
height: 115px;
align-items: center;
flex-direction: column;
`

export const TeamIntro = styled.span`
font-size: 24px;
color: #636363;
`

export const TeamContactContainer = styled.div<{ school: SchoolConstant }>`
margin-top: 13px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 4px 22px;
width: 195px;
height: 32px;
background: rgba(81, 135, 231, 0.1);
background: ${(props) => (checkSchoolContact(props.school))};
border-radius: 30px;
`

export const TeamContactImg = styled.embed`
width: 20px;
height: 20px;
`

export const TeamContact = styled.div<{ school: SchoolConstant }>`
font-size: 18px;
color: ${(props) => (checkSchoolFont(props.school))};
margin-left: 4px;
line-height: 27px;
`