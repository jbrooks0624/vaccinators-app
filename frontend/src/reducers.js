import { combineReducers } from 'redux';

const INITIAL_USER = {
    "is_logged_in": false,
    "user_name": "DEFAULT",
    "is_validated": false,
    "is_loading": false,
    "lot_number": "0123456789",

}

const reducerUser = (state = INITIAL_USER, action = {}) => {
    switch(action.type){
		
        case 'set_login':
            return { ...state, is_logged_in: action.payload }
        case 'set_validation':
            return { ...state, is_validated: action.payload }
        case 'set_loading':
            return { ...state, is_loading: action.payload }
        case 'set_user_name':
            return { ...state, user_name: action.payload }
	 	default: return state;
	}
};

export default combineReducers({
    User: reducerUser,

  }); 