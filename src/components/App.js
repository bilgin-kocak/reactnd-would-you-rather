import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Home from './Home';
import SigIn from './SignIn';
import Leaderboard from './Leaderboard';
import NavBarCompoenent from './NavBarCompoenent';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Vote from './Vote';
import NewQuestion from './NewQuestion';
import { LoadingBar } from 'react-redux-loading';
import CircularProgress from '@mui/material/CircularProgress';
import ProtectedRoutes from './ProtectedRoutes';

class App extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handleInitialData());
    console.log(location);
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
              <Route path="/" element={<ProtectedRoutes />}>
                <Route exact path="/" element={<Home />}></Route>

                <Route path="/leaderboard" element={<Leaderboard />}></Route>
                <Route path="/add" element={<NewQuestion />}></Route>
                <Route path="/question/:questionId" element={<Vote />}></Route>
                <Route path="*" element={<h2>Not Found</h2>} />
              </Route>
              <Route path="/signin" element={<SigIn />}></Route>
            </Routes>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function AppWithLocation(props) {
  const location = useLocation();
  return <App {...props} location={location} />;
}

function mapStateToProps({ users, questions, authedUser }) {
  console.log({ users, questions, authedUser });
  return { users, questions, authedUser };
}

export default connect(mapStateToProps)(AppWithLocation);
