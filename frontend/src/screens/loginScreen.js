import React, { useState } from 'react';

import { try_login } from '../actions';
import './loginScreen.css'
import Login from '../components/Login'
const LoginScreen = (props) => {

 
    return (
        <div className="box">
            <div className="box2">
                <h3>Login to Google to continue</h3>
                <Login />
                <br></br>
            </div>
        </div>
    );
}

export default LoginScreen;

//dispatch(try_login("aa", "bb"))