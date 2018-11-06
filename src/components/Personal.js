import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Personal extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
  
  render() {
    const {values,handleChange}=this.props
    
    return (
     <MuiThemeProvider>
<React.Fragment>
 <AppBar title="Personal"/>
 <TextField 
 hintText="Occupation"
 floatingLabeltext="Occupation"
 onChange={handleChange('occupation')}
 defaultValue={values.occupation}
 />
 <br/>

 <TextField 
 hintText="City"
 floatingLabeltext="City"
 onChange={handleChange('city')}
 defaultValue={values.city}
 />
 <br/>
 <TextField 
 hintText="bio"
 floatingLabeltext="Bio"
 onChange={handleChange('bio')}
 defaultValue={values.bio}
 />
<br/>

<RaisedButton 
 label="Back"
 primary={false}
 style={{margin:'10px'}}
 onClick={this.props.prevStep}
 />

 <RaisedButton 
 label="Continue"
 primary={true}
 style={{margin:10}}
 onClick={this.props.nextStep}
 />
</React.Fragment>


     </MuiThemeProvider>
    )
  }
}

export default Personal
