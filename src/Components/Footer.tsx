import React, { FC, memo } from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const Footer: FC<{}> = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

export default memo(Footer)
