

export const viewRegister = () =>{
    const newRegister = `
  <header id="header">
  <button id="backHome"> </button>
  <h1>Register</h1>
   </header>
    <section id="pagRegister">
    <label for="text">  Full Name </label>
    <input type="text" id="fullName" name="fullName">
    <label for="text">  E-mail </label>
    <input type="text" id="Email" name="Email">
    <label for="text">  Username </label>
    <input type="text" id="userName" name="userName">
    <label for="text">  Create your password    </label>
    <input type="password" id="passwordCreate" name="passwordCreate">
    <button id="buttonNext" class="buttonNext">Next</button>
    </section>
    `;

    const registerSingIn = document.createElement('section');
    registerSingIn.innerHTML = newRegister;
    return registerSingIn;
}