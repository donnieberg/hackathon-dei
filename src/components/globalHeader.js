import React from 'react';

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="phm pvs bg-header text-white">
        <div className="width-main center-horz cf">
          <div className="fr mouse-cursor ">
            <span className="mrs slds-avatar slds-avatar_circle">
              <img alt="Marc Benioff" src="assets/marc.png" />
            </span>
            <span>Marc Benioff</span>
          </div>
        </div>
      </header>
    );
  }
}

GlobalHeader.displayName = "GlobalHeader";

export default GlobalHeader;

