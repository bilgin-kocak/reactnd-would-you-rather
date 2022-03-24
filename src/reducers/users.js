import { ADD_QUESTION_USER } from '../actions/users';
import { RECEIVE_DATA } from '../actions/shared';
import { SAVE_ANSWER_USER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.users;
    case SAVE_ANSWER_USER:
      // state[action.autedUser].answers[action.qid] = action.answer;
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.id]),
        },
      };
    default:
      return state;
  }
}
