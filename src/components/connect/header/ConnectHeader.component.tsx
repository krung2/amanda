import ColorLogo from '../../../assets/img/colorLogo.svg';
import BackArrow from '../../../assets/img/BackArrow.svg';
import MatchMent from '../../../assets/img/matchMent.svg';
import * as S from './styles';
import ConnectHooks from '../../../hooks/connect.hooks';

const ConnectHeaderComponent = () => {

  const { connect } = ConnectHooks();

  return (
    <S.Container>
      <div>
        <S.Logo src={ColorLogo} />
      </div>
      <S.DisplayFlex>
        <S.BackButton onClick={() => window.location.replace('/')}>
          <S.BackArrow src={BackArrow} />
          <S.BackMent>
            돌아가기
          </S.BackMent>
        </S.BackButton>
        <div></div>
        <S.MatchMent src={MatchMent} isEmpty={connect.length <= 0} />
      </S.DisplayFlex>
    </S.Container>
  )
}

export default ConnectHeaderComponent;