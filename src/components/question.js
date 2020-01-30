import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="cf">
        <div className="slds-form-element">
          <label className="slds-form-element__label" htmlFor="textarea-id-01">What would you like to know?</label>
          <div className="slds-form-element__control">
            <textarea id="textarea-id-01" className="slds-textarea" placeholder="Write here..."></textarea>
          </div>
        </div>
        <div className="slds-form-element">
          <label className="slds-form-element__label" htmlFor="textarea-id-01">Details</label>
          <div className="slds-form-element__control">
            <textarea id="textarea-id-01" className="slds-textarea" placeholder="Write here..."></textarea>
          </div>
        </div>
        <button className="slds-button slds-button_brand fr mts">Ask</button>
      </div>
    );
  }
}

Question.displayName = "Question";

export default Question;

