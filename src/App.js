import React, { useContext } from "react"
import { AppContext } from "./Context"
import { useAuthState } from "react-firebase-hooks/auth"

import SignIn from "./Components/SignIn"
import Dashboard from "./Components/Dashboard"
import Loading from "./Components/Loading"
import "./App.css"

function App() {
  const { Auth } = useContext(AppContext)
  const [user, loading, error] = useAuthState(Auth)
  if (error) return
  if (loading) return <Loading />

  return <div className="App">{user ? <Dashboard /> : <SignIn />}</div>
}

export default App
