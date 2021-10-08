import React from 'react'
import { signOut } from 'firebase/auth'
import Button from '@mui/material/Button'
import { auth } from '../Firebase'

export default function SignOut() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((err) => {
        // Error happened.
        console.log(err)
      })
  }

  return (
    <Button onClick={handleLogout} variant='outlined' sx={{ borderColor: '#fff', color: '#fff', margin: 1 }}>
      Logout
    </Button>
  )
}
