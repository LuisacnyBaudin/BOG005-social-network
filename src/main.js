import {viewNew} from './views/viewNew.js'
import "./lib/firebaseImp.js"
import {viewRegister} from './views/registerNew.js'
import { viewSingIn } from './views/singIn.js';
//Mostrar nuestro HTML "Home"
//Mostrar la pag de RegisterNumber
//Mostrar la pag de Login. 

const rootDiv= document.getElementById("root");
rootDiv.append(viewNew());

window.addEventListener('hashchange', () => {
    rootDiv.innerHTML = ''

    if(window.location.hash === "#registerEmail"){
        rootDiv.append(viewRegister());
    } else if(window.location.hash === "#Login"){        
        rootDiv.append(viewSingIn());
    }
});
