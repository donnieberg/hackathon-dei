import React from 'react';
import logo from './logo.svg';
import Poll from './components/Poll';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className="slds-button slds-button_neutral">Click </button>
      <Poll></Poll>
    </div>
  );
}

export default App;
