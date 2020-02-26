import React from 'react';
import { Combobox } from '@salesforce/design-system-react';

const options = [
	{ id: '1', label: 'Asian' },
	{ id: '2', label: 'Female' },
	{ id: '3', label: 'Nonbinary' },
	{ id: '4', label: 'Gender not listed here' },
	{ id: '5', label: 'Prefer not to say' },
];

class RaceField2 extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			inputValue: '',
			selection: [],
		};
  }

  render() {
    return (
      <div className={this.props.className}>
      <Combobox
					id="better-race-field"
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

RaceField2.displayName = "RaceField2";

export default RaceField2;
