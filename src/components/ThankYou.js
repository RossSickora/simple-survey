
import React, { Component } from "react";
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';

const useStyles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
});

class ThankYou extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div class={classes.container}>
                <h1>Thank you for your submission</h1>
            </div>
        
        );
    }
}






export default withRouter(withStyles(useStyles)(ThankYou));