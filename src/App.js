import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import ResponseForm from './components/ResponseForm';
import ThankYou from './components/ThankYou';
import config from './aws-exports';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {routes} from './router/routes';
import Main from './components/Main';

Amplify.configure(config);

const App = () => (
  <div>
    <Main />
  </div>
)


export default App;
