import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import Main from './components/Main';

Amplify.configure(config);

const App = () => (
  <div>
    <Main />
  </div>
)


export default App;
