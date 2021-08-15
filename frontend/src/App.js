import './App.css';
import React from 'react';
import UnValidated from './components/UnValidated';

import LoginScreen from './screens/loginScreen';
import ValidatedScreen from './screens/validatedScreen';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

function App() {

  const user_state = useSelector(state => state.User);
  const { is_logged_in, user_name, is_validated, is_loading } = user_state;
  console.log("logged in: ", is_logged_in);
  return (
    <Container maxWidth="sm">
      {is_loading ? 
        <div>loading</div> :
        !is_logged_in ? 
          <LoginScreen props={user_state} /> :
          is_validated ? 
            <ValidatedScreen props={user_state} /> :
            <UnValidated props={user_state} /> }
    </Container>
  );
}

export default App;
