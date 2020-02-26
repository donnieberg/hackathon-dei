import React from 'react';
import { Popover, Button } from '@salesforce/design-system-react';


const HEADER_ID = "dei-checker-header";
const PROJECT_NAME = "DEI Form Checker";


class DEIChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderBody() {
    return (
    <div>
      <h2 className="pvs mbs bbs border-gray" id={HEADER_ID}>{PROJECT_NAME}</h2>

      {this.props.children}
    
      <div className="pvs bbs border-gray"></div>
      <Button 
        className="mvm" 
        variant="brand"
        onClick={this.props.onReplace}
      >
        Use suggestion
      </Button>

    </div>


    );
  }

  render() {
    return (
      <div>
        <Popover
          ariaLabelledby={HEADER_ID}
          body={this.renderBody()}
          id="custom"
        >
          <button className="slds-button slds-button_neutral paxs maxs dei-checker">
            <img src="icon.png" alt={PROJECT_NAME}/> 
          </button>
        </Popover>
      </div>
    );
  }
}

export default DEIChecker;
