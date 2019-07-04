import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    margin: 0,
    top: 'auto',
    right: 0,
    bottom: 0,
    left: 0,
    position: 'fixed',
  }
};

function Footer({author, source}) {
  return (
    <footer style={styles.root}>
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>
                Created By: {author}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align="right">
                <Button onClick={() => window.open(source, '_blank')} >Source Code</Button>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </footer>
  );
}

export default Footer;