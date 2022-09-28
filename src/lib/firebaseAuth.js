import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,
signOut} from './firebase-funtion.js';

export const auth = getAuth();

export const createUserAccount = (usuarioSignUp, passwordSignUp) => 
createUserWithEmailAndPassword(auth, usuarioSignUp, passwordSignUp);

export const loginUser = (auth, usuarioSignIn, passwordSignIn) => 
 signInWithEmailAndPassword(auth, usuarioSignIn, passwordSignIn);

export const provider = new GoogleAuthProvider();

export const signInGoogle = (auth, provider) => signInWithPopup(auth, provider);

export const logOut = (auth) => signOut(auth);