import React, { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'

import { auth } from '../Firebase'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#fff',
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  svg: {
    width: '100%',
    height: '100%'
  },
  title: {
    margin: theme.spacing(1, 0, 3)
  },
  card: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1),
    height: theme.spacing(7),
    fontSize: '14px',
    textTransform: 'capitalize'
  }
}))

export default function SignInSide() {
  const classes = useStyles()

  const [signInError, setSignInError] = useState('')

  const handleLogin = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken
        // The signed-in user info.
        // console.log(result)

        console.log(result)
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential
        // ...
        setSignInError(error.message)
        console.log(error)
      })
  }
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SvgIcon viewBox='0 0 512 512' className={classes.svg}>
              <path
                fill='#FBBB00'
                d='M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
            c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
            C103.821,274.792,107.225,292.797,113.47,309.408z'
              />
              <path
                fill='#518EF8'
                d='M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
            c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
            c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z'
              />
              <path
                fill='#28B446'
                d='M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
            c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
            c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z'
              />
              <path
                fill='#F14336'
                d='M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
            c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
            C318.115,0,375.068,22.126,419.404,58.936z'
              />
            </SvgIcon>
          </Avatar>
          <Typography component='h1' variant='h5' className={classes.title}>
            Sign in!
          </Typography>
          <div className={classes.card}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleLogin}
              className={classes.button}
              fullWidth
              startIcon={<LockOutlinedIcon />}
            >
              Sign in with your Google Account
            </Button>
            {signInError && (
              <Typography color='error' variant='subtitle1'>
                {signInError}
              </Typography>
            )}
            <Box mt={5}>
              <Footer />
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
