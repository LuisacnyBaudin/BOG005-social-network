import { getAuth, serverTimestamp, onSnapshot } from '../lib/firebase-funtion.js';
import { savePost, onSnapshotFunction, showsPost, deletePost, editPost } from '../lib/firebase-root.js';

const auth = getAuth();
const callOnSnapShot = () => {
    // const collectionPost = [];
    const queryCollection = onSnapshotFunction();
    onSnapshot(queryCollection, (querySnapshot) => {
    
        const viewPost = document.createElement('section');
        querySnapshot.forEach((doc) => {

            viewPost.setAttribute('class', 'gridSectionviewPost');

            console.log('doc: ', doc);
            
            // collectionPost.push(doc.data());
            viewPost.appendChild(postView(doc.id, doc.data()));
            // paintPostview();
        });

        const containerPost = document.createElement('section');
        containerPost.setAttribute('class', 'gridSectioncontainerPost');
        containerPost.appendChild(viewPost);
        document.getElementById("postList").append(containerPost);

    });
};
// const clickPost = (section) => {
//     const userName = auth.currentUser;
//     const actualDate = serverTimestamp();
//     const postValue = section.querySelector('#postUser').value;
//     savePost(postValue, userName.email, actualDate).then(() => {
//         // paintPostview();
//         const cleanPost = document.querySelector('#postUser');
//         cleanPost.value = '';
//     });
// };


// export const paintPostview = () => {
//     showsPost().then((res) => {
//         const viewPost = document.createElement('section');
//         viewPost.setAttribute('class', 'gridSectionviewPost');
//         res.forEach((e) => {
//             console.log('ver e: ', e);
//             viewPost.appendChild(postView(e.id, e.data()));
//         });
//         const containerPost = document.createElement('section');
//         containerPost.setAttribute('class', 'gridSectioncontainerPost');
//         containerPost.appendChild(viewPost);
//         document.getElementById("postList").append(containerPost);
//     });
// };

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
    pagWall.id = "postList"
    pagWall.innerHTML = viewWall;
    const sendPost = pagWall.querySelector('#sendPost');

    // Dandole vida al boton Sendpost
    sendPost.addEventListener('click', () => {
        console.log('click botón');
        const validationInputPost = pagWall.querySelector('#postUser').value;
        const errorMessagePost = pagWall.querySelector('#errorMessagePost');
        if (validationInputPost !== '') {
            // clickPost(pagWall);
            const userName = auth.currentUser;
            const actualDate = serverTimestamp();
            // const postValue = pagWall.querySelector('#postUser').value;
            pagWall.querySelector('.gridSectioncontainerPost').innerHTML=''
            savePost(validationInputPost, userName.email, actualDate).then(() => {
                // paintPostview();
                const cleanPost = document.querySelector('#postUser');
                cleanPost.value = '';
            });
        } else {
            errorMessagePost.innerHTML = 'Please enter a value in the field';
        }
    });
    //Para cerrar sesión 
    const buttonSingOut = pagWall.querySelector('#singOut');
    buttonSingOut.addEventListener('click', () => {
        window.location.hash = "#/";
    });
    setTimeout(() => { callOnSnapShot(); }, 1000);
    return pagWall;
};
//Vista de nuestro segundo Post. 


export const postView = (idPost, post) => {
    const viewPostUser = document.createElement('section');
    const postPublic = `

   
    <section class='containerPost' id='postView'>
    <section class='userName'>${post.userName}</section>
     <section class='modalContainer' id='containerModal'>
     <section class='modal' id='modal'>
     <textarea name='post' id='postUser' rows=5 readonly="readonly" autofocus>${post.post}</textarea>
     </section>
     </section>
      <section class='containerIconsPost'>
      <button class='btnPublicpost hide' id='btnPublicpost'>Public</button>
      <button class='btnEditPost' id='publicBtnEditPost'></button>
      <button type="submit" id="heartImg"></button>
      <button type="submit" id="trashImg"></button>
      </section>
      
         `;
    viewPostUser.innerHTML = postPublic;
    // console.log("ver: ", viewPostUser)
    const deleteFunction = (id, posts) => deletePost(id, posts);

    const buttonDelete = viewPostUser.querySelector('#trashImg');
    buttonDelete.addEventListener('click', () => {
        if (window.confirm('¿Are you sure you want to delete the comment??')) {
            deleteFunction(idPost, post);
        }
    });
    const editFunction = (id, posts) => editPost(id, posts);
     

    const buttonEdit = viewPostUser.querySelector('#publicBtnEditPost');
    const buttonPublic= viewPostUser.querySelector("#btnPublicpost");
    buttonEdit.addEventListener('click', () => {
        buttonEdit.classList.add('hide');
        buttonPublic.classList.remove('hide');
    });
    buttonPublic.addEventListener('click', () => {
        buttonEdit.classList.remove('hide');
        buttonPublic.classList.add('hide');
    });
    

    return viewPostUser;
}


