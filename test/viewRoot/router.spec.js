
// importamos la funcion que vamos a testear
import {changeView} from '../../src/viewRoot/router.js'

jest.mock('../../src/lib/firebase-funtion.js');

describe('changeView', () => {
  it('changeView cambia de ruta', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultado = changeView('#/register');
   expect(resultado.querySelector('#title').innerHTML).toBe('Register')
  });
}); 

describe('changeView', () => {
  it('changeView cambia de ruta', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultado = changeView('#/singIn');
   expect(resultado.querySelector('.titleSingIn').innerHTML).toBe('Sing In')
  });
}); 
