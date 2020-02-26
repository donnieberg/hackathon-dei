import React from 'react';
import { Combobox, Radio, RadioGroup, IconSettings, Popover, Checkbox } from '@salesforce/design-system-react';

const limitedRaceOptions = [ 'White', 'Black', 'Asian', 'Hispanic', 'Other' ];
const fullRaceOptions = [ 'White', 'Black or African American', 'American Indian or Alaska Native', 
'East Asian',
'Asian Indian',
'Native Hawaiian',
'Other Pacific Islander (Tongan, Fijian, Marshallese, etc)',
'Other Asian (Pakistani, Cambodian, Hmong, etc)'];

class LimitedRaceField extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		};
  }

  render() {
    return (
        <RadioGroup
          className="mvm"
          labels={{label: 'Race & Ethnicity'}}
					required
					onChange={(event) => this.setState({ raceChecked: event.target.value })}
				>
			{limitedRaceOptions.map((value) => (
				<Radio
					key={value}
					id={value}
					labels={{ label: value }}
					value={value}
					checked={this.state.raceChecked === value}
					variant="base"
				/>
			))}
		</RadioGroup>
    );
  }
}

class FullRaceField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 'Select an option',
			selection: [],
			checked: [],
		};
		this.handleClose = this.handleClose.bind(this);
	}

	getIsChecked(label) {
		let isChecked = false;
		const checkedIndex = this.state.checked.findIndex(
			(el) => el.label === label
		);
		if (checkedIndex > -1) isChecked = true;
		return isChecked;
	}

	getInputString = (options) => {
		let inputValue = '';
		if (options.length === 0) inputValue = 'Select an option';
		else if (options.length === 1) inputValue = `${options[0].label}`;
		else inputValue = `${options.length} options selected`;
		return inputValue;
	};

	handleCheckboxChange(targetChecked, target, value) {
		const { checked } = this.state;
		if (targetChecked) {
			checked.push({
				id: target.id,
				label: value,
			});
		} else {
			const valueIndex = checked.findIndex((el) => el.label === value);
			checked.splice(valueIndex, 1);
		}

		const inputValue = this.getInputString(checked);
		this.setState({ inputValue, checked });
	}

	handleClose(e, { trigger }) {
		if (trigger === 'cancel') {
			const inputValue = this.getInputString(this.state.selection);
			const selection =
				this.state.selection.length > 0 ? this.state.selection.slice(0) : [];
			this.setState({
				checked: selection,
				inputValue,
			});
		} else {
			const checked =
				this.state.checked.length > 0 ? this.state.checked.slice(0) : [];
			this.setState({
				selection: checked,
			});
		}
	}

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<Combobox
					required
					assistiveText={{
						popoverLabel: 'Race & Ethnicity',
					}}
					id="combobox-dialog"
					labels={{
						label: 'Race & Ethnicity',
						placeholder: this.state.inputValue,
					}}
					popover={
						<Popover
							body={
								<div>
									<fieldset className="slds-form-element">
										<legend className="slds-form-element__legend slds-form-element__label">
											Select however many you want:
										</legend>
										<div className="slds-form-element__control">
											{fullRaceOptions.map((language, i) => (
												<Checkbox
													checked={this.getIsChecked(language)}
													id={`checkbox-${i}`}
													key={`checkbox-${i + 1}`}
													labels={{ label: language }}
													onChange={(e, { checked }) => {
														this.handleCheckboxChange(
															checked,
															e.target,
															language
														);
													}}
												/>
											))}
										</div>
									</fieldset>
								</div>
							}
							onClose={this.handleClose}
						/>
					}
					selection={this.state.selection}
					value={this.state.inputValue}
					variant="popover"
				/>
			</IconSettings>
		);
	}
}

class RaceField extends React.Component {
	render() {
		return this.props.limited ? <LimitedRaceField/> : <FullRaceField/>
	}
}


export default RaceField;
