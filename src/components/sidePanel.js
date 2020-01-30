import React from 'react';

const groupData = [
  { label: 'Web Components', image: 'groups_code', description: 'Shadow DOM anyone?' },
  { label: 'Accessibility', image: 'groups_a11y', description: 'a11y rocks!' },
  { label: 'Cat lovers', image: 'groups_cat', description: 'purrrr..' },
  { label: 'Bestie Picks Bae', image: 'groups_bpb', description: 'Great group' },
]

const GroupSuggestion = ({ label, image, description }) => (
  <li className="pvs slds-media slds-media_center border-gray bbs">
    <div className="slds-media__figure">
      <span className="slds-avatar slds-avatar_large">
        <img alt="" src={`/assets/${image}.png`} />
      </span>
    </div>
    <div className="slds-media__body">
      <p>
        <span className="fw-bold">{label}</span>
        <br /> 
        {description}
      </p>
    </div>
    <div className="slds-media__figure slds-media__figure_reverse">
      <button className="slds-button slds-button_neutral">Join</button> 
    </div>
  </li>
);

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderGroups() {
    return groupData.map( group => {
      return (
        <GroupSuggestion
          label={group.label}
          description={group.description}
          image={group.image}
        />
        )
    })
  }

  render() {
    return (
      <aside className="width-aside fr mtl pam bg-white brt-s brb-s">
        <div className="mbm fw-bold slds-text-title_caps">Group Recommendations</div>
        <ul>
          {this.renderGroups()}
        </ul>
      </aside>
      );
  }
}

SidePanel.displayName = "SidePanel";

export default SidePanel;

