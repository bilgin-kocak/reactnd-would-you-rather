import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { saveQuestionAnswerUser, addQuestionUser } from './users';

export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    formattedQuestion: question,
  };
}

function saveQuestionAnswer(answerInfo) {
  const { authedUser, qid, answer } = answerInfo;
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer, // { authedUser, qid, answer}
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    _saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion));
        dispatch(addQuestionUser(formattedQuestion));
      })
      .catch(() => {
        alert('An error occured in saving question.');
      });
  };
}

export function handleSaveQuestionAnswer(answerInfo) {
  return (dispatch) => {
    _saveQuestionAnswer(answerInfo)
      .then(() => {
        dispatch(saveQuestionAnswer(answerInfo));
        dispatch(saveQuestionAnswerUser(answerInfo));
      })
      .catch(() => {
        alert('An error occured in saving answer.');
      });
  };
}
