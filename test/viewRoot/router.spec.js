
// importamos la funcion que vamos a testear
import {changeView} from '../../src/viewRoot/router.js'

describe('changeView', () => {
  it('changeView cambia de ruta', () => {
   document.body.innerHTML = '<div id="root"></div>'
   const resultado = changeView('#/register');
   expect(resultado.querySelector('#title').innerHTML).toBe('Register')
  });
}); 
