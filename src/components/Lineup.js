import React, {Fragment} from 'react';
import Player from './Player';

const Lineup = (props) => {
  const positions = {
    c: 'catcher',
    first: 'first base',
    second: 'second base',
    shortstop: 'shortstop',
    third: 'third base',
    left: 'left field',
    lc: 'left center field',
    rc: 'right center field',
    right: 'right field',
    pitcher: 'pitcher'
  }

  const players = Object.keys(positions).map(player => {
      return <Player title={positions[player]} />
    });
  
  return (
    <Fragment>
    <h1>Lineup #{props.num}</h1>
    <div>{players}</div>
    </Fragment>
  )
};

export default Lineup;