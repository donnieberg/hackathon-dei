import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TabPanel from './tabPanel.js';

const propTypes = {};

class Tabset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="slds-tabs_default">
        <ul className="slds-tabs_default__nav" role="tablist">
          <li className="slds-tabs_default__item slds-is-active" title="Item One" role="presentation">
            <a className="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Item One</a>
          </li>
          <li className="slds-tabs_default__item" title="Item Two" role="presentation">
            <a className="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Item Two</a>
          </li>
          <li className="slds-tabs_default__item" title="Item Three" role="presentation">
            <a className="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Item Three</a>
          </li>
        </ul>

        <TabPanel>hello</TabPanel>
      </div>
      );
  }
}

Tabset.displayName = "Tabset";
Tabset.propTypes = propTypes;

export default Tabset;

