import { getAuth, serverTimestamp,onSnapshot} from '../lib/firebase-funtion.js';
import { savePost, onSnapshotFunction, deletePost, editPost, like,showsPost,logOutEvent} from '../lib/firebase-root.js';

const auth = getAuth();

export default () => {
    const viewWall = `
    <header id="headerWall">
    <button id="profile"></button>
    <button id=Title>FoodLab</button>
    <button id="TitleWelcome">Welcome</button>
    <button id="singOut"></button>
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

    const callOnSnapShot = () => {
        const queryCollection = onSnapshotFunction();
        onSnapshot(queryCollection, (querySnapshot) => {
            if (document.querySelector("#postList #gridSectioncontainerPost")) {
                document.querySelector("#postList #gridSectioncontainerPost").remove();
            }
            const viewPost = document.createElement('section');
            querySnapshot.forEach((doc) => {
                viewPost.setAttribute('class', 'gridSectionviewPost');
                viewPost.appendChild(postView(doc.id, doc.data()));
            });
            const containerPost = document.createElement('section');
            containerPost.setAttribute('class', 'gridSectioncontainerPost');
            containerPost.appendChild(viewPost);
            viewPost.id= "gridSectioncontainerPost";
            document.getElementById("postList").append(containerPost);

        });
    };

    // Dandole vida al boton Sendpost
    sendPost.addEventListener('click', () => {
        const validationInputPost = pagWall.querySelector('#postUser').value;
        const errorMessagePost = pagWall.querySelector('#errorMessagePost');
        if (validationInputPost === '') {
          errorMessagePost.innerHTML = 'Please enter a value in the field'; 
        } else{
        errorMessagePost.innerHTML = '';
        const userName = auth.currentUser;
        const actualDate = serverTimestamp();
        savePost(validationInputPost, userName.email, actualDate).then(() => {
            // paintPostview();
            const cleanPost = document.querySelector('#postUser', errorMessagePost);
            cleanPost.value = '';
        }); 
  }
}); 

 setTimeout(() => {callOnSnapShot(); }, 1000);

    //Para cerrar sesión 
    const buttonSingOut = pagWall.querySelector('#singOut');
    buttonSingOut.addEventListener('click',() => logOutEvent(auth));
    return pagWall;
}; 
//Vista de nuestro segundo Post. 
export const postView = (idPost, post) => {
    const viewPostUser = document.createElement('section');
    const postPublic = `
    <section class='containerPost' id='postView'>
    <header id="headerWall">
    <button id="profile"></button>
    <button id=Title>FoodLab</button>
    <button id="TitleWelcome"> Welcome</button>
    <button id="singOut"></button>
    </header>
    <section class='userName'>${post.userName}</section>
     <section class='modalContainer' id='containerModal'>
     <section class='modal' id='modal'>
     <textarea name='post' id='textAreaInitial' readonly="readonly">${post.post}</textarea>
     <textarea name='post' class='postUser hide' id='postUser' rows=5 autofocus>${post.post}</textarea>
     </section>
     </section>
      <button class='btnPublicpost hide' id='btnPublicpost'></button>
      <button class='btnEditPost' id='publicBtnEditPost'></button>
      <button type="submit" id="trashImg"></button>
      <button type="submit" class="${post.like.includes(auth.lastNotifiedUid) ? 'rojo':'blanco'}" id="heartImg"></button>
      <button type="submit" class="heartRed hide" id="heartRed"></button>
      <button class='icons' id='counter'>${post.like.length}</button>
    
      
         `;
    viewPostUser.innerHTML = postPublic;
    const deleteFunction = (id, post) => deletePost(id, post);

    const buttonDelete = viewPostUser.querySelector('#trashImg');
    buttonDelete.addEventListener('click', () => {
        if (window.confirm('¿Are you sure you want to delete the comment??')) {
            deleteFunction(idPost, post);
        }
    });
    const editFunction = (id, post) => editPost(id, post);
    const buttonEdit = viewPostUser.querySelector('#publicBtnEditPost');
    const buttonPublic= viewPostUser.querySelector("#btnPublicpost");
    const postNew = viewPostUser.querySelector("#postUser")
    const postInitial= viewPostUser.querySelector("#textAreaInitial")
    buttonEdit.addEventListener('click', () => {
        postInitial.classList.add('hide');
        postNew.classList.remove('hide');
      });
    buttonEdit.addEventListener('click', () => {
        buttonEdit.classList.add('hide');
        buttonPublic.classList.remove('hide');
    });
    buttonPublic.addEventListener('click', () => {
        buttonEdit.classList.remove('hide');
        buttonPublic.classList.add('hide');
    });
       buttonPublic.addEventListener('click', () => {
        postNew.classList.add('hide');
        const postEdited = viewPostUser.querySelector('#postUser').value;
        editFunction(idPost, postEdited);
        postInitial.value = postEdited;
        postInitial.classList.remove('hide');
      });
      const likeFunction = (idPost, idUser, isLike) => like(idPost, idUser, isLike);
      const buttonLike = viewPostUser.querySelector('#heartImg');
      const buttonRed= viewPostUser.querySelector('#heartRed')
      buttonLike.addEventListener('click', () => {
        buttonRed.classList.remove('hide');
        buttonLike.classList.add('hide');
      });
      buttonRed.addEventListener('click', () => {
        buttonRed.classList.add('hide');
        buttonLike.classList.remove('hide');
      });
      buttonLike.addEventListener('click', () => {
          showsPost().then((res) => res.forEach((doc) => {
            if (doc.id === idPost) {
              if (doc.data().like.includes(auth.currentUser.uid)) {
                likeFunction(idPost, auth.currentUser.uid, true);
              } else {
                likeFunction(idPost, auth.currentUser.uid, false);
              }
            }
          }));
        });
    return viewPostUser;
}



