import { _getUsers, _getQuestions, _saveQuestion } from '../utils/_DATA';
import { handleSetAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_DATA = 'RECEIVE_DATA';

const AUTHEDUSER = 'johndoe';

function receiveData(users, questions) {
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading);
    _getUsers()
      .then((users) => {
        _getQuestions()
          .then((questions) => {
            dispatch(receiveData(users, questions));
            dispatch(handleSetAuthedUser(AUTHEDUSER));
            dispatch(hideLoading);
          })
          .catch(() => {
            alert('Error occured in data initialization');
          });
      })
      .catch(() => {
        alert('Error occured in data initialization');
      });
  };
}
