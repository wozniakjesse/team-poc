import React, {Fragment} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Player from './Player';

const Lineup = (props) => {
  const players = Object.keys(props.players).map(position => {
      return <Player key={position} name={props.players[position]} position={position} />
    });
  
  return (
    <Fragment>
      <h1>Lineup #{props.inning}</h1>
      <TableContainer>
        <Table>
          <TableBody>
            {players}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
};

export default Lineup;