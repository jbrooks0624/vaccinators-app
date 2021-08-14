import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { try_login } from '../actions';
const LoginScreen = (props) => {

    const dispatch = useDispatch();

    const user_state = useSelector(state => state);
    const [text, onChangeText] = useState("");
 
    return (
        <div onClick={() => dispatch(try_login("aa", "bb"))}>
            login
        </div>
    );
}

export default LoginScreen;

//dispatch(try_login("aa", "bb"))