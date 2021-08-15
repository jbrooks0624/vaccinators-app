import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { set_login } from '../actions';
import { useDispatch } from 'react-redux';
const clientId =
  '727382359144-1mba419dparp4o21qab1qhsle2ouo799.apps.googleusercontent.com';

function Logout() {
  const dispatch = useDispatch();
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    dispatch(set_login(false));
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
