import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: ''
    };
  }

  // Proceed to next step
  nextStep = () => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };

  // Return to previous step
  previousStep = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <FormPersonalDetails />;
      case 3:
        return <h1>Hi</h1>;
      case 4:
        return <h1>Hi</h1>;
    }
    return <div />;
  }
}

export default UserForm;
