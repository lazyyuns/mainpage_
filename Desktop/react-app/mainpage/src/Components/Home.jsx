import Welcome from './Welcome';
import Code_recommand from './Code_recommand';
import Earn from './Earn';
import Views from './Views';

const Home = () => {
  return (
    <div className="Home-box">
      <span className="홈">홈</span>
      <div>
        <Welcome name={'Sally'} />
        <Code_recommand name={'Sally'} />
      </div>
      <div>
        <Earn />
        <Views />
      </div>
    </div>
  );
};

export default Home;
