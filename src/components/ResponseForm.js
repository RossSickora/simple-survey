import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    textField: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      flex:1
    },
    btn: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      flex:1
    },
    menu: {
      width: 200,
    },
  });
  

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const {classes} = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div class = {classes.container} >
          <h1> What prevents you from being a great engineer? </h1>
        </div>
        <div class={classes.container}>
          <TextField
          id="outlined-multiline-flexible"
          multiline
          rowsMax="10"
          rows="8"
          value={this.state.value}
          onchange={this.handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div class={classes.container}>
        <Button variant="outlined" color="primary" className={classes.btn}>
          Submit
        </Button>
      </div>
      </form>
    );

  }
}

export default withStyles(useStyles)(ResponseForm);