import { combineReducers } from 'redux';

const INITIAL_USER = {
    "is_logged_in": false,
    "user_name": "DEFAULT",
    "is_validated": false,
    "is_loading": false,

}

const reducerUser = (state = INITIAL_USER, action = {}) => {
    switch(action.type){
		
        case 'set_login':
            return { ...state, is_logged_in: action.payload }
        
        case 'set_validation':
            return { ...state, is_validated: action.payload }
            
	 	default: return state;
	}
};

export default combineReducers({
    User: reducerUser,

  }); 