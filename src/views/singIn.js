import {loginUserEvent, loginGoogleEvent} from './firebase-root.js';

export default () => {
    const viewSingIn = `
    <header id="header">
    <button id="backHome"></button>
    <h1>Sing In</h1>
    </header>
    <section id="pagSingIn">
    <button id="buttonGoogle" class="buttonGoogle"><a href="#" class="fa fa-google"> Login with Google </a>
    <img src="./imagenes/logo google.png" class="logo-google"></button>
    <h3>ó</h3>
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
  const buttonSignIn = pagLogin.querySelector('#Login');
  const buttonGoogle = pagLogin.querySelector('#buttonGoogle');
  const errorContainer = pagLogin.querySelector('#errorMessage');

  buttonSignIn.addEventListener('click', () => {
    const usuarioSignIn = pagLogin.querySelector('#usuarioSignIn').value;
    const passwordSignIn = pagLogin.querySelector('#contraseñaSignIn').value;
    loginUserEvent(usuarioSignIn, passwordSignIn, errorContainer);
  });
  buttonGoogle.addEventListener('click', loginGoogleEvent);
    return pagLogin;
}