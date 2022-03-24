import React, { Component } from 'react';

class LeaderboardItem extends Component {
  render() {
    return (
      <div className="row border border-light rounded m-2 d-flex justify-content-center">
        <div className="col-2 d-inline-flex justify-content-center">
          <img src={this.props.avatarURL}></img>
        </div>
        <div className="col-4 d-inline-flex justify-content-center">
          <div>
            <h3>{this.props.name}</h3>
            <p>{`Answered Questions : ${this.props.answeredQuestions}`}</p>
            <p>{`Created Questions : ${this.props.createdQuestions}`}</p>
          </div>
        </div>
        <div className="col-2 d-inline-flex justify-content-center">
          <div>
            <h5>Score</h5>
            <h4>
              {this.props.answeredQuestions + this.props.createdQuestions}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderboardItem;
