import React from 'react';
import { Button } from '@salesforce/design-system-react';
import RaceField1 from './raceField1';
import RaceField2 from './raceField2';

class RaceQuestion extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      showSuggestion: false,
      replaceOriginal: false,
		};
  }

  toggleSuggestion = () => {
    this.setState( prevState => ({
      showSuggestion: !prevState.showSuggestion
    }))
  } 

  replaceOriginal = () => {
    this.setState( prevState => ({
      replaceOriginal: true
    }))
  } 

  showOriginal() {
    return (
      <div>
        <RaceField1 />
        <Button 
          label="Toggle Suggestion on/off"
          onClick={this.toggleSuggestion}
        />
      </div>
    )
  }

  showSuggestions() {
    return (
      <div>
        <p>Your options may be incomplete, use phrasing considered outdated, or force users to only make one selection. Consider this format and these options instead.</p>
        <RaceField2 /> 
        <Button 
          label="Replace"
          onClick={this.replaceOriginal}
        />
      </div>
     )
  }

  render() {
    return (
      <div className="slds-grid slds-wrap slds-p-top_large">
        <div className="slds-col slds-size_1-of-2 phl">
          { !this.state.replaceOriginal ? this.showOriginal() : <RaceField2 /> }
        </div>
        <div className="slds-col slds-size_1-of-2 phl">
          { this.state.showSuggestion && !this.state.replaceOriginal ? this.showSuggestions() : null }
        </div>
      </div>
    );
  }
}

export default RaceQuestion;

