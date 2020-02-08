import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lineup from './Lineup';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import '../App.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class ManualLineup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.getPlayers(),
      tableBody: undefined,
    }
  }

  componentDidMount() {
    this.setState({tableBody:this.getTable()})
  }

  createPlayer(name, positions) {
    return { name, positions };
  };

  //Players are just hard/coded in for now until we get hooked up to the database
  getPlayers() {
    return (
      [
    this.createPlayer('Jesse Wozniak', ['', '', '', '', '', '', '']),
    this.createPlayer('Lauren Briese',['', '', '', '', '', '', '']),
    this.createPlayer('Robert Jones',['', '', '', '', '', '', '']),
    this.createPlayer('Jeanie DuMont',['', '', '', '', '', '', '']),
    this.createPlayer('Brooks Przybylek',['', '', '', '', '', '', '']),
    this.createPlayer('Joshua Flanigan',['', '', '', '', '', '', '']),
    this.createPlayer('Harry Potter',['', '', '', '', '', '', '']),
    this.createPlayer('Hermione Granger',['', '', '', '', '', '', '']),
    this.createPlayer('Ron Weasley',['', '', '', '', '', '', '']),
    this.createPlayer('Ginny Weasley',['', '', '', '', '', '', '']),
    this.createPlayer('Neville Longbottom',['', '', '', '', '', '', '']),
  ])
  };

  getTable = () => {
    if (this.state.players)
    return (
          this.state.players.map(player => (
            <TableRow key={player.name}>
              <TableCell component="th" scope="row">{player.name}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 0)}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 1)}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 2)}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 3)}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 4)}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 5)}</TableCell>
              <TableCell align={'center'}>{this.getDropDown(player, 6)}</TableCell>
            </TableRow>
          ))
    )
  }

  //Creates the drop-down menu with 
  getDropDown = (player, inning) => {
    return (
      <Select value={player.positions[inning]} onChange={(event)=>this.handleChange(event, player.name, inning)}>
        <MenuItem name={player.name} inning={inning} value={'1B'}>1B</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'2B'}>2B</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'3B'}>3B</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'C'}>C</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'LF'}>LF</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'LCF'}>LCF</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'P'}>P</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'RF'}>RF</MenuItem>
        <MenuItem name={player.name} inning={inning} value={'RCF'}>RCF</MenuItem>
        <MenuItem value={'SS'}>SS</MenuItem>
      </Select>
    )
  };

  //Updates the selected position for the player and removes duplicate positions from other players
  handleChange = (event, name, inning) => {
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].name === name) {
        this.state.players[i].positions[inning] = event.target.value
      }
      else {
        if (this.state.players[i].positions[inning] === event.target.value) {
          this.state.players[i].positions[inning] = ''
        }
      }
    }
    this.setState({tableBody: this.getTable()})
  }

  render() {
    return (
        <TableContainer>
        <Table style={{width: '75%'}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>Name</TableCell>
            <TableCell align={'center'}>1</TableCell>
            <TableCell align={'center'}>2</TableCell>
            <TableCell align={'center'}>3</TableCell>
            <TableCell align={'center'}>4</TableCell>
            <TableCell align={'center'}>5</TableCell>
            <TableCell align={'center'}>6</TableCell>
            <TableCell align={'center'}>7</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.tableBody}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
}

export default ManualLineup;