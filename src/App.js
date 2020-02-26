import React from 'react';
import './App.css';

import DefaultForm from './components/defaultForm';
import DEIChecker from './components/DEIChecker';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
  }

  render(){
    return (
      <div className="pvl slds-grid slds-grid_align-center">
        <div className="dei-checker-header"><DEIChecker>TODO</DEIChecker></div>
        <DefaultForm />
      </div>
      );
  }
}

export default App;
