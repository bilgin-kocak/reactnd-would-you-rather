import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from 'react-redux';
import { handleSetAuthedUser } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom';

export function SignInDropDown(props) {
  const [authedUser, setAuthedUser] = React.useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAuthedUser(event.target.value);
  };

  const onClickAuthedUser = () => {
    props.dispatch(handleSetAuthedUser(authedUser));
    navigate('/');
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      {!props.users ? (
        <CircularProgress />
      ) : Object.keys(props.users).length === 0 ? (
        <CircularProgress />
      ) : (
        <FormControl fullWidth>
          <InputLabel>Users</InputLabel>
          <Select value={authedUser} label="User" onChange={handleChange}>
            {Object.keys(props.users).map((id) => (
              <MenuItem key={id} value={id}>
                {props.users[id].name}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" onClick={onClickAuthedUser}>
            Sign In
          </Button>
        </FormControl>
      )}
    </Box>
  );
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(SignInDropDown);
