
import Frame1 from './Frame1';
import Frame2 from './Frame2';
import Frame3 from './Frame3'



const Home = () => {
  const divStyle ={
    width: 1378,
    height: 56,
    flexShrink: 0,
  }
  return (
    <div>
      <div style={divStyle}></div>
    <div className="Home-box">
      <span className="홈">홈</span>
      <Frame1 />
      <Frame2 />
      <Frame3/>
    </div>
    
    </div>
  );
};

export default Home;
