import React from 'react';
import { RadioGroup, Radio } from '@salesforce/design-system-react';

const binaryGenderOptions = [ 'Male', 'Female' ];
const genderOptions = ['Female', 'Male', 'Nonbinary', 'Gender not listed here', 'Prefer not to say'];

class GenderField extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			inputValue: '',
			selection: [],
		};
  }

  render() {
	let options = this.props.limited ? binaryGenderOptions : genderOptions;
    return (
 		<RadioGroup
          className="mvm"
					labels={{label: 'Gender'}}
					required onChange={(event) => this.setState({ genderChecked: event.target.value })}
				>
					{options.map((value) => (
						<Radio
							key={value}
							id={value}
							labels={{ label: value }}
							value={value}
							checked={this.state.genderChecked === value}
							variant="base"
						/>
					))}
				</RadioGroup>
    );
  }
}


export default GenderField;
