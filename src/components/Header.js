import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';

function Header({ title }) {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Contacts List
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
    </header>
  );
}

export default Header;