import React, { useContext, useState } from "react"
import { AppContext } from "../Context"
import { useAuthState } from "react-firebase-hooks/auth"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import Box from "@material-ui/core/Box"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"
import Avatar from "@material-ui/core/Avatar"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { mainListItems, secondaryListItems } from "./listItems"
import SignOut from "./SignOut"
import Footer from "./Footer"
import Title from "./Title"

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1, 1.5),
    borderColor: "#fff",
    color: "#fff",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: theme.spacing(0, 3),
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const { Auth } = useContext(AppContext)
  const [currentUser] = useAuthState(Auth)
  const [open, setOpen] = useState(true)

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const handleDrawer = () => setOpen(prev => !prev)

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}>
              Welcome {currentUser.displayName}!
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar
              alt={currentUser.displayName}
              src={currentUser.photoURL}
              className={classes.avatar}
            />
            <SignOut />
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Routes */}
              <Switch>
                {/* Dashboard */}
                <Route path="/dashboard">
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      <Title>Dashboard</Title>
                    </Paper>
                  </Grid>
                </Route>
                {/* Orders */}
                <Route path="/orders">
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      <Title>Orders</Title>
                    </Paper>
                  </Grid>
                </Route>
                {/* Customers */}
                <Route path="/customers">
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      <Title>Customers</Title>
                    </Paper>
                  </Grid>
                </Route>
                {/* Redirect none matches routes */}
                <Route render={() => <Redirect to="/dashboard" />} />
              </Switch>
            </Grid>
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
      </div>
    </Router>
  )
}
