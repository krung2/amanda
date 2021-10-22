import ColorLogo from '../../../assets/img/colorLogo.svg';
import BackArrow from '../../../assets/img/BackArrow.svg';
import MatchMent from '../../../assets/img/matchMent.svg';
import * as S from './styles';

const ConnectHeaderComponent = () => {
  return (
    <S.Container>
      <div>
        <S.Logo src={ColorLogo} />
      </div>

      <S.DisplayFlex>
        <S.BackButton>
          <embed src={BackArrow} />
          <S.BackMent>
            돌아가기
          </S.BackMent>
        </S.BackButton>
        <div></div>
        <S.MatchMent src={MatchMent} />
      </S.DisplayFlex>
    </S.Container>
  )
}

export default ConnectHeaderComponent;