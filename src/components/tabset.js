import React from 'react';
import classnames from 'classnames';

class Tabset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: 0
    };
  }

  renderTabPanels() {
    return (
      this.props.tabs.map((tab, index) => {
        return this.state.currentTabIndex === index ? tab : null 
      })
    )
  }

  render() {
    return (
      <div className="mvl slds-tabs_default">
        <ul className="slds-tabs_default__nav" role="tablist">
          {this.props.tabs.map((tab, index) => {
            return (
            <li 
              className={classnames('slds-tabs_default__item', { 'slds-is-active': this.state.currentTabIndex === index })}
              title="Item One" 
              role="presentation"
            >
                <a 
                  className="slds-tabs_default__link" 
                  role="tab" 
                  tabIndex="0" 
                  aria-selected="true" 
                  aria-controls="tab-default-1" 
                  id="tab-default-1__item"
                >
                  {tab.props.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="pam">
        {this.renderTabPanels()}
        </div>
      </div>
      );
  }
}

Tabset.displayName = "Tabset";

export default Tabset;

