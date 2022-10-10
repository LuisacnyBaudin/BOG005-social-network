// importamos la funcion que vamos a testear
import {changeView} from '../../src/viewRoot/router.js'
jest.mock('../../src/lib/firebase-funtion.js');
//Spec de la ruta 
const registerNewTest = () => {
  const registerTest = '<p id="#title">Register</p>';
  const sectionRegisterTest = document.createElement('section');
  sectionRegisterTest.innerHTML = registerTest;
  return sectionRegisterTest;
};
const SingInTest = () => {
  const singinTest = '<p class=".titleSingIn">Sing In</p>';
  const sectionSignInTest = document.createElement('section');
  sectionSignInTest.innerHTML = singinTest; 
  return sectionSignInTest ;
};
const ViewWallTest = () => {
  const viewWallTest = '<p id="TitleWelcome">Welcome</p>';
  const sectionviewallTest = document.createElement('section');
  sectionviewallTest.innerHTML = viewWallTest;
  return sectionviewallTest;
};
const ViewNullTest = () => {
  const errorTest= '<p id="viewTest">Esto es un texto de prueba para notFound 404</p>';
  const sectionErrorTest = document.createElement('section');
  sectionErrorTest.innerHTML = errorTest;
  return sectionErrorTest;
};

// Componentes creados iguales que el component.js para el test
const componentsTest = {
  registerNew: registerNewTest,
  singIn: SingInTest,
  viewWall: ViewWallTest,
  viewNull: ViewNullTest,
};

describe('changeView', () => {
  it('changeView cambia de ruta a register', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultadoRegister = changeView('#/register', componentsTest);
   expect(resultadoRegister.querySelector('#title').innerHTML).toBe('Register')
  });
}); 

describe('changeView', () => {
  it('changeView cambia de ruta a SingIn', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultadoSingIn = changeView('#/singIn', componentsTest);
   expect(resultadoSingIn.querySelector('.titleSingIn').innerHTML).toBe('Sing In')
  });
}); 

describe('changeView', () => {
  it('changeView cambia de ruta a viewWall', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultadoWall = changeView('#/wall', componentsTest);
   expect(resultadoWall.querySelector('#TitleWelcome').innerHTML).toBe('Welcome')
  });
}); 

describe('changeView', () => {
  it('changeView cambia de ruta a error', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultadoNull = changeView('#/registerEmail', componentsTest);
   expect(resultadoNull.querySelector('#pageNot').innerHTML).toBe('¡Page not found!')
  });
}); 