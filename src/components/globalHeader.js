import React from 'react';

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="pam bg-header text-white">
        GlobalHeader
      </header>
    );
  }
}

GlobalHeader.displayName = "GlobalHeader";

export default GlobalHeader;

