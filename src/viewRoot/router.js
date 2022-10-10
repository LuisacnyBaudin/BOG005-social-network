import { components } from "../views/components.js";

const changeView = (route) => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (route) {
    // case '': {
    //   return root.appendChild(components.homePage());
    // }
    case '#/': {
      return root.appendChild(components.homePage());
    }
    case '#/register': {
      return root.appendChild(components.registerNew());
    }
    case '#/singIn': {
      return root.appendChild(components.singIn());
    }
    case '#/wall': {
      return root.appendChild(components.viewWall());
    }
    default:
      return root.appendChild(components.viewNull());
  }
};
export { changeView };
