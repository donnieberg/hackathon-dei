import React from 'react';
import './App.css';

import ImageQuestion from './components/imageQuestion';
import GenderQuestion from './components/genderQuestion';
import RaceQuestion from './components/raceQuestion';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
  }

  render(){
    return (
      <div className="App">
        <ImageQuestion />
        <GenderQuestion />
        <RaceQuestion />
      </div>
      );
  }
}

export default App;
