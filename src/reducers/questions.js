import { ADD_QUESTION, SAVE_ANSWER } from '../actions/questions';
import { RECEIVE_DATA } from '../actions/shared';

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.formattedQuestion.id]: action.formattedQuestion,
      };
    case RECEIVE_DATA:
      return action.questions;
    case SAVE_ANSWER:
      state[action.qid][action.answer].votes = state[action.qid][
        action.answer
      ].votes.concat([action.authedUser]);
      return state;
    default:
      return state;
  }
}
