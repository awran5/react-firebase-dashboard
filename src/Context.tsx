import React, { createContext } from 'react'
import firebase, { App, Auth, Firestore } from './Firebase'

interface ContextProps {
  firebase: typeof firebase
  App: firebase.app.App
  Auth: firebase.auth.Auth
  cloudRef: (ref: string) => firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
}

export const AppContext = createContext<ContextProps>({
  firebase,
  App,
  Auth,
  cloudRef: (ref: string) => Firestore.collection(ref),
})

const cloudRef = (ref: string) => Firestore.collection(ref)

interface ProviderProps {
  children: React.ReactNode
}

export default function ContextProvider({ children }: ProviderProps) {
  return <AppContext.Provider value={{ firebase, App, Auth, cloudRef }}>{children}</AppContext.Provider>
}
