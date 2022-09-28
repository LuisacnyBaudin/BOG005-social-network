import {loginGoogleEvent} from '../lib/firebase-root.js';
import { auth, provider } from '../lib/firebaseAuth.js';

export const logoGoogleClick = () => {
  loginGoogleEvent(auth, provider);
};

export default () => {
  const homePage = `
     <main id="homepage">
      <section id="containerLogo">
        <img src="./Imagenes/logoquimicomanz-removebg-preview1.png" class="logo-home">
        <h1>¡Welcome to FoodLab!</h1>
        <p> Share your favorite recipes with the community and your friends</p>
      </section>
        <aside>
        <h2> Join the recipe lab </h2>
        <button id="buttonGoogle" class="buttonGoogle"><a href="#/"> Sing up with Google </a>
        <img src="./imagenes/logo google.png" class="logo-google"></button>
        <h3>ó</h3>
        <button id="buttonEmail" class="buttonEmail">Sing up with Email </button>
        <h4>Already registered?</h4>
        <button id="buttonSingin" class="buttonSingin"> Sing in </button>
        </aside>
    </main>
    `;
    
     
    const viewInit = document.createElement('main');
    viewInit.innerHTML = homePage;

   //Cambios de rutas
    const buttonEmail= viewInit.querySelector('#buttonEmail');
    buttonEmail.addEventListener('click', () => {
    window.location.hash="#/register"; 
    });
    const signIn = viewInit.querySelector('#buttonSingin');
    signIn.addEventListener('click', () => {
    window.location.hash = "#/singIn"; 
    });
    const buttonGoogle= viewInit.querySelector('#buttonGoogle');
    buttonGoogle.addEventListener('click',() => logoGoogleClick(viewInit));
    return viewInit;
  };