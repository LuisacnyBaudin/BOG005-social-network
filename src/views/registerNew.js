import { createUserAccount } from '../lib/firebaseAuth.js';
import { loginUserEvent } from '../lib/firebase-root.js';


export default () => {
  const newRegister = `
  <header id="header">
  <button id="backHome"> </button>
  <h1 id="title">Register</h1>
   </header>
    <section id="pagRegister">
    <label for="text">  Full Name </label>
    <input type="text" id="fullName" name="fullName">
    <label for="text">  E-mail </label>
    <input type="text" id="Email" name="Email">
    <label for="text">  Create your password    </label>
    <input type="password" id="passwordCreate" name="passwordCreate">
    <div id="errorMessage"></div>
    <button id="buttonNext" class="buttonNext">Next</button>
    </section>
    `;

  const registerSingIn = document.createElement('section');
  registerSingIn.innerHTML = newRegister;

  const buttonNext = registerSingIn.querySelector('#buttonNext');
  buttonNext.addEventListener('click', () => {
    const userNameSignUp = registerSingIn.querySelector('#fullName').value;
    const usuarioSignUp = registerSingIn.querySelector('#Email').value;
    const passwordSignUp = registerSingIn.querySelector('#passwordCreate').value;

    createUserAccount(usuarioSignUp, passwordSignUp)
      .then(userCredential => userCredential.user
        .updateProfile({
          displayName: userNameSignUp,
          photoURL: 'imagenes/user.png',
        }))
      .then(() => {
        loginUserEvent(usuarioSignUp, passwordSignUp);
        return 6;//(revisar*)
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const errorContainer = registerSingIn.querySelector('#errorMessage');
        const templateError = `<div class="error"><p> ${error.message}</p></div>`;
        errorContainer.innerHTML = templateError;
      });
  });
  return registerSingIn;
};

  
