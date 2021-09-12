import React from 'react'
import { signOut } from 'firebase/auth'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { auth } from '../Firebase'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 2),
    borderColor: '#fff',
    color: '#fff'
  }
}))

export default function SignOut() {
  const classes = useStyles()

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
    <Button onClick={handleLogout} variant='outlined' className={classes.button}>
      Logout
    </Button>
  )
}
