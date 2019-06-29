import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Header({ title }) {
    return (
        <header>
            <Typography align="center" variant="h6"> {title} </Typography>
            <Divider />
            <br />
        </header>
    );
}

export default Header;