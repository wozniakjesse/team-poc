import React, { useEffect, useState } from 'react';
import Lineup from './components/Lineup';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  const [lineups, setLineups] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8652/api')
    .then(res => {
      return res.json();
    })
    .then(res => {
      const lineups = res.data.map((lineup, i) => {
        return <Lineup key={i+1} inning={i+1} players={lineup} />;
      });
      setLineups(lineups);
    });
  }, []);
  
  return (
    <div className="App">
      <Container maxWidth="xs">
        {lineups}
      </Container>
    </div>
  );
}

export default App;
