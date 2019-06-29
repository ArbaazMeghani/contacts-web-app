import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Header() {
    return (
        <header>
            <Typography align="center" variant="h6"> Contacts List Application </Typography>
            <Divider />
            <br />
        </header>
    );
}

export default Header;