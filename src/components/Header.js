import React from 'react';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    Header: {
        textAlign: "center"
    }
});

function Header() {
    let classes = makeStyles(styles);
    return (
        <header className={classes.Header}>

        </header>
    );
}

export default Header;