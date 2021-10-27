import styled from "styled-components";
import { SchoolColor } from "../../../libs/constants/schoolColor";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { TeamCheckType } from "../../../libs/constants/teamcheckType";
import { checkSchoolContact, checkSchoolFont } from "../../../utils/CheckSchool";

export const CardContainer = styled.div<{ isMatch: boolean }>`
position: relative;
width: 24.5vw;
min-width: 281px;
height: ${(props) => (props.isMatch ? '230px' : '268px')};
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
z-index: -1;
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
z-index: -1;
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
cursor: pointer;
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
overflow-x: hidden;
`

export const TeamIntro = styled.span<{ fontLength: number }>`
/* font-size: 24px; */
font-size: ${(props) => props.fontLength <= 10 ? '24' : 24 - (Math.ceil(props.fontLength / 4))}px;
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
cursor: pointer;
`

export const TeamContactImg = styled.embed`
width: 20px;
height: 20px;
z-index: 0;
`

export const TeamContact = styled.div<{ school: SchoolConstant, fontLength: number }>`
font-size: 18px;
color: ${(props) => (checkSchoolFont(props.school))};
font-size: ${(props) => props.fontLength <= 10 ? '18' : 18 - (Math.ceil(props.fontLength / 4))}px;
margin-left: 4px;
line-height: 27px;
`

export const SchoolCheckBox = styled.div`
position:relative;
`

export const CheckBoxs = styled.div`
position: absolute;
top: 14px;
right: 20px;
right: 1vw;
gap: 4px;
display: flex;
`

const CheckBox = styled.div<{ teamCheck: TeamCheckType }>`
width: 12px;
height: 12px;
border-radius: 50%;
z-index: 1;
`

export const GwangjuCheckBox = styled(CheckBox)`
display: ${(props) => props.teamCheck === TeamCheckType.NOTAPPLICABLE && 'none'};
background-color: ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'};
border: 1px solid ${SchoolColor.GWANGJU_BACK};
/* ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'}; */
`

export const DaeguCheckBox = styled(CheckBox)`
display: ${(props) => props.teamCheck === TeamCheckType.NOTAPPLICABLE && 'none'};
background-color: ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.DAEGU_BACK : 'white'};
border: 1px solid ${SchoolColor.DAEGU_BACK};
/* ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'}; */
`

export const DaedeokCheckBox = styled(CheckBox)`
display: ${(props) => props.teamCheck === TeamCheckType.NOTAPPLICABLE && 'none'};
background-color: ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.DAEDEOK_BACK : 'white'};
border: 1px solid ${SchoolColor.DAEDEOK_BACK};
/* ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'}; */

`