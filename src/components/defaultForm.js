import React from 'react';
import { Input, RadioGroup, Radio, Button } from '@salesforce/design-system-react';
import GenderField from './genderField';
import RaceField from './raceField';
import DEIChecker from './DEIChecker';

class DefaultForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderChecked: null,
      raceChecked: null,

      genderReplaced: false,
      raceReplaced: false
    };
  }

  renderGenderField() {
    if (this.state.genderReplaced) {
      return (
        <GenderField/>
      )
    }

      return (
        <div className="cf">
          <div className="fl">
            <GenderField required={true} limited={true} />
          </div>
          <div className="fr">
            <DEIChecker title="Gender" onReplace={() => {this.setState({genderReplaced: true})}}>
              <p>
              Is it absolutely necessary to know the person's gender for this meeting? Consider making it not a required field. 
              </p>
              <p className="mts">
              People may not identify as male or female - consider adding more options, like so:
              </p>
              <GenderField required={false} disabled />
            </DEIChecker>
          </div>
        </div>


      )
  }

  renderRaceField() {
    if (this.state.raceReplaced) {
      return (
        <RaceField/>
      );
    } else {

      return (
        <div className="cf">
          <div className="fl">
            <RaceField limited={true} />
          </div>
          <div className="fr">
            <DEIChecker title="Race & Ethnicity" onReplace={() => {this.setState({raceReplaced: true})}}>
              <p className="ptm">
                Is it absolutely necessary to know the person's race or ethnicity for this meeting? Consider making it not a required field. 
              </p>
              <p className="mts">
            Your options may be incomplete, use phrasing considered outdated, or force users to only make one selection. Consider this format and these options instead.
              </p>
            <RaceField disabled />
          </DEIChecker>
          </div>
        </div>


      )
    }
  }

  render() {
    return (
      <main className="slds-col slds-size_2-of-3 bg-white slds-box pal">
        <h1 className="pbs mbm slds-text-heading_large bbs border-gray">Scholarship Info Session</h1>
        <p className="slds-text-heading_small">
          Want to travel abroad? Planning to attend graduate school? Looking for an award that fits your interests? Join us to learn about nationally competitive scholarships and fellowships that can help you fund your goals. Find out how to apply for 15 endorsed awards, and how to find even more opportunities. All majors and years are welcome. Pizza will be served! RSVP here.
        </p>

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

        { this.renderGenderField() }
        { this.renderRaceField() }

        </div>
        
      </main>
    );
  }
}

DefaultForm.displayName = "DefaultForm";

export default DefaultForm;
