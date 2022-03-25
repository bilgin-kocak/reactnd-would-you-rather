import React, { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  };

  handleCreateQuestion = (e) => {
    const { dispatch, authedUser } = this.props;
    dispatch(
      handleAddQuestion({
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
        author: authedUser,
      })
    );
    this.props.navigate('/');
  };
  handleChangeInputOne = (e) => {
    this.setState({ optionOne: e.target.value });
  };
  handleChangeInputTwo = (e) => {
    this.setState({ optionTwo: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <h3 className="d-flex justify-content-center">Create New Question</h3>
        <hr />
        <h5>Would you rather...</h5>
        <input
          onChange={this.handleChangeInputOne}
          type="text"
          className="form-control"
          placeholder="Enter option one text here"
        ></input>
        <h5 className="d-flex justify-content-center">Or</h5>

        <input
          onChange={this.handleChangeInputTwo}
          type="text"
          className="form-control"
          placeholder="Enter option two text here"
        ></input>

        <div className=" d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={this.handleCreateQuestion}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function NewQuestionWithNavigation(props) {
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (props.authedUser === '') {
  //     navigate('/signin');
  //   }
  // });

  return <NewQuestion {...props} navigate={navigate} />;
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(NewQuestionWithNavigation);
