import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import {firebase} from './configs/fbConfig'
import rrfConfig from './configs/rrfConfig';
import 'firebase/firestore' // make sure you add this for firestore
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';






//const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, firestore})));


 const store = createStore(rootReducer, 
     compose(
         applyMiddleware(thunk),
         reduxFirestore(firebase)
     )
 );



const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) { 
        return (<div className="center">Please Wait...</div>);
    } else {
        return children;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps} >
            <AuthIsLoaded>
                <App /> 
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, 
document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
