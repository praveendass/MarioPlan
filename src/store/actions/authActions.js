import { getFirebase } from "react-redux-firebase"
import { getFirestore } from "redux-firestore";


export const signInAction = (credentials) => {
    return (dispatch, getState) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=> {
            dispatch({ type : 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type : 'LOGIN_FAILED' , error})
        })
    }
}

export const signOutAction = () => {
    return (dispatch, getState) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'LOGOUT_SUCCESS'})
        })
    }
}

export const signUpAction = (newUser) => {
    return (dispatch, getState) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response)=>{
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0]+newUser.lastName[0]
            })
        }).then(()=>{
            console.log('SIGNUP_SUCCESS');
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((error)=>{
            console.log('SIGNUP_FAILED');
            dispatch({type: 'SIGNUP_FAILED', error})
        })
    }
}

export const clearAuthErrorAction = () => {
    return { type : 'CLEAR_AUTH_ERROR'}
}