export default () => {
    const viewNull = `
      <h2 class="text-center">¡Page not found!</h2>
      <p>This url is not found</p>`;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewNull;
  
    return divElem;
  };