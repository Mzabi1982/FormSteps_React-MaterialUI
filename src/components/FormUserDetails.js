import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
  
  render() {
    const {values,handleChange}=this.props
    
    return (
     <MuiThemeProvider>
<React.Fragment>
 <AppBar title="Entr User Details"/>
 <TextField 
 hintText="First name"
 floatingLabeltext="Fisrt name"
 onChange={handleChange('firstname')}
 defaultValue={values.firstname}
 />
 <br/>

 <TextField 
 hintText="Last name"
 floatingLabeltext="Last name"
 onChange={handleChange('lastname')}
 defaultValue={values.lastname}
 />
 <br/>
 <TextField 
 hintText="Email"
 floatingLabeltext="Email"
 onChange={handleChange('email')}
 defaultValue={values.email}
 />
<br/>
 <RaisedButton 
 label="Continue"
 primary={true}
 style={{margin:10}}
 onClick={this.continue}
 />
</React.Fragment>


     </MuiThemeProvider>
    )
  }
}



export default FormUserDetails
