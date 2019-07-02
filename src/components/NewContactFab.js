import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = makeStyles({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 100,
    left: 'auto',
    position: 'fixed',
  }
});

export default function NewContactFab({onClickHandler}) {
  const classes = styles();
  return (
    <Fab color="primary" aria-label="Add" onClick={() => onClickHandler()} className={classes.fab}>
      <AddIcon />
    </Fab>
  );
}