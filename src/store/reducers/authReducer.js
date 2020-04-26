

const initState = {
    authError : null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case ('LOGIN_SUCCESS') :
            //console.log('LOGIN_SUCCESS');
            return {
                ...state,
                authError : null
            }
        case ('LOGIN_FAILED') :
            //console.log('LOGIN_FAILED',action.error);
            return {
                ...state,
                authError : action.error.toString()
            }
        case ('LOGOUT_SUCCESS') :
            return state;
        case ('SIGNUP_SUCCESS') :
            return {
                ...state,
                authError: null
            }
        case ('SIGNUP_FAILED') :
            return {
                ...state,
                authError: action.error.toString()
            }
        case ('CLEAR_AUTH_ERROR') :
            return {
                ...state,
                authError: null
            }
        default :
            return state;
    }
 }

 export default authReducer;