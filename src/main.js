// Este es el punto de entrada de tu aplicacion
//import { firebaseInit } from './firebase/firebase-init.js';
import { changeView } from '../viewRoot/router.js'

// Funcionalidad para las vistas

const init = () => {
  // firebaseInit();
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

console.log(init)

window.addEventListener('load', init); // llama a init una vez que la pagina este cargada