import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
const propTypes = {};

class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="tab-default-1" className="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="tab-default-1__item">
        {this.props.children}
      </div>
    );
  }
}

TabPanel.displayName = "TabPanel";
TabPanel.propTypes = propTypes;

export default TabPanel;

