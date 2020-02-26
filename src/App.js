import React from 'react';
import './App.css';

import GenderQuestion from './components/genderQuestion';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
  }

  render(){
    return (
      <div className="App">
        <GenderQuestion />
      </div>
      );
  }
}

export default App;
