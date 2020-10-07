import React, { useContext } from "react"
import { AppContext } from "../Context"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1, 2),
    borderColor: "#fff",
    color: "#fff",
  },
}))

export default function SignOut() {
  const classes = useStyles()
  const { Auth } = useContext(AppContext)

  const handleLogout = () => {
    Auth.signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      })
  }

  return (
    <Button onClick={handleLogout} variant="outlined" className={classes.button}>
      Logout
    </Button>
  )
}
