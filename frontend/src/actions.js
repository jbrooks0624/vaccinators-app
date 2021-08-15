
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

export const set_lot_number = (new_lot_number) => ({
    type: 'set_lot_number',
    payload: new_lot_number
});


// THUNK

const SERVER_URL = "http://127.0.0.1:5000/";

export const serverGET = async (type) => {
    let response = await fetch(SERVER_URL, {
        method: 'get',
        headers: { "type" : type },
    })
    if (response.ok) {
        response = response.json();
        return response;
    }
    else console.log("GET ERROR");
        return "ERR";
}

export const serverPOST = async (type) => {
    console.log("running post");

    let response = await fetch(SERVER_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Type: type,
        })
    })
    if (response.ok) {
        return response;
    }
    else console.log("POST ERROR");
        return "ERR";
}

export const try_login = (email, user_name) => {
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
        dispatch(set_user_name(user_name));
        dispatch(set_validation(false));
        dispatch(set_login(true));
        dispatch(set_loading(false));
    }
}

export const try_validate = (first_name, last_name, lot_number) => {
    return async (dispatch, getState ) => {
        console.log("try_validate()\nfirst:", first_name, "\nlast: ", last_name, "\nlot_num: ", lot_number);
        set_loading(true);

        // let response = await fetch(SERVER_URL+"validateLotNumber", {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        //     body: JSON.stringify({
        //         "first_name": first_name,
        //         "last_name": last_name,
        //         "lot_number": lot_number,
        //     })
        // })

        // if (response.ok) {
        //     console.log(response);
        //     // dispatch(set_user_name(response.user_name));
        //     // dispatch(set_validation(response.));
        //     // dispatch(set_lot_number(lot_number));
        //     // dispatch(set_loading(false));
        // }
        // else console.log("POST ERROR");
        //     return "ERR";
        
        dispatch(set_user_name(first_name+" "+last_name));
        dispatch(set_validation(true));
        dispatch(set_lot_number(lot_number));
        dispatch(set_loading(false));
        
    }
}