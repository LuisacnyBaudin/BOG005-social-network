//Mostrar nuestro HTML "Home"
//Mostrar la pag de RegisterNumber
//Mostrar la pag de Login. 

const rootDiv= document.getElementById("root");

window.addEventListener('hashchange',() => {
    if(window.location.hash === "#registerPhone"){
    console.log("view page of register phone");
    rootDiv.innerHTML= "<h1> Register of phone number </h1>" ;

    }if(window.location.hash === "#Login"){
        console.log("view Login");
        rootDiv.innerHTML= "<h1> Sing In </h1>";
    }
});