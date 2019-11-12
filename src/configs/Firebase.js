import * as firebase from 'firebase'
import firebaseConfig from './FirebaseConfig';

firebase.initializeApp(firebaseConfig)

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")

export const categoriesRef = databaseRef.child("categories")

export const configedFirebase = firebase;