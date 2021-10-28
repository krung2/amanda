import ConnectHooks from '../../../hooks/connect.hooks';
import { SchoolConstant } from '../../../libs/constants/schoolConstant';
import { IConnect } from '../../../libs/interfaces/IConnect';
import UserCardComponent from '../../user/userCard/UserCard.component';
import Plus from '../../../assets/img/plus.svg';
import NoConnect from '../../../assets/img/noConnectTeam.svg';
import * as S from './styles';

const ConnectUserListComponent = () => {

  const { connect } = ConnectHooks();

  const connectList: JSX.Element[] = connect
    .map((connect: IConnect) => {
      return (
        <S.ConnectContainer>
          <UserCardComponent key={connect.idx} cardInfo={{
            isMatch: true,
            school: SchoolConstant.GWANGJU,
            ...connect.gwangju,
            daeguTeam: false,
          }} />
          <S.PlusCircle><embed src={Plus} /></S.PlusCircle>
          <UserCardComponent key={connect.idx} cardInfo={{
            isMatch: true,
            school: SchoolConstant.DAEGU,
            ...connect.daegu,
            gwangjuTeam: false,
          }} />
          <S.PlusCircle><embed src={Plus} /></S.PlusCircle>
          <UserCardComponent key={connect.idx} cardInfo={{
            isMatch: true,
            school: SchoolConstant.DAEDEOK,
            ...connect.daedoek,
            daeguTeam: false,
          }} />
        </S.ConnectContainer>
      )
    })

  return (
    connect.length <= 0 ?
      <S.DisplayFlex>
        <embed src={NoConnect} />
        <S.NoContentMent>
          아직 매칭된 팀이 없습니다...
        </S.NoContentMent>
        <S.NoContentMent>
          연결하러가볼까요?
        </S.NoContentMent>
      </S.DisplayFlex>
      : <>{connectList}</>
  )
}

export default ConnectUserListComponent