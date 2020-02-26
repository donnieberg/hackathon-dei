import React from 'react';
import { Button } from '@salesforce/design-system-react';
import ImageField1 from './imageField1';
import ImageField2 from './imageField2';

class ImageQuestion extends React.Component {
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
        <ImageField1 />
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
        <p>Corrective text...</p>
        <ImageField2 /> 
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
          { !this.state.replaceOriginal ? this.showOriginal() : <ImageField2 /> }
        </div>
        <div className="slds-col slds-size_1-of-2 phl">
          { this.state.showSuggestion && !this.state.replaceOriginal ? this.showSuggestions() : null }
        </div>
      </div>
    );
  }
}

export default ImageQuestion;

