import { SAVE_ANSWER } from './questions';

export const ADD_USER = 'ADD_USER';
export const SAVE_ANSWER_USER = 'SAVE_ANSWER_USER';
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER';

function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addQuestionUser(formattedQuestion) {
  return {
    type: ADD_QUESTION_USER,
    ...formattedQuestion,
  };
}

export function saveQuestionAnswerUser(answerInfo) {
  const { authedUser, qid, answer } = answerInfo;
  return {
    type: SAVE_ANSWER_USER,
    authedUser,
    qid,
    answer, // { authedUser, qid, answer}
  };
}
