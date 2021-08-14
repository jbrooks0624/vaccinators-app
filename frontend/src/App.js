import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/loginScreen';
import UnvalidatedScreen from './screens/unvalidatedScreen';
import ValidatedScreen from './screens/validatedScreen';

import { useDispatch, useSelector } from 'react-redux';


function App() {

  const user_state = useSelector(state => state.User);
  const { is_logged_in, user_name, is_validated, is_loading } = user_state;
  console.log("logged in: ", is_logged_in);
  return (
    <div className="App">
      {is_loading ? 
        <div>loading</div> :
        !is_logged_in ? 
          <LoginScreen/> :
          is_validated ? 
            <ValidatedScreen/> :
            <UnvalidatedScreen/> }
    </div>
  );
}

export default App;
