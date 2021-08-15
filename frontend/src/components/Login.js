
import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import { try_login } from '../actions';
import { useDispatch } from 'react-redux';
const clientId =
  '727382359144-1mba419dparp4o21qab1qhsle2ouo799.apps.googleusercontent.com';

function Login() {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    const { email, familyName, givenName} = res.profileObj;
    dispatch(try_login(email, familyName+" "+givenName));
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;