
import React, { Component } from "react";
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import {Amplify, graphqlOperation} from 'aws-amplify';
import * as queries from '../graphql/queries';
import {Connect} from 'aws-amplify-react';

const useStyles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
});

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        const ListView = ({ responses }) => (
            <div>
                <h3>All Responses</h3>
                <ul>
                    {responses.map(response => <li key={response.id}>{response.name} ({response.value})</li>)}
                </ul>
            </div>
        );

        return (
            <Connect query={graphqlOperation(queries.getAllResponses)}>
                {({ data: { getAllResponses }, loading, errors }) => {
                    console.log('errors' + JSON.stringify(errors));
                    console.log('loading' + JSON.stringify(loading));
                    console.log('listResponses' + JSON.stringify(getAllResponses));
                    if (errors && errors.length > 0){
                        console.log('errors' + JSON.stringify(errors));
                        return (<h3>Error</h3>);
                    } 
                    if (loading || !getAllResponses){
                        console.log('loading' + loading + getAllResponses);
                        return (<h3>Loading...</h3>);
                    } 
                    console.log('getAllResponses >' + getAllResponses);
                    return (<ListView responses={getAllResponses} /> );
                }}
            </Connect>
        )
    }
}





export default withRouter(withStyles(useStyles)(Results));