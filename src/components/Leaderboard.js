import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';
import { useNavigate } from 'react-router-dom';

class Leaderboard extends Component {
  render() {
    const leaderboard = obtainLeadearboard(this.props.users);
    // const { users, questions } = store.getState();
    return (
      <div className="container">
        {leaderboard.map((l) => (
          <LeaderboardItem
            key={l.id}
            avatarURL={l.avatarURL}
            name={l.name}
            answeredQuestions={l.answeredQuestions}
            createdQuestions={l.createdQuestions}
          />
        ))}
      </div>
    );
  }
}

function LeaderboardWithNavigation(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props.authedUser === '') {
      navigate('/signin');
    }
  });

  return <Leaderboard {...props} />;
}

function mapStateToProps(state) {
  return state;
}

function obtainLeadearboard(users) {
  let leaderboard = Object.keys(users).map((id) => ({
    id: id,
    answeredQuestions: Object.keys(users[id].answers).length,
    createdQuestions: users[id].questions.length,
    avatarURL: users[id].avatarURL,
    name: users[id].name,
  }));

  return leaderboard.sort((a, b) => {
    return (
      b.answeredQuestions +
      b.createdQuestions -
      (a.answeredQuestions + a.createdQuestions)
    );
  });
}

export default connect(mapStateToProps)(LeaderboardWithNavigation);
