import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

export const App = firebase.initializeApp({
  // Firebase Config
})

export const Auth = firebase.auth()
export const Firestore = firebase.firestore()
export const Storage = firebase.storage()
export default firebase
