import React, { Component } from 'react';
import VoteQuestion from './VoteQuestion';
import ViewVoteResult from './ViewVoteResult';
import { connect } from 'react-redux';
import {
  useParams,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { handleSetAuthedUser } from '../actions/authedUser';

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
      // this.props.dispatch(handleSetAuthedUser(''));
      // return (
      //   <Navigate
      //     to="/not-found"
      //     state={{ from: this.props.location }}
      //     replace
      //   />
      // );

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
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Vote
      {...props}
      questionId={questionId}
      location={location}
      navigate={navigate}
    ></Vote>
  );
}

function mapStateToProps({ questions, authedUser, users }) {
  return { questions, authedUser, users };
}

export default connect(mapStateToProps)(VoteWithParams);
