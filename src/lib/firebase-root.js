//Este root tiene todas las funciones declaradas en una constante. 
import { app, db} from './firebaseConf.js';
import { GoogleAuthProvider } from './firebase-funtion.js';
import { logOut, provider, signInGoogle,loginUser,createUserAccount} from './firebaseAuth.js';
import { changeView } from '../viewRoot/router.js';
import { addDoc, collection, query, getDocs, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove, orderBy} from './firebase-funtion.js';
import { postView } from '../views/viewWall.js';
//evento de firebase para registrar nuevo usuario y sus errores.
  export const userNew = (usuarioSignUp, passwordSignUp) => {
    createUserAccount(usuarioSignUp, passwordSignUp)
      .then((userCredential) => {
       changeView('#/wall'); 
       postView();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = document.querySelector('#errorMessage');
        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage.innerHTML = 'Registered email, please enter a new one';
            break;
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'Invalid email';
            break;
          case 'auth/weak-password':
            errorMessage.innerHTML = 'The password must contain at least 6 characters';
            break;
          default:
            break;
        }
      // ..
      });
    };
 //evento de firease para verificar con el auth el usuario que ya esta registrado 
    export const loginUserEvent = (auth, usuarioSignIn, passwordSignIn) => {
    loginUser(auth, usuarioSignIn, passwordSignIn)
      .then((userCredential) => {
       const user = userCredential.user;
       changeView('#/wall');
       postView();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = document.querySelector('#errorMessage');
        switch (errorCode) {
          case '':
            errorMessage.innerHTML = '';
            break;
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'Invalid email';
            break;
          case 'auth/user-not-found':
            errorMessage.innerHTML = 'The user is not registered';
            break;
          case 'auth/wrong-password':
            errorMessage.innerHTML = 'Incorrect password';
            break;
          default: 
            break;
        }
      });
  };
  //Registro con Google. 
    export const loginGoogleEvent = (auth, provider) => {
        signInGoogle(auth, provider)
      .then((result) => {
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     // The signed-in user info.
     const user = result.user;
     changeView('#/wall');
     postView();
      })
      //...
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
  }  
//Desde aca empieza a conectarse a fireStore. 

  export const savePost = (post, userName, date) => addDoc(collection(db, 'post'), {
    post, userName, date, like: [],
  });
  export const showsPost = async () => {
    const querySnapshot = await getDocs(collection(db, 'post'));
    return querySnapshot;
  };
  
  export const onSnapshotFunction = () => {
    const q = query(collection(db, 'post'), orderBy ("date", "desc"));
    return q;
  };
  export const deletePost = async (id, post) => await deleteDoc(doc(db, 'post', id));
  export const editPost =(id, postUpdate) => updateDoc(doc(db, 'post', id), { post: postUpdate });
  export const like = (idPost, idUser, isLike) => {
    if (!isLike) {
      return updateDoc(doc(db, 'post', idPost), { like: arrayUnion(idUser) });
    } else {
      return updateDoc(doc(db, 'post', idPost), { like: arrayRemove(idUser) });
    }
  };

 //Evento salir 
 export const logOutEvent = (auth) => {
  logOut(auth)
  .then(() => {
    changeView('#/');
  });
};