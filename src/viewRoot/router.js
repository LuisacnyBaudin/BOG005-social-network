import { Homepage } from '../views/homePage.js';
import "../lib/firebaseImp.js"
import {viewRegister} from '../views/registerNew.js'
import { viewSingIn } from '../views/singIn.js';
import { viewHomeWall } from '../views/viewWall.js';
const rootMain = document.getElementById('root');

const routes = {
  '/': Homepage,
  '/register': viewRegister,

};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootMain.firstChild) {
    rootMain.removeChild(rootMain.firstChild);
  }

  rootMain.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootMain.firstChild) {
    rootMain.removeChild(rootMain.firstChild);
  }
  rootMain.appendChild(routes[window.location.pathname]());
};

rootMain.appendChild(component());
//Mostrar nuestro HTML "Home"
//Mostrar la pag de RegisterNumber
//Mostrar la pag de Login. 
// const rootDiv= document.getElementById("root");
// const routes = {
//     '/':Homepage,
//     '/viewRegister':viewRegister,
//     '/SingIn':viewSingIn,
//     '/Walls':viewHomeWall,
//   };

//rootDiv.append(viewNew());
// rootDiv.innerHTML=routes[window.location.pathname];
//console.log(window.location.pathname);

// export const onNavigate= (pathname)=>{
//     console.log(pathname)
//     window.history.pushState(
//         {}, 
//         pathname, 
//         window.location.origin + pathname
//     ) 
//     rootDiv.append (routes[pathname]());
// } 
// window.onpopstate = () => {
//     rootDiv.append(routes[window.location.pathname]);
//   }
// window.addEventListener('hashchange', () => {
//     rootDiv.innerHTML = ''

//     if(window.location.hash === "#registerEmail"){
//         rootDiv.append(viewRegister());
//     } else if(window.location.hash === "#Login"){        
//         rootDiv.append(viewSingIn());
//     } else if (window.location.hash ==="#viewHome"){
//      rootDiv.append(viewHomepage());
//     }
// });