import React, { createContext } from "react"
import firebase, { App, Auth, Firestore, Storage } from "./Firebase"

export const AppContext = createContext()

const cloudRef = ref => Firestore.collection(ref)
const storageRef = ref => Storage.ref(ref)

export default function ContextProvider({ children }) {
  return (
    <AppContext.Provider value={{ firebase, App, Auth, cloudRef, storageRef }}>
      {children}
    </AppContext.Provider>
  )
}
