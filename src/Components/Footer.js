import React, { memo } from "react"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

export default memo(function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
})
