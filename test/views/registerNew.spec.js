import { clickRegister } from "../../src/views/registerNew.js";
jest.mock('../../src/lib/firebase-funtion.js');

 const pagRegisterTest = () => {
    const newRegisterTest = `
      <label for="text">  E-mail </label>
      <input type="email" id="Email" name="Email">
      <label for="text">  Create your password </label>
      <input type="password" id="passwordCreate" name="passwordCreate">
      <div id="errorMessage"></div>
      <div id="errorInput"></div>
      <h1 id='successRegister'></h1>
      <button id="buttonNext" class="buttonNext">Next</button>
      </section>
      `;

      const pagTest = document.createElement('section');
      pagTest.innerHTML = newRegisterTest;
      return pagTest;
    };

    describe('clickRegister', () => {
        it('deberia mostrar mensaje de error campos vacios', () => {
          const sectionContainertest = pagRegisterTest();
          const userNameTest = sectionContainertest.querySelector('#Email');
          userNameTest.value = '';
          const buttonNextTest = sectionContainertest.querySelector('#buttonNext');
          buttonNextTest.addEventListener('click', () => clickRegister(sectionContainertest));
          buttonNextTest.dispatchEvent(new Event('click'));
          const messageInputTest = sectionContainertest.querySelector('#errorInput');
          expect(messageInputTest.textContent).toBe('You must enter a value in the field');
        });
    }); 

    it('deberia llamar la funcion createUser', () => {
        const testCreateUser = pagRegisterTest();
        const userEmailtest = testCreateUser.querySelector('#Email');
        userEmailtest.value = 'pruebatest@hotmail.com';
        const passwordUsertest = testCreateUser.querySelector('#passwordCreate');
        passwordUsertest.value = 'hola1234';
        const createUsertest = jest.fn();
        createUsertest(userEmailtest,passwordUsertest);
    
        const buttonCreate = testCreateUser.querySelector('#buttonNext');
        buttonCreate.addEventListener('click', () => clickRegister(testCreateUser));
        buttonCreate.dispatchEvent(new Event('click'));
        const successfulOkCreate = testCreateUser.querySelector('#successRegister');
        expect(successfulOkCreate.textContent).toBe('');
        expect(createUsertest).toHaveBeenCalled();
      });
