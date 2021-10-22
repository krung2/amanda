import styled from "styled-components";

export const Container = styled.div`
width: 70vw;
margin: 0 0 37px 12.5vw;
`

export const Logo = styled.embed`
margin-top: 1.6vw;
width: 103px;
height: 25px;
`

export const DisplayFlex = styled.div`
margin-top: 27px;
display: flex;
align-items: center;
`

export const BackButton = styled.div`
margin-top: 8px;
display: flex;
align-items: center;
cursor: pointer;
z-index: 1;
`

export const BackArrow = styled.img`
z-index: 0;
`

export const BackMent = styled.span`
font-size: 20px;
height: 26px;
color: #8D8D8D;
line-height: 30px;
`

export const Flex = styled.div`
`

export const MatchMent = styled.embed<{ isEmpty: boolean }>`
display: ${(props) => props.isEmpty && 'none'};
margin: 0 auto;
`
