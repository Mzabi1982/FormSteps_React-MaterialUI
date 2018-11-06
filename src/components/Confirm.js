import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
  
  render() {
    const {values:{firstname,lastname,bio,occupation}}=this.props
    
    return (
     <MuiThemeProvider>
<React.Fragment>
 <AppBar title="Confirm"/>

 <List>
 <ListItem
 primaryText='First Name'
 secondaryText={firstname}
 />
 <ListItem
 primaryText='Lat Name'
 secondaryText={lastname}
 />
 <ListItem
 primaryText='Occupation'
 secondaryText={occupation}
 />
 <ListItem
 primaryText='Bio'
 secondaryText={bio}
 />


 </List>

<RaisedButton 
 label="Back"
 primary={false}
 style={{margin:'10px'}}
 onClick={this.back}
 />

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

export default Confirm
