import React from 'react';
import logo from './logo.svg';
import Lineup from './components/Lineup';
import './App.css';

function App() {
  const lineups = [...Array(7).keys()].map(i => {
    return <Lineup num={i+1} />;
  });
  
  return (
    <div className="App">
      {lineups}
    </div>
  );
}

export default App;
