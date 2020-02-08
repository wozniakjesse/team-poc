import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lineup from './components/Lineup';
import ManualLineup from './components/ManualLineup';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
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
  	<div>
    <ManualLineup></ManualLineup>
      <Container maxWidth="xs">
        {lineups}
      </Container>
    </div>
  );
}

export default App;
