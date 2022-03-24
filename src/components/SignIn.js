import React, { Component, Fragment } from 'react';
import logo from '../images/react-redux.png';
import { Paper } from '@mui/material';
import SignInDropDown from './SignInDropDown';

class SignIn extends Component {
  render() {
    return (
      <div className="container login">
        <Paper variant="outlined" className="login-header">
          <div>
            <h5>Welcome to the Would You Rather App</h5>
            <p>Please sign in to continue</p>
          </div>
          <hr></hr>
          <img href={logo} alt="react redux logo"></img>
          <h3>Sign in</h3>
          <SignInDropDown></SignInDropDown>
        </Paper>
      </div>
    );
  }
}

export default SignIn;
