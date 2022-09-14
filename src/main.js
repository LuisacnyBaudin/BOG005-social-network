import { registerTemplate } from './views/registerNew.js'
//Mostrar nuestro HTML "Home"
//Mostrar la pag de RegisterNumber
//Mostrar la pag de Login. 

const rootDiv= document.getElementById("root");
window.addEventListener('hashchange', () => {
    rootDiv.innerHTML = ''

    if(window.location.hash === "#registerPhone"){
        rootDiv.append(registerTemplate());
    } else if(window.location.hash === "#Login"){        
        rootDiv.innerHTML= "<h1> Sing In </h1>";
    }
});