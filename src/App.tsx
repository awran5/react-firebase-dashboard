import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { useAuthState } from 'react-firebase-hooks/auth'
import CircularProgress from '@material-ui/core/CircularProgress'

import SignIn from './Components/SignIn'
import Dashboard from './Components/Dashboard'

import { auth } from './Firebase'
import './App.css'

const App = () => {
  const [user, loading, error] = useAuthState(auth)
  if (error) return <h1>Error: {error}</h1>
  if (loading)
    return (
      <div className='loading'>
        <CircularProgress size={60} />
      </div>
    )

  return (
    <div className='App'>
      <CssBaseline />
      {user ? <Dashboard /> : <SignIn />}
    </div>
  )
}

export default App
