import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Home from './Home';
import SigIn from './SignIn';
import Leaderboard from './Leaderboard';
import NavBarCompoenent from './NavBarCompoenent';
import { Routes, Route } from 'react-router-dom';
import Vote from './Vote';
import NewQuestion from './NewQuestion';
import { LoadingBar } from 'react-redux-loading';
import CircularProgress from '@mui/material/CircularProgress';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="container"></div>
        {this.props.authedUser === null ? (
          <CircularProgress className="center" />
        ) : (
          <Fragment>
            <NavBarCompoenent></NavBarCompoenent>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/signin" element={<SigIn />}></Route>
              <Route path="/leaderboard" element={<Leaderboard />}></Route>
              <Route path="/add" element={<NewQuestion />}></Route>
              <Route path="/question/:questionId" element={<Vote />}></Route>
              <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  console.log({ users, questions, authedUser });
  return { users, questions, authedUser };
}

export default connect(mapStateToProps)(App);
