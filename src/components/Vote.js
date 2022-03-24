import React, { Component } from 'react';
import VoteQuestion from './VoteQuestion';
import ViewVoteResult from './ViewVoteResult';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';

class Vote extends Component {
  handleForm = (e) => {
    if (e.target.type === 'radio') {
      this.setState({ option: e.target.value });
    }
  };
  handleSubmitButton = ({ qid, answer, authedUser }) => {
    const { dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer({ qid, answer, authedUser }));
  };
  render() {
    let yourVote = undefined;
    const { questionId, authedUser, questions, users } = this.props;
    const question = questions[questionId];
    if (!question) {
      return <div className="container">No Question Found</div>;
    }
    const writer = users[question.author];
    if (question.optionOne.votes.includes(authedUser)) {
      yourVote = 'optionOne';
    } else if (question.optionTwo.votes.includes(authedUser)) {
      yourVote = 'optionTwo';
    }

    return (
      <div>
        {yourVote === undefined ? (
          <VoteQuestion
            writer={writer}
            question={question}
            authedUser={authedUser}
            handleSubmitButton={this.handleSubmitButton}
          ></VoteQuestion>
        ) : (
          <ViewVoteResult
            question={question}
            writer={writer}
            yourVote={yourVote}
          />
        )}
      </div>
    );
  }
}

function VoteWithParams(props) {
  const { questionId } = useParams();
  return <Vote {...props} questionId={questionId}></Vote>;
}

function mapStateToProps({ questions, authedUser, users }) {
  return { questions, authedUser, users };
}

export default connect(mapStateToProps)(VoteWithParams);
