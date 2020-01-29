import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <img src="./assets/feedItemPlaceholder.png" alt="Feed Item placeholder" />
    );
  }
}

FeedItem.displayName = "FeedItem";

export default FeedItem;

