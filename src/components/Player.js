import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Player = (props) => {
  return (
    <TableRow>
      <TableCell>
        {props.position}:
      </TableCell>
      <TableCell>
      {props.name}
      </TableCell>
    </TableRow>
  );
}

export default Player;