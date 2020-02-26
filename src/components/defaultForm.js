import React from 'react';
import { Input, RadioGroup, Radio } from '@salesforce/design-system-react';

class DefaultForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderChecked: null,
      raceChecked: null
    };
  }

  render() {
    const binaryGenderOptions = [ 'Male', 'Female' ];
    const limitedRaceOptions = [ 'White', 'Black', 'Asian', 'Hispanic', 'Other' ];

    return (
      <main className="slds-col slds-size_2-of-3">
        <h1 className="pbs mbm slds-text-heading_large bbs border-gray">Scholarship Info Session</h1>
        <p className="slds-text-heading_small">
          Want to travel abroad? Planning to attend graduate school? Looking for an award that fits your interests? Join us to learn about nationally competitive scholarships and fellowships that can help you fund your goals. Find out how to apply for 15 endorsed awards, and how to find even more opportunities. All majors and years are welcome. Pizza will be served! RSVP here.
        </p>

        <img 
          className="slds-size_1-of-2"
          src="/assets/2019-scholarship-group.jpg" 
          alt="silly stock image of a group of people lifting one arm" 
        />

        <div className="pvl">
          <Input 
            id="full-name" 
            className="mvm"
            label="Full Name" 
            placeholder="Enter in name" 
            required
          />
          <Input 
            id="email" 
            className="mvm"
            label="Email" 
            placeholder="Enter in email" 
            required
          />
          <Input 
            id="phone" 
            className="mvm"
            label="Phone (ie. xxx-xxx-xxxx)" 
            placeholder="Enter in phone" 
          />
          <Input 
            id="major" 
            className="mvm"
            label="Major(s)" 
            placeholder="Enter in your major(s)" 
            required
          />

        <RadioGroup
          className="mvm"
					labels={{label: 'Gender'}}
					required onChange={(event) => this.setState({ genderChecked: event.target.value })}
				>
					{binaryGenderOptions.map((value) => (
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
        
        </div>
      </main>
    );
  }
}

DefaultForm.displayName = "DefaultForm";

export default DefaultForm;
