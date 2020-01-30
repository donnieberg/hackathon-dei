import React from 'react';
import classnames from 'classnames';

class Tabset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: 0
    };
  }

  renderTabContent() {
    return (
      this.props.tabs.map((tab, index) => {
        return this.state.currentTabIndex === index ? tab : null 
      })
    )
  }
  
  handleTabClick(index) {
    return () => {
      this.setState({currentTabIndex: index});
    }
  }

  render() {
    return (
      <div className="mvl brt-s brb-s slds-tabs_default">
        <ul className="slds-tabs_default__nav" role="tablist">
          {this.props.tabs.map((tab, index) => {
            return (
            <li 
              className={classnames('slds-tabs_default__item', { 'slds-is-active': this.state.currentTabIndex === index })}
              title="Item One" 
              role="presentation"
            >
                <a 
                  aria-controls={`tab-${index}__panel`}
                  aria-selected={this.state.currentTabIndex === index ? true : false}
                  className="slds-tabs_default__link tab-focus" 
                  href="javascript:void(0)"
                  id={`tab-${index}__item`}
                  onClick={this.handleTabClick(index)}
                  role="tab" 
                  tabIndex="0" 
                >
                  {tab.props.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div 
          aria-labelledby="tab-default-1__item"
          className="pam slds-tabs_default__content slds-show" 
          id="tab-default-1" 
          role="tabpanel" 
        >
        {this.renderTabContent()}
        </div>
      </div>
      );
  }
}

Tabset.displayName = "Tabset";

export default Tabset;

