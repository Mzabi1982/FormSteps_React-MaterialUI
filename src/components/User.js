import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import Personal from './Personal'
import Confirm from './Confirm'
import Success from './Success'




export class User extends Component {

    state={
        step:1,
        firstname:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    };
    

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
  
      first = () => {
        const { step } = this.state;
        this.setState({
          step:  1
        });
      };
    
      // Go back to prev step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };

    // go back

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };


    
   

    render() {
   const {step} = this.state;
   const {firstname,lastname,email,occupation,city,bio}= this.state;
   const  values={firstname,lastname,email,occupation,city,bio}

   

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
      return (
        <Personal
         prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          nextStep={this.nextStep}

        />

      );
    case 3:
      return (
      <Confirm
      
         prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          nextStep={this.nextStep}
      />
      );
    case 4:
    return (
       <Success first={this.first}/>
       );
}
  }
}

export default User
