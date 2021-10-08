import React from 'react'
import Typography from '@mui/material/Typography'

interface TitleProp {
  children: React.ReactNode
}

export default function Title({ children }: TitleProp) {
  return (
    <Typography component='h2' variant='h6' color='primary' gutterBottom>
      {children}
    </Typography>
  )
}
