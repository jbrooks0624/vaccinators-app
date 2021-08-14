import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { try_login } from '../actions';
import './loginScreen.css'
import Login from '../components/Login'
const LoginScreen = (props) => {

    const dispatch = useDispatch();

    const user_state = useSelector(state => state);
    const [text, onChangeText] = useState("");
 
    return (
        <div className="box">
            <div className="box2">
                <h3>Login to Google to continue</h3>
                <Login />
                <br></br>
                <div onClick={() => dispatch(try_login("aa", "bb"))}>
                login
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;

//dispatch(try_login("aa", "bb"))