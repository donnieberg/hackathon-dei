import React from 'react';
import { Combobox } from '@salesforce/design-system-react';

const options = [
	{ id: '1', label: 'Asian' },
	{ id: '2', label: 'Black/African' },
];

class RaceField1 extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			inputValue: '',
			selection: [],
		};
  }

  render() {
    return (
      <div>
      <Combobox
					id="race-field"
					labels={{ label: 'Race', placeholder: 'Select Race', }}
					options={options}
					selection={this.state.selection}
					value={this.state.inputValue}
					variant="readonly"
				/>
      </div>
    );
  }
}

RaceField1.displayName = "RaceField1";

export default RaceField1;
