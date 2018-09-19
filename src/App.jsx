import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListSubheader from "@material-ui/core/ListSubheader";
import One from "./subComp/one";
import Two from "./subComp/two";
import OneAlert from "./renderProps/one";
import TwoAlert from "./renderProps/two";
import OneHoc from "./hoc/oneHOC";
import oneHOC from "./hoc/oneHOC";
import twoHOC from "./hoc/twoHOC";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    marginTop: "50px",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    this.setState(state => ({ ...state, open: !state.open }));
  }

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;
    const drawer = (
      <Drawer
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>

          <ListSubheader>HOC</ListSubheader>
          <ListItem>
            <Link to="/higher-order-comp/1">Security</Link>
          </ListItem>
          <ListItem>
            <Link to="/higher-order-comp/2">Lists</Link>
          </ListItem>

          <ListSubheader>Render Props</ListSubheader>
          <ListItem>
            <Link to="/render-props/1">Dialog Box</Link>
          </ListItem>
          <ListItem>
            <Link to="/render-props/2">Custom Dialog Box</Link>
          </ListItem>
          <ListSubheader>Compound Component</ListSubheader>
          <ListItem>
            <Link to="/compound-comp/1">Form(s)</Link>
          </ListItem>
          <ListItem>
            <Link to="/compound-comp/2">Updated Form(s)</Link>
          </ListItem>
          <ListSubheader>Context</ListSubheader>
        </List>
      </Drawer>
    );

    return (
      <Router>
        <CssBaseline>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawer}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Advanced React Component
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <Route path="/compound-comp/1" component={One} />
            <Route path="/compound-comp/2" component={Two} />
            <Route path="/render-props/1" component={OneAlert} />
            <Route path="/render-props/2" component={TwoAlert} />
            <Route path="/higher-order-comp/1" component={oneHOC} />
            <Route path="/higher-order-comp/2" component={twoHOC} />
          </main>
        </CssBaseline>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
