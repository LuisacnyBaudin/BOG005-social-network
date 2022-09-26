import { logOut,signInGoogle,loginUser,createUserAccount, provider} from './firebaseAuth.js';
  import { changeView } from '../viewRoot/router.js';

  export const userNew = (usuarioSignUp, passwordSignUp) => {
    createUserAccount(usuarioSignUp, passwordSignUp)
      .then((userCredential) => {
       changeView('#/wall'); 
      }).catch((error) => {
        const templateError = `<div class="error"><p>${error.message}</p></div>`;
        errorContainer.innerHTML = templateError;
      });
    };
 
    export const loginUserEvent = (auth, usuarioSignIn, passwordSignIn) => {
    loginUser(auth, usuarioSignIn, passwordSignIn)
      .then((userCredential) => {
       const user = userCredential.user;
       changeView('#/wall');
      })
      .catch((error) => {
        const templateError = `<div class="error"><p>${error.message}</p></div>`;
        errorContainer.innerHTML = templateError;
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
      // ...
    .catch((error) => {
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

    export const logOutEvent = (auth) => {
    logOut(auth).then(() => {
      changeView('#/');

    });
  };