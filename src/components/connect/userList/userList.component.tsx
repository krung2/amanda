import ConnectHooks from '../../../hooks/connect.hooks';
import { SchoolConstant } from '../../../libs/constants/schoolConstant';
import { IConnect } from '../../../libs/interfaces/IConnect';
import UserCardComponent from '../../user/userCard/UserCard.component';
import Plus from '../../../assets/img/plus.svg';
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
          }} />
          <S.PlusCircle><embed src={Plus} /></S.PlusCircle>
          <UserCardComponent key={connect.idx} cardInfo={{
            isMatch: true,
            school: SchoolConstant.DAEGU,
            ...connect.daegu,
          }} />
          <S.PlusCircle><embed src={Plus} /></S.PlusCircle>
          <UserCardComponent key={connect.idx} cardInfo={{
            isMatch: true,
            school: SchoolConstant.DAEDEOK,
            ...connect.daedoek,
          }} />
        </S.ConnectContainer>
      )
    })

  return (
    <>
      {connectList}
    </>
  )
}

export default ConnectUserListComponent