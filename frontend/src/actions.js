import { serverGET, serverPOST } from './serverAPI';


// NON_THUNK

export const set_login = (new_is_logged_in) => ({
    type: 'set_login',
    payload: new_is_logged_in
});

export const set_validation = (new_is_validated) => ({
    type: 'set_validation',
    payload: new_is_validated
});

export const set_user_name = (new_user_name) => ({
    type: 'set_user_name',
    payload: new_user_name
});

export const set_loading = (new_is_loading) => ({
    type: 'set_loading',
    payload: new_is_loading
});


// THUNK

export const try_login = (email, password) => {
    return async (dispatch, getState ) => {
        console.log("try login");
        set_loading(true);
        // const response = await serverGET("login", email, password);
        // if (response !== "ERR") {
        //     dispatch(set_user_name(response.user_name));
        //     dispatch(set_validation(response.is_validated));
        //     dispatch(set_login(true));
        //     dispatch(set_loading(false));
        // }
        const response = { user_name: "Test User", is_validated: false }
        dispatch(set_user_name(response.user_name));
        dispatch(set_validation(response.is_validated));
        dispatch(set_login(true));
        dispatch(set_loading(false));
    }
}

export const try_validate = (first_name, last_name, lot_number) => {
    return async (dispatch, getState ) => {
        console.log("try login, first_name: ", first_name);
        set_loading(true);



        // const response = await serverGET("login", email, password);
        // if (response !== "ERR") {
        //     dispatch(set_user_name(response.user_name));
        //     dispatch(set_validation(response.is_validated));
        //     dispatch(set_login(true));
        //     dispatch(set_loading(false));
        // }
        const response = { user_name: "Test User", is_validated: true }
        dispatch(set_user_name(response.user_name));
        dispatch(set_validation(response.is_validated));
        dispatch(set_loading(false));
    }
}