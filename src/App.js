import React from 'react';
import './App.css';

import DefaultForm from './components/defaultForm';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
  }

  render(){
    return (
      <div className="pvl slds-grid slds-grid_align-center">
        <DefaultForm />
      </div>
      );
  }
}

export default App;
