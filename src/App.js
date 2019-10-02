import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import ResponseForm from './components/ResponseForm';
import config from './aws-exports';


Amplify.configure(config);

function App() {
  return (
    <div className="App">
        <ResponseForm/>
    </div>
  );
}

export default App;
