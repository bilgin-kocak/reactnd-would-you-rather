export const SET_AUTHED_USER = 'SET_AUTHED_USER';

function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleSetAuthedUser(id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id));
    // update authed User
    //   .then(() => {})
    //   .catch(() => {
    //     alert('An error occured in saving question.');
    //     dispatch(setAuthedUser(''));
    //   });
  };
}
