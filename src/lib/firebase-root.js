import { app } from './firebaseConf.js';
import { GoogleAuthProvider } from './firebase-funtion.js';
import { logOut, provider, signInGoogle,loginUser,createUserAccount} from './firebaseAuth.js';
import { changeView } from '../viewRoot/router.js';

  export const userNew = (usuarioSignUp, passwordSignUp) => {
    createUserAccount(usuarioSignUp, passwordSignUp)
      .then((userCredential) => {
       changeView('#/wall'); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = document.querySelector('#errorMessage');
        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage.innerHTML = 'Registered email, please enter a new one';
            break;
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'Invalid email';
            break;
          case 'auth/weak-password':
            errorMessage.innerHTML = 'The password must contain at least 6 characters';
            break;
          default:
            break;
        }
      // ..
      });
    };
 
    export const loginUserEvent = (auth, usuarioSignIn, passwordSignIn) => {
    loginUser(auth, usuarioSignIn, passwordSignIn)
      .then((userCredential) => {
       const user = userCredential.user;
       changeView('#/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = document.querySelector('#errorMessage');
        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'Invalid email';
            break;
          case 'auth/user-not-found':
            errorMessage.innerHTML = 'The user is not registered';
            break;
          case 'auth/wrong-password':
            errorMessage.innerHTML = 'Incorrect password';
            break;
          default:
            break;
        }
      });
  };
    export const loginGoogleEvent = (auth, provider) => {
        signInGoogle(auth, provider)
      .then((result) => {
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     // The signed-in user info.
     const user = result.user;
     changeView('#/wall');

      })
      //...
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
  }  

    export const logOutEvent = (auth) => {
    logOut(auth)
    .then(() => {
      changeView('#/');

    });
  };