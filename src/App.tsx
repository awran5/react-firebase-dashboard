import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useAuthState } from 'react-firebase-hooks/auth'

import CircularProgress from '@material-ui/core/CircularProgress'
import SignIn from './Components/SignIn'
import Dashboard from './Components/Dashboard'

import './App.css'

const App = () => {
  const { Auth } = useContext(AppContext)
  const [user, loading, error] = useAuthState(Auth)
  if (error) return <h1>Error: {error}</h1>
  if (loading)
    return (
      <div className='loading'>
        <CircularProgress size={60} />
      </div>
    )

  return <div className='App'>{user ? <Dashboard /> : <SignIn />}</div>
}

export default App
