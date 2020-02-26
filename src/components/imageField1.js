import React from 'react';
import { Combobox } from '@salesforce/design-system-react';

const options = [
	{ id: '1', label: 'Male' },
	{ id: '2', label: 'Female' },
];

class ImageField1 extends React.Component {
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

      </div>
    );
  }
}

ImageField1.displayName = "ImageField1";

export default ImageField1;
