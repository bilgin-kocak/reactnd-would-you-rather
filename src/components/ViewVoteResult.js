import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { connect } from 'react-redux';

class ViewVoteResult extends Component {
  render() {
    const { question, writer, yourVote, users } = this.props;
    const optionOne = question.optionOne.votes.length;
    const optionTwo = question.optionTwo.votes.length;
    const sum = optionOne + optionTwo;
    const optionOnePercentage = (100 * optionOne) / sum;
    const optionTwoPercentage = 100 - optionOnePercentage;
    return (
      <div className="p-2">
        <div className="container border rounded p-4">
          <div className="row question-title">
            <h4>{`${writer.name} asks:`}</h4>
          </div>
          <div className="row">
            <div className="col-3">
              <img className="user-avatar" src={users[writer.id].avatarURL} />
            </div>
            <div className="col-9">
              <h3>Would you rather...</h3>
              <p>{question.optionOne.text}</p>
              <BorderLinearProgress
                variant="determinate"
                value={(100 * optionOne) / sum}
              />{' '}
              <p>
                {`${optionOnePercentage}% | ${optionOne} out of ${sum} votes`}
                {yourVote === 'optionOne' ? ' | You voted' : ''}
              </p>
              <p>{question.optionTwo.text}</p>
              <BorderLinearProgress
                variant="determinate"
                value={(100 * optionTwo) / sum}
              />
              <div>
                <p style={{ display: 'inline' }}>
                  {`${optionTwoPercentage}% | ${optionTwo} out of ${sum} votes`}
                  {yourVote === 'optionTwo' ? ' | You voted' : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(ViewVoteResult);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));
