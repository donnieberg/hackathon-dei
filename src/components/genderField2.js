import React from 'react';
import { Combobox } from '@salesforce/design-system-react';

const options = [
	{ id: '1', label: 'Male' },
	{ id: '2', label: 'Female' },
	{ id: '3', label: 'Nonbinary' },
	{ id: '4', label: 'Gender not listed here' },
	{ id: '5', label: 'Prefer not to say' },
];

class GenderField2 extends React.Component {
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
					id="nonbinary-gender-field"
					labels={{ label: 'Gender', placeholder: 'Select Gender', }}
					options={options}
					selection={this.state.selection}
					value={this.state.inputValue}
					variant="readonly"
				/>
      </div>
    );
  }
}

GenderField2.displayName = "GenderField2";

export default GenderField2;
