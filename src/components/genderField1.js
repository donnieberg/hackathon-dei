import React from 'react';
import { Combobox } from '@salesforce/design-system-react';

const options = [
	{ id: '1', label: 'Male' },
	{ id: '2', label: 'Female' },
];

class GenderField1 extends React.Component {
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
					id="binary-gender-field"
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

GenderField1.displayName = "GenderField1";

export default GenderField1;
