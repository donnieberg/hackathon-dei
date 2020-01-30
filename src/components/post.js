import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="slds-form-element cf">
        <label className="slds-form-element__label" htmlFor="textarea-id-01">Share an Update</label>
        <div className="slds-form-element__control">
          <textarea id="textarea-id-01" className="slds-textarea" placeholder="Write here..."></textarea>
        </div>
        <button className="slds-button slds-button_brand fr mts">Share</button>
      </div>
    );
  }
}

Post.displayName = "Post";

export default Post;

