import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {API, graphqlOperation} from 'aws-amplify';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

import {createResponse} from '../graphql/mutations'

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
    this.state = {value: '', name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.saveResponse();
    this.props.history.push('/exit');
    event.preventDefault();
  }

  async saveResponse() {
    try {  
      let result = await API.graphql(
          graphqlOperation(createResponse, {value: this.state.value, user: this.state.name})
        );
        console.log(result.data);
        if(result.data.createResponse.id === undefined) {
          alert('an Error occured saving the fund, please try again');
        }
        else {
          //alert('A '+ this.state.name+' has submitted: ' + this.state.value);
          
        }
      }
      catch (e) {
        console.log(e);
      }
  }


  render() {
    const {classes} = this.props;

    return (
      <form class={classes.container} noValidate autoComplete="off">
        <div className={classes.container} >
          <h1> CSS Town Hall Engineering Survey</h1>
        </div>
          <TextField
          id="outlined-multiline-flexible"
          multiline
          rowsMax="10"
          rows="8"
          label="What prevents you from being a great engineer?"
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          multiline
          rowsMax="1"
          rows="1"
          value={this.state.name}
          onChange={this.handleNameChange}
          className={classes.textField}
          label="Name (Optional)"
          margin="normal"
          variant="outlined"
        />
        <Button variant="outlined" color="primary" className={classes.btn} onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );

  }
}

export default withRouter(withStyles(useStyles)(ResponseForm));