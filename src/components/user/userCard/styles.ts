import styled from "styled-components";
import { SchoolColor } from "../../../libs/constants/schoolColor";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { TeamCheckType } from "../../../libs/constants/teamcheckType";
import { checkSchoolContact, checkSchoolFont } from "../../../utils/CheckSchool";

export const CardContainer = styled.div<{ isMatch: boolean, isAllMatch: boolean }>`
position: relative;
width: 24.5vw;
min-width: 281px;
height: ${(props) => (props.isMatch ? '230px' : '268px')};
border: 1px solid #F3F3F3;
box-sizing: border-box;
background-color: ${(props) => (props.isAllMatch ? '#FBFBFB' : '')};
filter: ${(props) => (props.isAllMatch ? '' : 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2))')};
border-radius: 10px;
z-index: -1;
`

export const IsMatchFilter = styled.div<{ isAllMatch: boolean }>`
position: absolute;
width: 100%;
height: 100%;
background-color: ${(props) => props.isAllMatch ? 'rgba(251, 251, 251, 0.7);' : ''};
z-index: ${(props) => props.isAllMatch ? '10' : '-10'};
border-radius: 10px;
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

export const UserPosition = styled.span<{ school: SchoolConstant, isAllMatch: boolean }>`
line-height: 24px;
font-size: 1rem;
font-weight: 500;
color: ${(props) => (checkSchoolFont(props.school))};
color: ${(props) => props.isAllMatch && '#E0E0E0 !important'};
`

export const UserName = styled.span<{ isAllMatch: boolean }>`
font-size: 24px;
line-height: 36px;
color: #191919;
cursor: pointer;
color: ${(props) => props.isAllMatch && '#C5C5C5 !important'};

&:hover + span {
  color: #3F3F3F;
  color: ${(props) => props.isAllMatch && '#E0E0E0 !important'};
}
`

export const UserGithub = styled.span`
font-size: 16px;
line-height: 21px;
color: #8D8D8D;
cursor: pointer;

&:hover {
  color: #3F3F3F;
}
`

export const TeamContainer = styled.div`
padding-top: 13px;
display: flex;
height: 115px;
align-items: center;
flex-direction: column;
overflow-x: hidden;
`

export const TeamIntro = styled.span<{ fontLength: number, isAllMatch: boolean }>`
font-size: ${(props) => props.fontLength <= 10 ? '24' : 24 - (Math.ceil(props.fontLength / 4))}px;
color: #636363;
color: ${(props) => props.isAllMatch && '#C5C5C5 !important'};
`

export const TeamContactContainer = styled.div<{ school: SchoolConstant, isAllMatch: boolean }>`
margin-top: 13px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 4px 22px;
/* width: 195px; */
height: 32px;
background: ${(props) => (checkSchoolContact(props.school))};
background: ${(props) => props.isAllMatch && 'rgba(224, 224, 224, 0.1) !important'};
border-radius: 30px;
cursor: pointer;
`

export const TeamContactImg = styled.embed`
width: 20px;
height: 20px;
z-index: 0;
`

export const TeamContact = styled.div<{ school: SchoolConstant, fontLength: number, isAllMatch: boolean }>`
font-size: 18px;
color: ${(props) => (checkSchoolFont(props.school))};
font-size: ${(props) => props.fontLength <= 10 ? '18' : 18 - (Math.ceil(props.fontLength / 4))}px;
margin-left: 4px;
line-height: 27px;
color: ${(props) => props.isAllMatch && '#C5C5C5 !important'};
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
background-color: ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : '#C4C4C4'};
border: 1px solid ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : '#C4C4C4'};
/* ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'}; */
`

export const DaeguCheckBox = styled(CheckBox)`
display: ${(props) => props.teamCheck === TeamCheckType.NOTAPPLICABLE && 'none'};
background-color: ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.DAEGU_BACK : '#C4C4C4'};
border: 1px solid ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.DAEGU_BACK : '#C4C4C4'};
/* ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'}; */
`

export const DaedeokCheckBox = styled(CheckBox)`
display: ${(props) => props.teamCheck === TeamCheckType.NOTAPPLICABLE && 'none'};
background-color: ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.DAEDEOK_BACK : '#C4C4C4'};
border: 1px solid ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.DAEDEOK_BACK : '#C4C4C4'};
/* ${(props) => props.teamCheck === TeamCheckType.HAVE ? SchoolColor.GWANGJU_BACK : 'white'}; */

`