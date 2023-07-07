import Welcome from './Welcome';
import Code_recommand from './Code_recommand';
import Earn from './Earn';
import Title from './Title';
import Count from './Count';
import styled from 'styled-components';

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const Home = () => {
  return (
    <div className="Home-box">
      <span className="홈">홈</span>
      <div>
        <Welcome name={'Sally'} />
        <Code_recommand name={'Sally'} />
      </div>
      <Earn>
        <Title
          img="Group.jpg"
          maintxt="예상 수익"
          text="모든 영상에서 발생한 수익"
        ></Title>
        <ParentContainer>
          <Count money={2} />
        </ParentContainer>
        <Title
          img="Money.jpg"
          maintxt="수익 정산 신청"
          text="수익 신청은 $10이상부터 가능해요"
        ></Title>
      </Earn>
    </div>
  );
};

export default Home;
