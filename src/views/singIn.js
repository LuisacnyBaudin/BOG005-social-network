import {loginUserEvent, loginGoogleEvent} from '../lib/firebase-root.js';
import { auth, provider } from '../lib/firebaseAuth.js';

export const singinUser= (section) => {
  const usuarioSignIn = section.querySelector('#userName').value;
  const passwordSignIn = section.querySelector('#password').value;
    loginUserEvent(auth, usuarioSignIn, passwordSignIn);
};
export const logoGoogleClick = () => {
  loginGoogleEvent(auth, provider);
};

export default () => {
    const viewSingIn = `
    <header id="header">
    <button id="backHome"></button>
    <h1 class="titleSingIn">Sing In</h1>
    <button id="profileSingIn"></button>
    <button id=TitleSingIn>FoodLab</button>
    </header>
    <section id="pagSingIn">
    <button id="buttonGoogle" class="buttonGoogle"><a href="#" class="fa fa-google"> Login with Google </a>
    <img src="./imagenes/logo google.png" class="logo-google"></button>
    <h3>or</h3>
    <label for="text">  Username or E-mail </label>
    <input type="text" id="userName" name="userName">
    <label for="text"> Password </label>
    <input type="password" id="password" name="password">
    <button id="passwordRec" class="passwordRec"><a href="#">Forgot password?</a></button>
    <button type="submit" id="Login" class"Login">Login</button>
    <div id="errorMessage"></div>
    <p>¿Don't have an account?</p>
    <button type="button" id="SignUp" class="SingUp"><a href="#">Sign up</a></button>
    </section>
    `;
    
    const pagLogin = document.createElement('section');
    pagLogin.innerHTML = viewSingIn;
    //Cambio de botones. 

    const buttonRegister= pagLogin.querySelector('#SignUp');
    buttonRegister.addEventListener('click', () => {
    window.location.hash = "#/register"; 
    });
    const buttonBack= pagLogin.querySelector('#backHome');
    buttonBack.addEventListener('click', () => {
    window.location.hash = "#/"; 
    });

  const buttonSingin = pagLogin.querySelector('#Login');
  buttonSingin.addEventListener('click', () => singinUser(pagLogin));

   const buttonGoogle= pagLogin.querySelector('#buttonGoogle');
   buttonGoogle.addEventListener('click', () => logoGoogleClick(pagLogin));
  return pagLogin;
}