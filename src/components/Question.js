import React, { Component } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {
  state = { option: 'none' };
  handleButton = (e, id) => {
    this.props.navigate(`/question/${id}`);
  };
  render() {
    const { userName, optionText1, optionText2 } = this.props;
    return (
      <div className="container">
        <div className="row question-title">
          <h4>{userName} asks:</h4>
        </div>
        <div className="row">
          <div className="col-3 center">
            <img
              className="user-avatar"
              src={this.props.users[userName].avatarURL} //"https://via.placeholder.com/100x100"
            />
          </div>
          <div className="col-9">
            <h4>Would you rather...</h4>
            <p>{optionText1}</p>
            <p>{optionText2}</p>
            <Button
              variant="contained"
              onClick={(e) => {
                this.handleButton(e, this.props.id);
              }}
            >
              View Poll
            </Button>
          </div>
        </div>

        <hr></hr>
      </div>
    );
  }
}

function QuestionWithNavigation(props) {
  const navigate = useNavigate();
  return <Question {...props} navigate={navigate} />;
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(QuestionWithNavigation);
