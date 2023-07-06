import Welcome from './Components/Welcome';

const Home = () => {
  return (
    <div className="home">
      <span className="홈">홈</span>
      <Welcome name={'Sally'} />
    </div>
  );
};

export default Home;
