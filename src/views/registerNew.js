import {userNew} from '../lib/firebase-root.js';

export const clickRegister = (section) => {
  const errorMessageInput = section.querySelector('#errorInput');
  const usuarioSignUp = section.querySelector('#Email').value;
  const passwordSignUp = section.querySelector('#passwordCreate').value;
  const successfulOk = section.querySelector('#successRegister');
  const voidInput = (usuarioSignUp.trim() === ''||passwordSignUp.trim() === '');
  // errorMessageInput.innerHTML = '';
  if (voidInput) {
    errorMessageInput.innerHTML = 'You must enter a value in the field';
  }
  userNew(usuarioSignUp, passwordSignUp);
  successfulOk.innerHTML = '¡The user has been created successfully!';
};

export default () => {
  const newRegister = `
  <header id="header">
  <button id="backHome"> </button>
  <h1 id="title">Register</h1>
  <button id="profileRegister"></button>
  <button id=titleRegister>FoodLab</button>
   </header>
    <section id="pagRegister">
    <label for="text">  E-mail </label>
    <input type="email" id="Email" name="Email">
    <label for="text">  Create your password    </label>
    <input type="password" id="passwordCreate" name="passwordCreate">
    <div id="errorMessage"></div>
    <div id="errorInput"></div>
    <h1 id='successRegister'></h1>
    <button id="buttonNext" class="buttonNext">Next</button>
    </section>
    `;

  const registerSingIn = document.createElement('section');
  registerSingIn.innerHTML = newRegister;

  const buttonBack= registerSingIn.querySelector('#backHome');
  buttonBack.addEventListener('click', () => {
  window.location.hash = "#/"; 
  });
  const buttonNext = registerSingIn.querySelector('#buttonNext');
  buttonNext.addEventListener('click', () => clickRegister(registerSingIn));
  return registerSingIn;
};

  
