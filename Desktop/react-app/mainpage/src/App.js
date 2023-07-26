import './App.css';
import Home from './Components/Home';
import React from 'react';

function App() {
  const divStyle ={
    width: 62,
height: 1186,
flexShrink: 0,
background: "#FFF",
  }
  return (
    <div className="App">
      <div style={{display: 'flex', flexDirections : 'row'}}>
     <div style={divStyle}></div>
      <Home />
      </div>
    </div>
  );
}

export default App;
