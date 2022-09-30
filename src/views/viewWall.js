import { getAuth, serverTimestamp, onSnapshot } from '../lib/firebase-funtion.js';
import { savePost, onSnapshotFunction, showsPost } from '../lib/firebase-root.js';

const auth = getAuth();

const callOnSnapShot = () => {
    const queryCollection = onSnapshotFunction();
    onSnapshot(queryCollection, (querySnapshot) => {
        const collectionPost = [];
        querySnapshot.forEach((doc) => {
            collectionPost.push(doc.data());
            paintPostview();
        });
    });
};
setTimeout(() => { callOnSnapShot(); }, 1000);

const clickPost = (section) => {
    const userName = auth.currentUser;
    const actualDate = serverTimestamp();
    const postValue = section.querySelector('#postUser').value;
    savePost(postValue, userName.email, actualDate).then(() => {
        paintPostview();
        const cleanPost = document.querySelector('#postUser');
        cleanPost.value = '';
    });
};
export const paintPostview = () => {
    showsPost().then((res) => {
        viewPost.innerHTML = '';
        res.forEach((e) => {            
            viewPost.appendChild(postView(e.id, e.data()));
            containerPost.appendChild(viewPost);
        });
    });
};
const viewPost = document.createElement('section');
viewPost.setAttribute('class', 'gridSectionviewPost');
const containerPost = document.createElement('section');
containerPost.setAttribute('class', 'gridSectioncontainerPost');


export default () => {
    const viewWall = `
    <header id="headerWall">
    <button id="profile"></button>
    <button id="singOut"></button>
    <input type="text" placeholder="Search for creators and projects" id="searchtwo">
    <button type="submit" id="search"></button>
    </header>
    <section id="pagWall">
    <textarea name='post' id='postUser' rows= 4 placeholder='What are you thinking?' autofocus></textarea>
    <button type="submit" id="sendPost"></button>
    <div id="errorMessagePost"></div>
    </section>
    `;

    const pagWall = document.createElement('section');
    pagWall.innerHTML = viewWall;
    const sendPost = pagWall.querySelector('#sendPost');

    // Dandole vida al boton Sendpost
    sendPost.addEventListener('click', () => {
        const validationInputPost = pagWall.querySelector('#postUser').value;
        const errorMessagePost = pagWall.querySelector('#errorMessagePost');
        if (validationInputPost !== '') {
            clickPost(pagWall);
        } else {
            errorMessagePost.innerHTML = 'Please enter a value in the field';
        }
    });
    //Para cerrar sesión 
    const buttonSingOut = pagWall.querySelector('#singOut');
    buttonSingOut.addEventListener('click', () => {
        window.location.hash = "#/";
    });
    return pagWall;
};
//Vista de nuestro segundo Post. 


export const postView = (idPost, post) => {
    const viewPostUser = document.createElement('section');
    const postPublic = `

    <section class='containerWallPost'>
    <section class='containerPost' id='postView'>
    <section class='userName'>${post.userName}</section>
    <textarea name='post' id='textAreaPost' readonly="readonly">${post.post}</textarea>
     <section class='modalContainer' id='containerModal'>
     <section class='modal' id='modal'>
     <textarea name='post' id='postUser' rows= 4 placeholder='What are you thinking?' autofocus>${post.post}</textarea>
     <button class='btnEditPost' id='publicBtnEditPost'>Editar</button>
     </section>
     </section>
      <section class='containerIconsPost'>
      <button type="submit" id="heartImg"></button>
      <button type="submit" id="trashImg"></button>
      <button type="submit" id="editImg"></button>
     
      </section>
      </section>
         `;
    viewPostUser.innerHTML = postPublic;
    console.log('ver: ', viewPostUser);
    return viewPostUser
};
window.onload = paintPostview;
