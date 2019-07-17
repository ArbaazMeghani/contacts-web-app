import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = makeStyles({
  closeIconButton: {
    position: "absolute",
    right: 0,
    top: 0
  }
});
  
export default function CustomDialogTitle({ onClickHandler, titleText}) {
  const classes = styles();
  return (
    <DialogTitle>
      {titleText}
      <IconButton className={classes.closeIconButton} onClick={onClickHandler}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
}