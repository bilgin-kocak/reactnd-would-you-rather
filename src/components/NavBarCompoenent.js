import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { handleSetAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class NavBarComponent extends Component {
  handleLogout = (e) => {
    this.props.dispatch(handleSetAuthedUser(''));
  };
  render() {
    let activeStyle = {
      textDecoration: 'underline',
    };
    const { users, authedUser } = this.props;
    console.log(users);
    return (
      <Navbar bg="light">
        <Container>
          <Nav className="me-auto">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p className="text-dark m-2">Home</p>
            </NavLink>
            <NavLink
              to="/add"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p className="text-dark m-2">New Question</p>
            </NavLink>
            <NavLink
              to="/leaderboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p className="text-body m-2">Leaderboard</p>
            </NavLink>
          </Nav>
          {authedUser && (
            <Fragment>
              <p className="nav-text">Hello {users[authedUser].name}</p>
              <button className="button-text" onClick={this.handleLogout}>
                Log out
              </button>
            </Fragment>
          )}
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}

export default connect(mapStateToProps)(NavBarComponent);
