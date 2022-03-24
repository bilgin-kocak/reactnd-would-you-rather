import React, { Component } from 'react';

class VoteQuestion extends Component {
  state = { option: 'none' };
  handleForm = (e) => {
    if (e.target.type === 'radio') {
      this.setState({ option: e.target.value });
    }
  };
  render() {
    const { writer, question, authedUser } = this.props;
    return (
      <div className="p-2">
        <div className="container border rounded p-4">
          <div className="row question-title">
            <h4>{`${writer.name} asks:`}</h4>
          </div>
          <div className="row">
            <div className="col-3">
              <img
                className="user-avatar"
                src="https://via.placeholder.com/100x100"
              />
            </div>
            <div className="col-9">
              <h3>Would you rather...</h3>
              <form onChange={this.handleForm}>
                <input type="radio" name="fav_language" value="optionOne" />
                <label>{question.optionOne.text}</label>
                <br />
                <input type="radio" name="fav_language" value="optionTwo" />
                <label>{question.optionTwo.text}</label>
                <br />
              </form>
              <button
                className="btn btn-primary m-3"
                onClick={() => {
                  this.props.handleSubmitButton({
                    qid: question.id,
                    answer: this.state.option,
                    authedUser,
                  });
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteQuestion;
