import './App.css';
import React from 'react';
import UnValidated from './components/UnValidated';

import LoginScreen from './screens/loginScreen';
import ValidatedScreen from './screens/validatedScreen';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lightGrey'
    
  },
}));

function App() {
  const classes = useStyles();
  const user_state = useSelector(state => state.User);
  const { is_logged_in, user_name, is_validated, is_loading } = user_state;
  console.log("logged in: ", is_logged_in);
  return (
    <Container  className={classes.root}>
      <Header props={user_state} />
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
