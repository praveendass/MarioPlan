import { getFirestore } from 'redux-firestore'

export const addProjectAction = (project) => {
    return (dispatch, getState) => {
        //perform asynchronous tasks
        const state = getState();
        const profile = state.firebase.profile;
        const authorId = state.firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : profile.firstName,
            authorLastName : profile.lastName,
            authorId : authorId,
            createdAt : new Date()
        }).then(() => {
            //alert('then')
            dispatch({ type : 'ADD_PROJECT', project });
        }).catch((err) => {
            //alert('catch')
            dispatch({ type : 'ADD_PROJECT_ERROR',err});
        })
        
    }
}