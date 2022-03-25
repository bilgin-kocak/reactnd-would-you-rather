import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionListWithToggle';
import { useNavigate } from 'react-router-dom';

class Home extends Component {
  render() {
    // const { users, questions } = store.getState();

    return (
      <div>
        <QuestionList></QuestionList>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

function HomeWithNavigate(props) {
  let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (props.authedUser === '') {
  //     navigate('/signin');
  //   }
  // });
  return <Home {...props} navigate={navigate} />;
}

export default connect(mapStateToProps)(HomeWithNavigate);
