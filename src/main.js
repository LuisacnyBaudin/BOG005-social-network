// Este es el punto de entrada de tu aplicacion

import { changeView } from '../viewRoot/router.js'

// Funcionalidad para las vistas

const init = () => {
  if (!window.location.hash) {
    window.location.hash = '#/';
  }
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};



window.addEventListener('load', init); // llama a init una vez que la pagina este cargada