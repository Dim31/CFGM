import { Action, action, Thunk, thunk } from 'easy-peasy';
import firebase from '../../Firebase/firebase';
import services from '../../Services/AuthService'

export default class AuthModel {
     userModel = {
        user: null,

        isSignedIn: false,
    
        setUser: action((state, payload) => {
            return ({user: {...payload}, isSignedIn: payload !== null})
        }),
    
        listenUser: thunk(action => {
            return firebase.auth().onAuthStateChanged((_user) => {
                action.setUser(_user)
            })
        }),
    
        registerUser: thunk((actions, payload) => {
            return services.
        }),
    
        signInUser: thunk((actions, payload) => {
            return services.authentification.loginUser(payload.email, payload.password);
        }),
    
        signOutUser : thunk(() => {
            return services.authentification.logoutUser();
        }),
    }
    
}
export default userModel
