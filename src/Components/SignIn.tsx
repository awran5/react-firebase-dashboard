import React, { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import SvgIcon from '@mui/material/SvgIcon'

import { auth } from '../Firebase'
import Footer from './Footer'

const theme = createTheme()

export default function SignInSide() {
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
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#eee' }}>
              <SvgIcon viewBox='0 0 512 512' sx={{ width: '100%' }}>
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
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={handleLogin}
              sx={{
                mt: 4,
                p: 2,
                fontSize: '14px',
                textTransform: 'capitalize'
              }}
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
          </Box>
          <Box mt={5}>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
