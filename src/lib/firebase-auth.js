import {app} from './firebaseConf.js';
import { GoogleAuthProvider } from './firebase-funtion';

export const createUserAccount = (usuarioSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

let currentUser = {};

export const getAuth = () => {
  firebase.auth().onAuthStateChanged(userLog => {
    if (userLog) {
      currentUser = userLog;
    }
  });
};

export const getCurrentUser = () => currentUser;

export const loginUser = (usuarioSignIn, passwordSignIn) => firebase
  .auth()
  .signInWithEmailAndPassword(usuarioSignIn, passwordSignIn);

  //Auth with Google.
  export function SingInGoogle (){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
  }  
  export const logOut = () => firebase.auth().signOut();