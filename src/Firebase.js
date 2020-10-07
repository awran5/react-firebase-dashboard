import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

export const App = firebase.initializeApp({
  apiKey: "AIzaSyDSNuRV4OxfZJR19UvyG8WFrR5GyuFA2Z4",
  authDomain: "firechat-da1c0.firebaseapp.com",
  databaseURL: "https://firechat-da1c0.firebaseio.com",
  projectId: "firechat-da1c0",
  storageBucket: "firechat-da1c0.appspot.com",
  messagingSenderId: "12211814375",
  appId: "1:12211814375:web:c018c774eeb69f6e5f8742",
  measurementId: "G-YXLH6NRVH4",
})

export const Auth = firebase.auth()
export const Firestore = firebase.firestore()
export const Storage = firebase.storage()
export default firebase
