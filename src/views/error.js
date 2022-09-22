export default () => {
  const viewNull = `
      <h2 id="pageNot">¡Page not found!</h2>
      <p id="notFound">This url is not found</p>
    
      `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewNull;

  return divElem;
};