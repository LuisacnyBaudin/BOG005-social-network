// import { SingIn } from '../lib/firebaseImp.js'

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
    <button id="Login" class"Login">Login</button>
    <p>¿Don't have an account?</p>
    <button id="SignUp" class="SingUp"><a href="#">Sign up</a></button>
    </section>
    `;

    const pagLogin = document.createElement('section');
    pagLogin.innerHTML = viewSingIn;

    /* pagLogin.querySelector("#buttonGoogle").addEventListener("click", SingIn); */
    return pagLogin;
}