import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';

function Header({ title }) {
  return (
    <header>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
    </header>
  );
}

export default Header;