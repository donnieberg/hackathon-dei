import React from 'react';

class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div 
        aria-labelledby="tab-default-1__item"
        className="slds-tabs_default__content slds-show" 
        id="tab-default-1" 
        role="tabpanel" 
      >
        {this.props.children}
      </div>
    );
  }
}

TabPanel.displayName = "TabPanel";

export default TabPanel;

