import {logOut, SingInGoogle, loginUser,} from './firebase-auth';
  
  export const logOutEvent = () => {
    logOut().then(() => {
      window.location.assign('#/');
      //console.log('Correcto');
    });
  };
  export const loginGoogleEvent = () => {
    SingInGoogle()
      .then(() => {
        window.location.hash = '#/wall';
      })
      .catch((error) => {
        console.log(error);
      });
  };
  export const loginUserEvent = (user, password, errorContainer) => {
    loginUser(user, password)
      .then(() => {
        window.location.assign('#/wall');
      })
      .catch((error) => {
        const templateError = `<div class="error"><p>${error.message}</p></div>`;
        errorContainer.innerHTML = templateError;
      });
  };