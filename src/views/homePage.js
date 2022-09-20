import {SingIn} from '../lib/firebaseImp.js'


export const Homepage = () =>{
  const viewInit = document.createElement('main');
    viewInit.innerHTML = `
     <main id="homepage">
      <section id="containerLogo">
        <img src="./Imagenes/logoquimicomanz-removebg-preview1.png" class="logo-home">
        <h1>¡Welcome to FoodLab!</h1>
        <p> Share your favorite recipes with the community and your friends</p>
      </section>
        <aside>
        <h2> Join the recipe lab </h2>
        <button id="buttonGoogle" class="buttonGoogle"><a href="#" class="fa fa-google"> Sing up with Google </a>
        <img src="./imagenes/logo google.png" class="logo-google"></button>
        <h3>ó</h3>
        <button id="buttonNumber" class="buttonNumber"><a href="#registerEmail"> Sing up with Email </a></button>
        <h4>Already registered?</h4>
        <button id="buttonSingin" class="buttonSingin"> Sing in </button>
        </aside>
    </main>
    `;

    console.log(document.getElementById("buttonSingin"))
    document.querySelector("#buttonGoogle").addEventListener("click", SingIn);
    

    // const initialHome = document.createElement('main');
    // initialHome.innerHTML = viewInit;
    // console.log(document.querySelector("#buttonSingin"))
    // document.querySelector("#buttonSingin").addEventListener("click", ()=>onNavigate("/SingIn"));
    // return initialHome
    return viewInit;
}

