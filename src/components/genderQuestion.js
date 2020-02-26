import React from 'react';
import { Button } from '@salesforce/design-system-react';
import GenderField1 from './genderField1';
import GenderField2 from './genderField2';

class GenderQuestion extends React.Component {
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
        <GenderField1 />
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
        <p>People may not identify as male or female. Consider adding more options like so.</p>
        <GenderField2 /> 
        <Button 
          label="Replace"
          onClick={this.replaceOriginal}
        />
      </div>
     )
  }

  render() {
    return (
      <div className="slds-grid slds-wrap">
        <div className="slds-col slds-size_1-of-2 phl">
          { !this.state.replaceOriginal ? this.showOriginal() : <GenderField2 /> }
        </div>
        <div className="slds-col slds-size_1-of-2 phl">
          { this.state.showSuggestion && !this.state.replaceOriginal ? this.showSuggestions() : null }
        </div>
      </div>
    );
  }
}

export default GenderQuestion;

