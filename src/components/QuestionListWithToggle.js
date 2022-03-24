import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionListWithToggle extends Component {
  state = {
    showing: 'unanswered',
  };

  handleQuestionList = (event, newValue) => {
    this.setState({ showing: newValue });
  };

  render() {
    const { users, questions, authedUser } = this.props;

    const questionIds = Object.keys(questions);
    // const answeredQs = Object.keys(questions).forEach
    const answeredQIds = questionIds.filter(
      (id) =>
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
    );
    const unAnsweredQIds = questionIds.filter(
      (id) => !answeredQIds.includes(id)
    );
    return (
      <div className="container">
        <div className="row">
          <ToggleButtonGroup
            value={this.state.showing}
            exclusive
            onChange={this.handleQuestionList}
          >
            <ToggleButton value="unanswered">Unanswered Questions</ToggleButton>
            <ToggleButton value="answered">Answered Questions</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="row">
          {(this.state.showing === 'unanswered'
            ? unAnsweredQIds
            : answeredQIds
          ).map((key) => (
            <Question
              key={key}
              id={key}
              userName={questions[key].author}
              optionText1={questions[key].optionOne.text}
              optionText2={questions[key].optionTwo.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return { users, questions, authedUser };
}

export default connect(mapStateToProps)(QuestionListWithToggle);
