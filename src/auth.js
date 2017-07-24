import firebase from 'firebase'
import { config } from './firebase_config.js' 

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export function auth (email, pw, companyType) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then((user) => saveUser(user, companyType))
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user, companyType) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      companyType,
    })
    .then(() => user)
}

export function updateUser (uid, userObj) {
  return ref.child(`users/${uid}/info`)
    .update(userObj)
    .then(() => uid)
}
