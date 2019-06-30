import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class NewContact extends React.Component {
    render() {
        return (
            <div>
                 <Fab color="primary" aria-label="Add">
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}