import { auth } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

export async function registarUtilizador(email,password){

try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

alert("Conta criada com sucesso!");

return userCredential.user;

}catch(error){

alert(error.message);

return null;

}

}

export async function loginUtilizador(email,password){

try{

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Login efetuado com sucesso!");

return userCredential.user;

}catch(error){

alert(error.message);

return null;

}

}

export async function logoutUtilizador(){

await signOut(auth);

}